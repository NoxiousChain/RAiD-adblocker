function removeAds() {
    const adSelectors = [
        'iframe[src*="ads"]',
        'div[id^="ad-"]',
        'ytd-ad-slot-renderer',
        'ytd-promoted-sparkles-web-renderer',
        'yt-mealbar-promo-renderer',
        '.ad-container',
        '.ad-slot',
        '.google-ad',
        '[aria-label="Ads"]'
    ];

    let adsBlocked = 0;

    adSelectors.forEach(selector => {
        document.querySelectorAll(selector).forEach(ad => {
            ad.remove();
            adsBlocked++;
        });
    });

    if (adsBlocked > 0) {
        chrome.storage.local.get({ adsBlockedCount: 0 }, function (data) {
            chrome.storage.local.set({ adsBlockedCount: data.adsBlockedCount + adsBlocked });
        });
    }
}

chrome.storage.local.get(['adBlockerEnabled'], function (result) {
    if (result.adBlockerEnabled !== false) {
        removeAds();
        setInterval(removeAds, 3000);
        observeAds();
    }
});

function observeAds() {
    const observer = new MutationObserver(removeAds);
    observer.observe(document.body, { childList: true, subtree: true });
}

document.addEventListener("DOMContentLoaded", () => {
    chrome.storage.local.get(['adBlockerEnabled'], function (result) {
        if (result.adBlockerEnabled !== false) {
            removeAds();
            observeAds();
        }
    });
});

window.addEventListener("load", () => {
    chrome.storage.local.get(['adBlockerEnabled'], function (result) {
        if (result.adBlockerEnabled !== false) {
            removeAds();
            observeAds();
        }
    });
});