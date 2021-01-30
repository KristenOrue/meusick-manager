//Import the app and BrowserWindow modules of the electron package to:
//      -manage your application lifecycle events
//      -create and control browser windows       
const { app, BrowserWindow } = require('electron')

//Define a function that creates a new browser window with node integrations enabled
//Loads index.html file into this window. 
function createWindow () {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  })
  win.loadFile('index.html')
}

//You create a new browser window by invoking createWindow function
//Once the Electron application is initialized
app.whenReady().then(createWindow)

//You add a new listener that tries to quite the application when it
//no longer has any open windows. 
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

//You add a new listener that creates a new browser window ONLY IF  when
//The application has NO VISIBLE WINDOWS after being activated. 
//Ex: After launching the application for the first time, or re-launching
//The already running application 
app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})
