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

