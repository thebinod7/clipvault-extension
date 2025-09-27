declare const chrome: any;
chrome.runtime.onInstalled.addListener(() => {
    console.log('Chrome extension installed');
});

chrome.action.onClicked.addListener((tab: any) => {
    console.log('Extension icon clicked', tab);
});
