const { app, BrowserWindow, ipcMain } = require("electron");
const { join } = require("path");

const isDev = process.env.IS_DEV == "true" ? true : false;

function createWindow() {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 1366,
    height: 768,
    show: false,
    frame: true,
    minWidth: 768,
    minHeight: 400,

    webPreferences: {
      preload: join(__dirname, "preload.js"),
      //devTools: isDev,
    },
  });

  
  mainWindow.setMenuBarVisibility(false);

  mainWindow.loadURL(
    isDev
      ? "http://localhost:5173"
      : `file://${join(__dirname, "../dist/index.html")}`
  );

  mainWindow.on("ready-to-show", mainWindow.show);

  // Open the DevTools.
  if (isDev) {
    mainWindow.webContents.openDevTools();
  } else {
    mainWindow.maximize();
  }

  return mainWindow;
}

app.on("ready", createWindow);

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

// IPC EVENTS

ipcMain.on("minimize-window", () => {
  BrowserWindow.getFocusedWindow().minimize();
});

ipcMain.on("maximize-window", () => {
  const focusedWindow = BrowserWindow.getFocusedWindow();

  focusedWindow.isMaximized() ? focusedWindow.unmaximize() : focusedWindow.maximize();
});
