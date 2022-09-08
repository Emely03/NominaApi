//Todos los datos para empleado
const pool = require('./dbconnection')
const empleados_repository = {}

empleados_repository.getAll = () => {
  const context =  pool()
  return context.query('select * from course')
}

empleados_repository.getById = (id) => {
  const context =  pool()
  return context.query('select * from course where id=$1',[id])
}
 //colocar dependiendo de lo que se requiera
empleados_repository.create = (empleado) => {
  const context =  pool()
  return context.query()
}

 //colocar dependiendo de lo que se requiera
empleados_repository.update = (empleado) => {
  const context =  pool()
  return context.query()
}

empleados_repository.delete = (id) => {
  const context =  pool()
  return context.query('delete from course where id=$1',[id])
}
module.exports = empleados_repository;