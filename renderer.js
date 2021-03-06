const electron = require("electron");
let myNotification = new Notification('Title', {
    body: 'Lorem Ipsum Dolor Sit Amet'
})
function createBrowserWindow() {
    const BrowserWindow = require('electron').remote.BrowserWindow;
    const win = new BrowserWindow({
        width: (window.innerWidth*0.8), height: (window.innerHeight*0.8),
        webPreferences: {
            nodeIntegration: true
        }
    })
    win.loadFile('index.html');
}
myNotification.onclick = () => {
    console.log('Notification clicked')
}
const button = document.getElementById('sub');

button.addEventListener('click', () => {
    createBrowserWindow();
});

