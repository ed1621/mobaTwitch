require('Common'); // Includes Tint's API, and sets up the runtime bridge.
var window = new Window(); // Creates an initially hidden window.
window.width = 1280;
window.height = 1000;
application.exitAfterWindowsClose = true; // If no windows are open, exit.
window.visible = true; // Show the window to the user.
window.title = "MLGTwitch"; // Give the window a caption.

var webview = new WebView(); // Create a new webview for HTML.
window.appendChild(webview); // attach the webview to the window.

// position the webview 0 pixels from all the window's edges.
webview.left= 1;
webview.right=webview.top=webview.bottom=0;

// What we should do when the web-page loads.
webview.addEventListener('load', function() {
    webview.postMessage(JSON.stringify(process.versions));
});

webview.location = "app://index.html"; // Tell the webview to render the index.html
