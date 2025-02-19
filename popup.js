document.addEventListener('DOMContentLoaded', function () {
    const toggle = document.getElementById('adblocker-toggle');
    const adsBlockedDisplay = document.getElementById('adsBlockedCount');

    chrome.storage.local.get(['adBlockerEnabled', 'adsBlockedCount'], function (result) {
        toggle.checked = result.adBlockerEnabled !== false;
        adsBlockedDisplay.textContent = result.adsBlockedCount || 0;
    });

    toggle.addEventListener('change', function () {
        const isEnabled = toggle.checked;
        chrome.storage.local.set({ adBlockerEnabled: isEnabled });
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            chrome.tabs.reload(tabs[0].id);
        });
    });

    setInterval(() => {
        chrome.storage.local.get('adsBlockedCount', function (data) {
            adsBlockedDisplay.textContent = data.adsBlockedCount || 0;
        });
    }, 1000);
});