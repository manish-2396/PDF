const mongoose = require('mongoose');

const server = mongoose.connect("mongodb+srv://manishchouhan:manish@cluster0.gpac4nx.mongodb.net/pdf?retryWrites=true&w=majority")


module.exports = {
    server
}