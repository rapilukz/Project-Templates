const { ipcRenderer, contextBridge } = require("electron");

const API = {
  minimizeWindow: () => ipcRenderer.send("minimize-window"),
  maximizeWindow: () => ipcRenderer.send("maximize-window"),
};

contextBridge.exposeInMainWorld("electronApi", API);
