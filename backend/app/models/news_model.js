let sql;

module.exports = {

  getNewsModel: function (connection, callback) {
    sql = "select * from news_table";
    connection.query(sql, callback);
  },

  getNewModel: function (id, connection, callback) {
    sql = `select * from news_table AS nt 
        INNER JOIN uf_table AS uft
        ON nt.uf_id = uft.uf_id
        INNER JOIN user_table AS ut
        ON nt.user_id = ut.user_id
        where nt.news_id = ${id}`;

    connection.query(sql, callback);
  },

  saveNewModel: function (body, connection, callback) {
    sql = `insert into news_table (user_id, content, title, subtitle, uf_id, image)
        values (
            '${body.user_id}',
            '${body.content}',
            '${body.title}',
            '${body.subtitle}',
            '${body.uf_id}',
            '${body.image}'
            )`;
    connection.query(sql, callback);
  },

  updateNewModel: function (id, body, connection, callback) {
    sql = `update news_table set 
        content = '${body.content}', 
        title = '${body.title}', 
        subtitle = '${body.subtitle}', 
        uf_id = '${body.uf_id}',
        image = '${body.image}' 
        where news_id = ${id}`;

    connection.query(sql, callback);
  },

  deleteNewModel: function (id, connection, callback) {
    sql = `delete from news_table where news_id = ${id}`;
    connection.query(sql, callback);
  }
  
}
