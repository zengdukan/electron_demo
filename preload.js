const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('theme', {
    toggle: () => ipcRenderer.invoke('dark-mode:toggle'),
    system: () => ipcRenderer.invoke('dark-mode:system'),
});

contextBridge.exposeInMainWorld('ipcRenderer', {
    send(channel, ...args) {
        ipcRenderer.send(channel, ...args);
    },

    sendSync(channel, ...args) {
        return ipcRenderer.sendSync(channel, ...args);
    },

    invoke(channel, ...args) {
        ipcRenderer.invoke(channel, ...args);
    },

    postMessage(channel, message, [transfer]) {
        ipcRenderer.postMessage(channel, message, transfer);
    },

    on(channel, listener) {
        ipcRenderer.on(channel, listener);
    },

    emit(eventName, ...args) {
        ipcRenderer.emit(eventName, ...args);
    }
})