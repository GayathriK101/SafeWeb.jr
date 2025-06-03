import { db, collection, addDoc } from "./firebase-config.js";

const badWords = ["kill", "useless", "suicide", "hate", "idiot", "dumb", "porn"]; // list of bad words to flag

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
      words: flaggedWords
    };

    // Save to Firestore
    addDoc(collection(db, "flaggedContent"), flaggedData)
      .then(() => console.log("✅ Flagged content sent to Firestore"))
      .catch((error) => console.error("❌ Firestore error:", error));
  }
}

// Run the scan after 3 seconds to ensure page is loaded
setTimeout(scanPage, 3000);
console.log("Extension running successfully");
