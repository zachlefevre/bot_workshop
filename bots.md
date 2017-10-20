# bots bots bots bots bots
[Microsoft Documentation](https://docs.microsoft.com/en-us/bot-framework/nodejs/bot-builder-nodejs-quickstart)
## node
Node allows a developer to run javascript server-side and client-side.
Run a node project by typing:
```
node <filename>
```
## npm
npm is a package manager. With the npm executable we will install packages that we've pulled from the npm database.  
First we run init in order to initialize our node project. This creates a *package.json* file. This file describes our project and lists dependencies that others will need to install before they can run our project.
```
npm init
```
npm is a package manager. We install by typing: 
```
npm install <package name>
```



# bot building bots building beautiful bot buds
First we create the project directory. In cmd navigate to where you will store your project.  
```
cd ..\Desktop\bot_workshop
```
Next we must initialize the directory to use npm packages
```
npm init
```
Next we isntall the necessary npm packages, *botbuilder* and *restify*
```
npm install botbuilder --save
```
and:
```
npm install restify --save
```
Take a look at *package.json* and verify that you understand what's going on

In order to communicate with our bot buds we will need to install [BotFramework-emulator](https://github.com/Microsoft/BotFramework-Emulator/releases)

## Bot structure
The bots follow a client-server model. The bot is the server, and it responds to requests by the emulator which acts as the client.  
* If our bot is communicated with through slack, then slack is the client. If through discord then ...  

Dialog occurs in a waterfall structure through the "dialog array".  When new dialogs are created they are added to the dialog stack. When a dialog finishes, the dialog which spawned it is resumed

### HTTP requests and verbs
An HTTP server responds to requests with responses. These requests are of a certain type, for example GET, POST, DELETE, etc...  
Our HTTP server (restify) is listening for post requests made to /api/messages, and giving our bot connector the resonsibility to handle them.  

# In closing
Join [the slack](https://ttucs.slack.com)!  
Join the Microsoft Workshop channel