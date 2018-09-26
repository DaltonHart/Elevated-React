#!/usr/bin/env node

let shell = require('shelljs')
let colors = require('colors')
let fs = require('fs')
let templates = require('./templates/templates.js')

let appName = process.argv[2]
let appDirectory = `${process.cwd()}/${appName}`

// function to call other functions in order
const run = async () => {
    let success = await createReactApp()
    if (!success) {
        console.log('Something went wrong while trying to create a new React app using create-react-app'.red)
        return false;
    }
    await cdIntoNewApp()
    await installPackages()
    await updateTemplates()
    console.log("All Done!".green)
}

// calls create react app with given name
const createReactApp = () => {
    return new Promise(resolve => {
        if (appName) {
            shell.exec(`npx create-react-app ${appName}`, () => {
                console.log("Created React App".green)
                resolve(true)
            })
        } else {
            console.log("\nNo app name was provided.".red)
            console.log("\nProvide an app name in the following format: ")
            console.log("\nsassy-react ", "app-name\n".cyan)
            resolve(false)
        }
    })
}

// Move into project folder
const cdIntoNewApp = () => {
    return new Promise(resolve => {
        shell.exec(`cd ${appName}`, () => {
            resolve()
        })
    })
}

// after move into folder install additional packages
const installPackages = () => {
    return new Promise(resolve => {
        console.log("\nInstalling redux, react-router, react-router-dom, react-redux, axios, and redux-thunk\n".green)
        shell.exec(`npm install --save redux react-router react-redux redux-thunk react-router-dom axios`, () => {
            console.log("\nFinished installing packages\n".green)
            resolve()
        })
    })
}

// update the template with given files inside the templates folder
const updateTemplates = () => {
    return new Promise(resolve => {
        shell.exec(`mkdir actions config`, () => {
            console.log(`created dirs`.green)
        })
        let promises = []
        Object.keys(templates).forEach((fileName, i) => {
            promises[i] = new Promise(res => {
                fs.writeFile(`${appDirectory}/src/${fileName}`, templates[fileName], function (err) {
                    if (err) {
                        return console.log(err)
                    }
                    res()
                })
            })
        })
        Promise.all(promises).then(() => {
            resolve()
        })
    })
}

// call the run function
run()