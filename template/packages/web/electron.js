const {app, BrowserWindow, ipcMain} = require('electron');
const isDev = require('electron-is-dev');
const {resolve} = require('path');

let win;

const createWindow = () => {
  win = new BrowserWindow({
    width: 1200,
    height: 800,
    show: false,
  });

  if (isDev) {
    win.loadURL('http://localhost:8081/');
  } else {
    win.loadURL(resolve(__dirname, 'dist/'));
  }

  win.webContents.openDevTools();

  win.webContents.on('did-finish-load', () => {
    win.show();
    win.focus();
  });

  win.on('closed', function() {
    if (process.platform !== 'darwin') {
      app.quit();
    }
    win = null;
  });

  if (isDev) {
    const {
      REACT_DEVELOPER_TOOLS,
      default: installExtension,
    } = require('electron-devtools-installer');
    installExtension(REACT_DEVELOPER_TOOLS).then(() => {
      win.webContents.openDevTools();
    });
  }
};

app.on('ready', createWindow);

app.on('window-all-closed', function() {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', function() {
  if (win === null) {
    createWindow();
  }
});

ipcMain.on('get-result', (event, arg) => {
  event.returnValue = `electron-${arg.name}`;
});
