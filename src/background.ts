declare const chrome: any;

chrome.runtime.onInstalled.addListener(() => {
    console.log('✅ Extension installed');
});

chrome.action.onClicked.addListener((tab: any) => {
    if (tab.id) {
        chrome.tabs.sendMessage(tab.id, { type: 'PING' }, (response: any) => {
            console.log('Got response from content script:', response);
        });
    }
});
