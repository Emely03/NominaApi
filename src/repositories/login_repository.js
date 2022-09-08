const pool = require('./dbconnection')
const login_repository = {}

login_repository.getAll = (login) => {
  const context =  pool()
  return context.query('select * from tb_user where username=$1 and password=$2', [login.username, login.password])
}

module.exports = login_repository