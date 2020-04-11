document.getElementById('test').innerHTML = 'ahhhhhhh';
document.getElementById('test2').innerHTML = testsite;

function getCurrentWindowTabs()
{
    return browser.tabs.query({ currentWindow: true });
}

getCurrentWindowTabs().then(tabs =>
{
    for (let tab of tabs)
    {
        if (tab.active)
        {
            document.getElementById('test').innerHTML = tab.title;
        }
    }
});


function handleMessage(request, sender, sendResponse)
{
    console.log("Message from the content script: " +
        request.greeting);
    sendResponse({ response: "Response from background script" });
}

browser.runtime.onMessage.addListener(handleMessage);

/**
 * When the popup loads, inject a content script into the active tab,
 * and add a click handler.
 * If we couldn't inject the script, handle the error.
 */
/*browser.tabs.executeScript({ file: "/content_scripts/beastify.js" })
    .then(listenForClicks)
    .catch(e => console.error(e));*/