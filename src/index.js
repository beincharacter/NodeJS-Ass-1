const fs = require('fs');
const { resolve } = require('path');

const myFileWriter = async (fileName, fileContent) => {
	// write code here
	// dont chnage function name
	// await new Promise((resolve) => {
		fs.writeFile(fileName, fileContent, 'utf-8', (err) => {
			if(err) throw err;
			console.log('The file has been created');
		})
	// })
	}
	// console.log('vjsvcf')
const myFileReader = async (fileName) => {
	// write code here
	// dont chnage function name
	await new Promise((resolve) => {
		fs.readFile(fileName,'utf-8', (err, data ) => {
			if(err) throw err;
			console.log(data);
		})
	})
}


const myFileUpdater = async (fileName, fileContent) => {
	// write code here
	// dont chnage function name
	await new Promise((resolve) => {
		fs.appendFile(fileName, fileContent, (err) => {
			if (err) throw err;
			console.log('updated!')
		})
	})
}

const myFileDeleter = async (fileName) => {
	// write code here
	// dont chnage function name
	await new Promise((resolve) => {
		fs.unlink(fileName, (err) => {
			if(err) throw err;
			console.log('File deleted!')
		})
	})
}

// myFileReader('myFile.txt');

module.exports = { myFileWriter, myFileUpdater, myFileReader, myFileDeleter }