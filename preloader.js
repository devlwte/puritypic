const { ipcRenderer } = require('electron');


window.addEventListener("DOMContentLoaded", () => {
    ipcRenderer.on('console-log', (event, message) => {
        // Manejar el registro
        console.log(message);
    });
})