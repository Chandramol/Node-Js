// FS stand for File system
const fs=require('fs')

// fs.readFile('file name','encoding',callback funtion)  ==> to read data from file in project

// fs.readFile('file.txt','utf8',(err,data)=>{
//     console.log('err---->',err,'data---->',data);
// })
// console.log('Finish file system');

// In this my console.log first print and then printing file content because node is non-blocking IO model so don't stop further content if we want to block and synchronous then we can use fs.readFileSync method

const a=fs.readFileSync('file.txt')
console.log(a.toString());
console.log('Finished fileSync');

// Same as readFile but wirteFile will be write data in file with given path
// fs.writeFile('file name,'data',callbakck funtion)

// fs.writeFile('file2.text','this is writeFile in file 2',()=>{
//     console.log('Written data');
// })
// console.log('Finished the writeFile');

fs.writeFileSync('file2.text','this is writeFile in file 2 with wrireFileSync')

console.log('Finished the writeFileSync');