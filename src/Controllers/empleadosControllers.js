
const empleadosController = {};
const Empleado = require('../models/empleado');
const empleado_repository = require('../repositories/empleados_repository')


empleadosController.getAll = (req, res) => {
    //logica para listar todos los empleados
    empleado_repository.getAll()
        .then((empleados) => {
            //si devuelve mas de un registro
            if (empleados.rows.length == 0) {
                res.status(400).send('Not Found');
            }
            res.json(empleados.rows);
        })
        .catch((error) => {
            res.status(500).send(error.stack);
        })
}

empleadosController.getById = (req, res) => {
    const id = req.params['id']
    empleado_repository.getById(id)
        .then((empleados) => {
            if (empleados.rows.length == 0) {
                res.status(400).send({});
            }
            res.json(empleados.rows);
        })
        .catch((error) => {
            res.status(500).send('Not Found' + error.stack);
        })
}

empleadosController.create = (req, res) => {
    //capturar body request
    const newEmpleado = req.body;
    //crear modelo tipo empleado, COMPLETAR
    let empleado = new Empleado(null, newEmpleado /**COMPLETAR LO QUE SE REQUIERA PARA LOS DATOS DE NOMINA */)
    empleado_repository.create(empleado)
        .then((resp) => {
            if (resp.rows.length == 0) {
                res.status(400).send({});
            }
            //si inserto correctamente
            empleado.Id = resp.rows[0].id
            res.status(201).send(empleado);
        })
        .catch((error) => {
            res.status(500).send('Not Found' + error.stack);
        })
}
empleadosController.update = (req, res) => {
    const id = req.params['id']
    const newEmpleado = req.body;
    let empleado = new Empleado(id,newEmpleado /**COMPLETAR LO QUE SE REQUIERA PARA LOS DATOS DE NOMINA */)
    empleado_repository.update(empleado)
        .then((resp) => {
            //si actualizo correctamente
            res.status(200).send(empleado);
        })
        .catch((error) => {
            res.status(500).send('Not Found' + error.stack);
        })
}
empleadosController.
delete = (req, res) => {
    //capturamos queryParams
    const id = req.params['id']
    empleado_repositoryy.delete(id)
        .then((resp) => {
            //si elimino correctamente
            res.status(200);
        })
        .catch((error) => {
            res.status(500).send('Not Found' + error.stack);
        })
}

module.exports = empleadosController
