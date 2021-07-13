let sql;

module.exports = {

    registerUserModel: function (body, connection, callback) {
        sql = `INSERT INTO user_table (user_name, email, user_password, uf_id)
            values ('${body.userName}', '${body.email}', '${body.password}', '${body.idUf}')`;
    
        connection.query(sql, callback);
      },

      getUserByEmailModel: function (email, connection, callback) {
        sql = `select * from user_table where email = '${email}'`;
        connection.query(sql, callback);
      },

      getUsersModel: function (connection, callback) {
        sql = "select * from user_table";
        connection.query(sql, callback);
      }
      
}