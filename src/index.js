/**
 * ! What is happening here?
 * * Check out the package.json file.  Notice that there are some changes between this project
 * * and the previous one.  What changes?
 * 
 * * 1. devDependncies shows a library that we are using in our project.  It is called nodemon.
 * *    To add that library to our project I typed, "npm install --save-dev nodemon"
 * * 2. The scripts section shows an entry called run_hot_js.  This script asks the nodemon
 * *    library to watch scr/index.js.  When that file is changed and saved, it will restart.
 * 
 * * To test this file out, open your terminal and type:
 * ! npm run run_hot_js
 * * Try making changes to the console log message, then resave the file.  What happens?
 */

console.log("Hey student buddies! How are you today?");