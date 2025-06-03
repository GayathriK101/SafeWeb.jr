chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === "flagged") {
    chrome.notifications.create({
      type: "basic",
      iconUrl: "icon.png", // optional
      title: "SaveWebJr Alert!",
      message: Flagged words found on: ${message.data.url},
      priority: 1,
    });
  }
});