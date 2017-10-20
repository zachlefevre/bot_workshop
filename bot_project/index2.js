var builder = require('botbuilder');
var restify = require('restify');

var server = restify.createServer()
server.listen(3978)
console.log("listening on 3978")

var connector = new builder.ChatConnector()

server.post('/api/messages', connector.listen())

var bot = new builder.UniversalBot(connector)



bot.dialog('/', [
    (session, args, next) => {
        session.send(`Hello. I am your friendly neighborhood bot`)
        session.send(`Feel free to tell me any secrets`)
        builder.Prompts.text(session, "What is your name?")
    },
    (session, args, next) => {
        session.dialogData.name = args.response
        builder.Prompts.number(session, "How many hours are you taking?")   
    },
    (session, args, next) => {
        session.dialogData.numHours = args.response
        builder.Prompts.confirm (session, "Are you sure?")
    },
    (session, args, next) => {
        session.dialogData.confirmation = args.response        
        builder.Prompts.attachment(session, "Please send me your resume for consideration.");
    },
    (session, args, next) => {
        session.dialogData.resumeImg = args.response        
        builder.Prompts.choice(session, "What is your favorite color?", "red|green|blue", { listStyle: builder.ListStyle.button });
    },
    (session, args, next) => {        
        //perform database query etc...
        session.send(`thanks for the secrets ${session.dialogData.name}`)
        session.endDialog()
    },

])

