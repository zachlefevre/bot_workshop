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
        session.send("Greetings! Let's get you schedule to meet Thomas Kirwin.")
        builder.Prompts.time(session, "Please Provide a date and time to meet")
    },
    (session, args, next) => {
        session.dialogData.reservationDate = builder.EntityRecognizer.resolveTime([args.response]);
        builder.Prompts.number(session, "How many hours do you plan on taking?")   
    },
    (session, args, next) => {
        session.dialogData.numHours = args.response
        if(session.userData.name){
            next()
        }else{
            session.beginDialog('/name')
        }
    },
    (session, args, next) => {       
        builder.Prompts.attachment(session, "Please send me your resume.");
    },
    (session, args, next) => {        
        session.dialogData.resumeImg = args.response        
        builder.Prompts.choice(session, "What is your classification", "Freshman|Sophomore|Junior|Senior", { listStyle: builder.ListStyle.button});
    },
    (session, args, next) => {
        session.dialogData.classification = args.response
        //perform database query etc...
        session.send(`Thanks ${session.userData.name}, Meeting confirmed. I have you down for ${session.dialogData.reservationDate}`)
        session.endDialog()
    },

])

bot.dialog('/name',[
    (session, args, next) => {
        builder.Prompts.text(session, "What is your name?")        
    },
    (session, args, next) => {
        session.userData.name = args.response
        session.send(`Thanks!`)
        session.endDialog()
    }
])

