const {Router} = require ("express");
const router = Router();
const apiRoute = '/api'
const empleadosControllers= require('../Controllers/empleadosControllers')
const loginController = require('../Controllers/registroEmpleadoControllers')
const nominaController = require('../Controllers/nominaControllers')

//Crear los routes para los cursos COURSE

//selecciona getAll  y clic y te lleva al metodo
router.get(apiRoute+'/empleado',empleadosControllers.getAll)
router.get(apiRoute+'/empleado/:id',empleadosControllers.getById)
router.post(apiRoute+'/empleado',empleadosControllers.create)
router.put(apiRoute+'/empleado/:id',empleadosControllers.update)
router.delete(apiRoute+'/empleado/:id',empleadosControllers.delete)

//Generar nomina empleado
router.post(apiRoute+'/nomina',nominaController.create)

//expotar la variable router
module.exports = router;
