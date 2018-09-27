#!/usr/bin/env node

let shell = require('shelljs')
let colors = require('colors')
let fs = require('fs')
let templates = require('./templates/templates.js')
let models = require('./templates/models/models.js')
let components = require('./templates/components/components.js')
let actions = require('./templates/actions/actions.js')
let config = require('./templates/config/config.js')
let constants = require('./templates/constants/constants.js')
let containers = require('./templates/containers/containers.js')
let reducers = require('./templates/reducers/reducers.js')
let store = require('./templates/store/store.js')

let appName = process.argv[2]
let appDirectory = `${process.cwd()}/${appName}`

// function to call other functions in order
const run = async () => {
    let success = await createReactApp()
    if (!success) {
        console.log('Something went wrong while trying to create a new React app using create-react-app'.red)
        return false;
    }
    await makeDirs()
    await installPackages()
    await updateTemplates()
    console.log("All Done!".green)
}
// create dirs in folder structure 
const makeDirs = () => {
    return new Promise(resolve => {
        shell.cd(appDirectory)
        shell.exec(`mkdir sass`, () => {
            console.log(`created sass`.green)
            shell.cd(`${appDirectory}/sass`)
            shell.exec(`mkdir components`, () => {
                console.log(`created sass components`.green)
            })
        })
        shell.cd(`${appDirectory}/src`)
        shell.exec(`mkdir actions config constants components containers models reducers store`, () => {
            console.log(`created dirs`.green)
        })
        resolve()
    })
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

// after move into folder install additional packages
const installPackages = () => {
    return new Promise(resolve => {
        console.log("\nInstalling redux, react-router, react-router-dom, react-redux, axios, and redux-thunk\n".green)
        shell.cd(appDirectory)
        shell.exec(`npm install --save redux react-router react-redux redux-thunk react-router-dom axios`, () => {
            console.log("\nFinished installing packages\n".green)
            resolve()
        })
    })
}

// update the template with given files inside the templates folder
const updateTemplates = () => {
    return new Promise(resolve => {
        let promises = []
        Object.keys(templates).forEach((fileName, i) => {
            promises[i] = new Promise(res => {
                fs.writeFile(`${appDirectory}/src/${fileName}`, templates[fileName], function (err) {
                    if (err) {
                        return console.log(err)
                    }
                    res()
                })
                console.log(`templates made`)
            })
        })
        Object.keys(models).forEach((fileName, i) => {
            promises[i] = new Promise(res => {
                fs.writeFile(`${appDirectory}/src/models/${fileName}`, models[fileName], function (err) {
                    if (err) {
                        return console.log(err)
                    }
                    res()
                })
                console.log(`models made`)
            })
        })
        Object.keys(components).forEach((fileName, i) => {
            promises[i] = new Promise(res => {
                fs.writeFile(`${appDirectory}/src/components/${fileName}`, components[fileName], function (err) {
                    if (err) {
                        return console.log(err)
                    }
                    res()
                })
                console.log(`components made`)
            })
        })
        Object.keys(actions).forEach((fileName, i) => {
            promises[i] = new Promise(res => {
                fs.writeFile(`${appDirectory}/src/actions/${fileName}`, actions[fileName], function (err) {
                    if (err) {
                        return console.log(err)
                    }
                    res()
                })
                console.log(`actions made`)
            })
        })
        Object.keys(config).forEach((fileName, i) => {
            promises[i] = new Promise(res => {
                fs.writeFile(`${appDirectory}/src/config/${fileName}`, config[fileName], function (err) {
                    if (err) {
                        return console.log(err)
                    }
                    res()
                })
                console.log(`config made`)
            })
        })
        Object.keys(constants).forEach((fileName, i) => {
            promises[i] = new Promise(res => {
                fs.writeFile(`${appDirectory}/src/constants/${fileName}`, constants[fileName], function (err) {
                    if (err) {
                        return console.log(err)
                    }
                    res()
                })
                console.log(`constants made`)
            })
        })
        Object.keys(containers).forEach((fileName, i) => {
            promises[i] = new Promise(res => {
                fs.writeFile(`${appDirectory}/src/containers/${fileName}`, containers[fileName], function (err) {
                    if (err) {
                        return console.log(err)
                    }
                    res()
                })
                console.log(`containers made`)
            })
        })
        Object.keys(reducers).forEach((fileName, i) => {
            promises[i] = new Promise(res => {
                fs.writeFile(`${appDirectory}/src/reducers/${fileName}`, reducers[fileName], function (err) {
                    if (err) {
                        return console.log(err)
                    }
                    res()
                })
                console.log(`reducers made`)
            })
        })
        Object.keys(store).forEach((fileName, i) => {
            promises[i] = new Promise(res => {
                fs.writeFile(`${appDirectory}/src/store/${fileName}`, store[fileName], function (err) {
                    if (err) {
                        return console.log(err)
                    }
                    res()
                })
                console.log(`reducers made`)
            })
        })

        Promise.all(promises).then(() => {
            resolve()
        })
    })
}

// call the run function
run()