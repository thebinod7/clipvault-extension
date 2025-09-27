console.log('📋 Clipboard Manager content script injected!');
declare const chrome: any;

// Example: Highlight all occurrences of "copy" on the page
const highlight = () => {
    const regex = /\bcopy\b/gi;
    document.body.innerHTML = document.body.innerHTML.replace(
        regex,
        (match) => `<mark style="background: yellow">${match}</mark>`
    );
};

highlight();

// Listen for messages from background
chrome.runtime.onMessage.addListener(
    (message: any, sender: any, sendResponse: any) => {
        console.log('SENDER: ', sender);
        if (message.type === 'PING') {
            console.log('Received PING from background!');
            sendResponse({ type: 'PONG from content script' });
        }
    }
);
