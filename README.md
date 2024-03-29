# gap_automation
UI Test Automation Project with WebdriverIO, Cucumber and Selenium Standalone

##  Brief description
This project was developed using tools like [webdriverIO](https://webdriver.io/), which is an UI automation framework for nodejs,
Cucumber like the BDD tool, Selenium standalone to manage browsers and Chai like assertion libary.


## Set Up

First you must have installed node.js and java, After that just clone the repository.

**SSH**

`git clone git@github.com:jhonnyLeandro/gap_automation.git`


**HTTPS**

`git clone https://github.com/jhonnyLeandro/gap_automation.git`


Change directory to gap project

`cd gap_automation`

Install dependencies

`npm install`


Run the test in linux

`npm run test`

Run the test in windows

`npm run test_win`

## Building the project

The first thing that we have to be sure about, Is that we have node.js installed in our machines, so if you don't have it installed, that will be your first move, install node.js, we are building this project with node.js v12.16.2.  

The following step will be to check if you have java installed in your system, if don't please install java version 8 or above.

Now with those requisites completed we can start to build our UI automation project


First create a folder to contain our project in our case I'm gonna call it gap_project but you can name it whatever you want.

**Create folder and navigate to it**

`mkdir gap_project && cd gap_project`


**Initialize git**

`git init`

**create an npm project**

`npm init -y`

**Install WebdriverIO CLI**

`npm i --save-dev @wdio/cli@7`


**Use wdio cli to install the desired dependencies**

`npx wdio config`

we will choose, to run locally, in machine devices, spec and allure like reporters, cucumber framewok and selenium standalone service. And this will give us the file wdio.conf.js which is the file that has all our test configurations.


**Set up babel**

`npm install --save-dev @babel/core @babel/cli @babel/preset-env @babel/register`

Next we have to add this property "requireModule: ['@babel/register']" into cucumberOpts in 
wdio.conf.js file, furthermore we have to add the require('@babel/register') in the beforeSession hook.

The last step is to create the file babel.config.js and add the following:

`
module.exports = {
    presets: [
        ['@babel/preset-env', {
            targets: {
                node: 12
            }
        }]
    ]
}
`

**Install selenium standalone**

`npm install selenium-standalone --save-dev
./node_modules/.bin/selenium-standalone install`

**Install cucumber**


`npm install cucumber --save-dev`

**Install chai**

`npm install chai --save-dev`

**folder structure**

We are going to work with the following structure

```bash
├── babel.config.js
├── package.json
├── package-lock.json
├── README.md
├── test
│   ├── features
│   │   ├── createUser.feature
│   │   └── stepDefinitions
│   │       ├── given.js
│   │       ├── then.js
│   │       └── when.js
│   └── page_objects
│       ├── CreateUser.js
│       ├── Home.js
│       ├── ListUser.js
│       └── Login.js
└── wdio.conf.js
```
