# RAiD AdBlocker

RAiD AdBlocker is a simple and efficient Chrome extension that removes ads from webpages, keeping your browsing experience clean and distraction-free. It tracks the number of ads blocked and provides an easy-to-use toggle switch for enabling or disabling the ad blocker.

## 📌 Features

- **Blocks intrusive ads** from various websites, including YouTube
- **Counts the number of ads blocked** and displays it in the popup
- **Lightweight and efficient**, running seamlessly in the background
- **Works in both Normal and Incognito mode**
- **User-friendly toggle switch** to enable/disable ad-blocking

## 🔧 Installation

1. **Download the extension files** or clone this repository:
   ```bash
   git clone https://github.com/NoxiousChain/raid-adblocker.git
   ```
2. Open Chrome and go to `chrome://extensions/`
3. Enable Developer Mode (toggle in the top-right corner)
4. Click "Load unpacked" and select the folder containing the extension files
5. The extension is now installed and ready to block ads!

## 🚀 Usage

1. Click on the RAiD AdBlocker extension icon in Chrome
2. The popup will display:
   - A toggle switch to enable/disable ad-blocking
   - The number of ads blocked
3. Toggle the switch to turn ad blocking on or off
4. The webpage will reload to apply the changes

## 🔒 Enable Incognito Mode

To allow the extension to work in Incognito mode:

1. Open Chrome and go to `chrome://extensions/`
2. Find RAiD AdBlocker and click "Details"
3. Toggle "Allow in Incognito" to enable it

## 🛠️ How It Works

- The extension scans webpages for common ad elements (e.g., ad containers, iframes, promoted content)
- It removes ads dynamically and observes webpage changes to block newly loaded ads
- The popup UI fetches and displays the number of ads blocked in real-time

## 📄 File Structure

```
/raid-adblocker
│── manifest.json       # Chrome extension manifest file
│── content.js          # Script that removes ads
│── popup.js           # Handles UI interactions in the popup
│── popup.html         # Popup window UI
│── icon.png           # Extension icon
│── README.md          # This documentation
```

## 📌 Permissions Used

- **scripting**: Allows modification of webpage content to remove ads
- **storage**: Saves user preferences and ad block counts
- **host_permissions**: Enables blocking ads on all websites

## ⚠️ Disclaimer

RAiD AdBlocker is an open-source project that aims to improve user experience. You should use it responsibly, and some websites may detect ad blockers.

## 💡 Contribution

Feel free to fork the repository and improve the extension! PRs are welcome. 🎉
