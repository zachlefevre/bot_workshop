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
        session.send("Hello World!")
        next()
    },
    (session, args, next) => {
        session.send("hey howdy there")
        session.endDialog()
        
    }
])

