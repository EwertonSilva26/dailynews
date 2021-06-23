let sql;

module.exports = {
    getUfsModel: function (connection, callback) {
        sql = 'select * from uf_table';
        connection.query(sql, callback);
    },

    getNewsByUfModel: function (id, connection, callback) {
        sql = `select * from news_table AS nt 
        INNER JOIN uf_table AS uft 
        ON nt.idUf = uft.idUf
        WHERE uft.idUf = ${id}` ;
        connection.query(sql, callback);
    },

    getUsersModel: function (connection, callback) {
        sql = 'select * from user_table';
        connection.query(sql, callback);
    },

    getNewsModel: function (connection, callback) {
        sql = 'select * from news_table';
        connection.query(sql, callback);
    },

    getNewModel: function (id, connection, callback) {
        sql = `select * from news_table AS nt 
        INNER JOIN uf_table AS uft
        ON nt.idUf = uft.idUf
        INNER JOIN user_table AS ut
        ON nt.idUser = ut.idUser
        where nt.idNew = ${id}`;

        connection.query(sql, callback);
    },

    saveNewModel: function (body, connection, callback) {
        sql = `insert into news_table (textNew, title, subtitle, uf, image, imageBigger) 
        values (
            '${body.author}', 
            '${body.text}', 
            '${body.title}', 
            '${body.subtitle}',
            '${body.uf}',
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
        uf = '${body.uf}',
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