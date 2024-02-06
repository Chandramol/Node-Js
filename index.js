// what is node ?
// node
// What is npm ?
// npm stands for node package manager which is manage the all packages of node.

// cmd : npm init (to create(Initializes) package.json file and give informations related to creating project there as name,description,version etc.)

// cmd : npm install (to install node models in project)
// cmd : npm i express --save (to install any package in project through npm)
//  --save is using when install any package in dependencies before npm version 5 so it is not needed to write now or can write also
// --save-dev is using when install any package in devDependencies (ex. npm i --save-dev nodemon (it will be installed in devDependencies it means only for development time))
// cmd : npm uninstall (to uninstall any packages from dependencies and devDependencies)

// to run this file command in terminal : node index

// What is nodemon ?
// cmd : npm i -g nodemon
// It is see files while there is any changes hanppen so it is very usefull when http server runs (ex. nodemon index.js (when you save file it will run automatically and returns the file))

// import data from other file (second way as module in ES6 of JS)
const data = require("./second");
console.log(data, "dfta");
console.log("Hello chanmol");
