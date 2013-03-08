/**
 * Created with JetBrains WebStorm.
 * User: SAMEER
 * Date: 5/1/12
 * Time: 3:10 PM
 * To change this template use File | Settings | File Templates.
 */


var net = require('net')

var chatServer = net.createServer()

chatServer.on('connection', function(client) {
    client.write('Hi!\n');

    client.on('data', function(data) {
        console.log(data)
    })

})
chatServer.listen(3000);

console.log("kjgdfkljg");