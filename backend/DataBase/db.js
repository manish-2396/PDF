const mongoose = require('mongoose');

const server = mongoose.connect("mongodb+srv://manishchouhan:manish@cluster0.gpac4nx.mongodb.net/mock12?retryWrites=true&w=majority")


module.exports = {
    server
}