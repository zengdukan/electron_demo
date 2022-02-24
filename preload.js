const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('theme', {
    toggle: () => ipcRenderer.invoke('dark-mode:toggle'),
    system: () => ipcRenderer.invoke('dark-mode:system'),
});