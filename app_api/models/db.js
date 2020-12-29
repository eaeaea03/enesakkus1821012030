var mongoose = require('mongoose');
var dbURL = 'mongodb+srv://mekan32:mekan32@mekan32.rv3pd.mongodb.net/mekan32?retryWrites=true&w=majority';
//var dbURL = 'mongodb://localhost/mekan32';
mongoose.connect(dbURL, {useNewUrlParser: true});

mongoose.connection.on('connected', function (){
	console.log('Mongoose ' + dbURL + 'adresindeki veritabanına bağlandı\n');
});

mongoose.connection.on('error', function (err){
	console.log('Mongoose bağlantı hatası\n: ' + err);
});

mongoose.connection.on('disconnected', function (){
	console.log('Mongoose bağlantısı kesidi\n' );
});

kapat = function(msg, callback) {
    mongoose.connection.close(function() {
        console.log('Mongoose kapatıldı\n ' + msg);
        callback();
    });
};

// nodemon kullanıyorsanız ayrı bir kapatma işlemi gerekir.
process.once('SIGUSR2', function() {
    kapat('nodemon kapatıldı\n', function() {
        process.kill(process.pid, 'SIGUSR2');
    });
});

// Uygulama kapandığında kapat.
process.on('SIGINT', function() {
    kapat('Uygulama kapatıldı\n', function() {
        process.exit(0);
    });
});

// Herokudan kapatma işlemi gerçekleşirse
process.on('SIGTERM', function() {
    kapat('heroku kapatıldı\n', function() {
        process.exit(0);
    });
});

require('./mekansema');