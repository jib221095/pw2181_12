const {app, BrowserWindow} = require('electron') 
const path = require('path')
const url = require('url')
//Constantes para PDF
const electron = require('electron');
//sistema de archivos
const fs = require('fs');
//acceso al sistema operativo
const os = require('os');
//para declarar una funcion remota
const ipc = electron.ipcMain;
//acceso a la terminal-linea de comandos
const shell = electron.shell;

let pantallaPrincipal;
 
 //Objeto global para compartir datos dentre pantallas
 global.infoUsuarios = {
	 nombre: '',
	 genero: '',
	 foto: '',
	 direccion: '',
	 telefono: ''

}

ipc.on('print-to-pdf',function(event){
	const pdfPath=path.join(os.tmpdir(),'print.pdf')
	const win=BrowserWindow.fromWebContents(event.sender)
	win.webContents.printToPDF({},function(error,data){
		if(error) throw error
		fs.writeFile(pdfPath,data,function(error){
			if(error){
				throw error
			}
			shell.openExternal('file://'+pdfPath)
			win.close()
		})
	})
})

function muestraPantallaPrincipal(){
	pantallaPrincipal = new BrowserWindow({width:320,height:425});
	pantallaPrincipal.loadURL(url.format({pathname: path.join(__dirname,'index.html'),
										  protocol: 'file',
										  slashes: true}))
	//pantallaPrincipal.webContent.openDevTools();
	pantallaPrincipal.show();
}
app.on('ready',muestraPantallaPrincipal)