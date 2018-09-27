#!/usr/bin/env node

let shell = require('shelljs')
let colors = require('colors')
let fs = require('fs')
let templates = require('./templates/templates')
let models = require('./templates/models/models')
let components = require('./templates/components/components')
let actions = require('./templates/actions/actions')
let config = require('./templates/config/config')
let constants = require('./templates/constants/constants')
let containers = require('./templates/containers/containers')
let reducers = require('./templates/reducers/reducers')
let store = require('./templates/store/store')
let sass = require('./templates/sass/sass')
let sassComponents = require('./templates/sass/components/components')

let appName = process.argv[2]
let appDirectory = `${process.cwd()}/${appName}`

// function to call other functions in order
const run = async () => {
    let success = await createReactApp()
    if (!success) {
        console.log(colors.bgRed('Something went wrong while trying to create a new React app using create-react-app'))
        return false;
    }
    await makeDirs()
    await installPackages()
    await updateTemplates()
    console.log(colors.bgGreen("All Done!"))
}
// create dirs in folder structure 
const makeDirs = () => {
    return new Promise(resolve => {
        shell.cd(appDirectory)
        shell.exec(`mkdir sass`, () => {
            shell.cd(`${appDirectory}/sass`)
            shell.exec(`mkdir components`, () => {
            })
        })
        shell.cd(`${appDirectory}/src`)
        shell.exec(`mkdir actions config constants components containers models reducers store`, () => {
        })
        resolve()
    })
}
// calls create react app with given name
const createReactApp = () => {
    return new Promise(resolve => {
        if (appName) {
            shell.exec(`npx create-react-app ${appName}`, () => {
                console.log(colors.bgGreen("Created React App"))
                resolve(true)
            })
        } else {
            console.log(colors.red("\nNo app name was provided.".red))
            console.log("\nProvide an app name in the following format: ")
            console.log(colors.green("\nsassy-react ", "app-name\n"))
            resolve(false)
        }
    })
}

// after move into folder install additional packages
const installPackages = () => {
    return new Promise(resolve => {
        console.log(colors.bgMagenta("\nInstalling all packages.\n"))
        shell.cd(appDirectory)
        shell.exec(`npm install --save redux react-router react-redux redux-thunk react-router-dom axios`, () => {
            console.log(colors.bgMagenta("\nFinished installing packages!\n"))
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
            })
        })
        Object.keys(sass).forEach((fileName, i) => {
            promises[i] = new Promise(res => {
                fs.writeFile(`${appDirectory}/sass/${fileName}`, sass[fileName], function (err) {
                    if (err) {
                        return console.log(err)
                    }
                    res()
                })
            })
        })
        Object.keys(sassComponents).forEach((fileName, i) => {
            promises[i] = new Promise(res => {
                fs.writeFile(`${appDirectory}/sass/components/${fileName}`, sassComponents[fileName], function (err) {
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