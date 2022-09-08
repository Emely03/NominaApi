//Metodos para generar la nomina de los empleados
//Generar la nomina del empleado.
//Salario basico, deducciones (salud, pensión, caja de compesación), bonificaciones
const empleadoController = {};
let  salarioTotal= []; 
let response={}

empleadoController.create = (req,res)=>{
    let array_empleados= req.body.empleados
    for (let index = 0; index < array_empleados.length; index++) {
        const empleado = array_empleados[index];
        //calcular nota definitiva
        let salarioNetoTotal = (empleado.salariobasico-empleado.n2+empleado.deducciones+estudiante.bonificaciones);
        let obj_empleado={}
        obj_estudiante['nombre'] = empleado.nombre;
        obj_estudiante['salario Neto'] = salarioNetoTotal;
        salarioTotal.push(obj_empleado);

    }

    response['Salario Neto'] = salarioTotal

    res.json(response);
}

module.exports = empleadoController