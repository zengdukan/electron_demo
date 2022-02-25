
function listenEvent(element, eventName, callback) {
    document.getElementById(element).addEventListener(eventName, callback);
}

listenEvent('toggle-dark-mode', 'click', async () => {
    const isDarkMode = await window.theme.toggle();
    document.getElementById('theme-source').innerHTML = isDarkMode ? 'Dark' : 'Light'
});

listenEvent('reset-to-system', 'click', async () => {
    await window.theme.system();
    document.getElementById('theme-source').innerHTML = 'System';
});

listenEvent('async', 'click', () => {
    window.ipcRenderer.send('asynchronous-message', 'ping')
});


listenEvent('sync', 'click', () => {
    console.log(window.ipcRenderer.sendSync('synchronous-message', 'ping'));
});

listenEvent('renderToRender', 'click', () => {
    console.log('send renderToRender');
    window.ipcRenderer.emit('renderToRender', 'render');
});

window.ipcRenderer.on('asynchronous-reply', (event, arg) => {
    console.log(arg);
});

window.ipcRenderer.on('ping', (event, message) => {
    console.log(message.id);
    console.log(message.txt ?? 'unkown');
});

window.ipcRenderer.on('renderToRender', (message) => {
    console.log(message);
});