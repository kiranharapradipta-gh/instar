function downloadmedia(url, filename, callback) {
  chrome.downloads.download({
    url: url,
    filename: filename || undefined,
    // saveAs: true // Optional, forces the browser to prompt the user for a download location
  }, function(downloadid) {
    if (chrome.runtime.lastError) {
      console.error('Error downloading media:', chrome.runtime.lastError.message);
      alert('Failed to download media. Please try again.');
    } else {
      console.log('Media download initiated with ID:', downloadid);
      // Listen for changes in the download status
      chrome.downloads.onChanged.addListener(function listener(downloadDelta) {
        if (downloadDelta.state && downloadDelta.state.current === 'complete' && downloadDelta.id === downloadid) {
          chrome.downloads.onChanged.removeListener(listener); // Remove the listener
          console.log('Media downloaded successfully with ID:', downloadid);
          alert('Media downloaded successfully!');
          callback(downloadid);
        }
      });
    }
  });
}

chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
  if (message.action === "downloadmedia") {
    downloadmedia(message.url, message.filename, function(downloadid) {
      sendResponse({ success: true });
    });
    return true;
  }
});
