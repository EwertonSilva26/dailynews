let sql;

module.exports = {

    getUfsModel: function (connection, callback) {
        sql = "select * from uf_table";
        connection.query(sql, callback);
      },
    
      getNewsByUfModel: function (id, connection, callback) {
        sql = `select * from news_table AS nt 
            INNER JOIN uf_table AS uft 
            ON nt.uf_id = uft.uf_id
            WHERE uft.uf_id = ${id}`;
        connection.query(sql, callback);
      }
      
}