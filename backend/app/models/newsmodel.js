let sql;

module.exports = {
    getNewsModel: function (connection, callback) {
        sql = 'select * from news_table';
        connection.query(sql, callback);
    },

    getNewModel: function (id, connection, callback) {
        sql = `select * from news_table where idNew = ${id}`;

        connection.query(sql, callback);
    },

    saveNewModel: function (body, connection, callback) {
        sql = `insert into news_table (textNew, title, subtitle, image, imageBigger) 
        values (
            '${body.text}', 
            '${body.title}', 
            '${body.subtitle}', 
            '${body.imgSmall}', 
            '${body.imgBigger}'
            )`;

        connection.query(sql, callback);
    },

    updateNewModel: function (id, body, connection, callback) {
        sql = `update news_table set 
        textNew = '${body.text}', 
        title = '${body.title}', 
        subtitle = '${body.subtitle}', 
        image = '${body.imgSmall}', 
        imageBigger = '${body.imgBigger}' 
        where idNew = ${id}`;

        connection.query(sql, callback);
    },

    deleteNewModel: function (id, connection, callback) {
        sql = `delete from news_table where idNew = ${id}`;

        connection.query(sql, callback);
    }
}