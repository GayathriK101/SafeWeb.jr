const badWords = ["kill", "useless", "suicide", "hate", "idiot", "dumb", "porn"];

function scanPage() {
  const bodyText = document.body.innerText.toLowerCase();
  const flaggedWords = [];

  badWords.forEach((word) => {
    if (bodyText.includes(word)) {
      flaggedWords.push(word);
    }
  });

  if (flaggedWords.length > 0) {
    const flaggedData = {
      timestamp: new Date().toISOString(),
      url: window.location.href,
      words: flaggedWords,
    };

    chrome.storage.local.get({ flagged: [] }, function (result) {
      const updated = result.flagged || [];
      updated.push(flaggedData);
      chrome.storage.local.set({ flagged: updated }, () => {
        console.log("⚠ Inappropriate content flagged:", flaggedData);

        // Notify background.js
        chrome.runtime.sendMessage({
          type: "flagged",
          data: flaggedData,
        });
      });
    });
  }
}

setTimeout(scanPage, 3000);
console.log("✅ Extension running successfully");