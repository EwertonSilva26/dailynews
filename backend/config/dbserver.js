let mysql = require('mysql');

module.exports = function () {
    return connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'abc123.A',
        database: 'dailynewsdb'
    });
}