/**
 * Controller of employee model
 */

const employee = require('../models/employee');

var controller = {
    create: (req,res) => {
        var params = req.body;
        return employee.create({
            id: params.id,
            firstName: params.firstName,
            secondName: params.secondName,
            firstLastName: params.firstLastName,
            secondLastName: params.secondLastName,
            email: params.email,
            entryDate: params.entryDate,
            registerDate: params.registerDate,
            state: params.state,
            typeId: params.typeId,
            areaId: params.areaId,
            countryId: params.countryId
        })
        .then(employee => res.status(200).send({ message: 'Empleado registrado correctamente', employee: employee }))
        .catch(error => res.status(400).send(error));
    },
    list: (_, res) => {
        return employee.findAll({})
            .then(employee => res.status(200).send(employee))
            .catch(error => res.status(400).send(error));
    },
    findById: (req, res) => {
        return employee.findOne({ where: { id: req.params.id } })
           .then(employee => res.status(200).send(employee))
           .catch(error => res.status(400).send(error))
    },
    findByEmail: (req, res) => {
        return employee.findOne({ where: { email: req.params.email } })
           .then(employee => res.status(200).send(employee))
           .catch(error => res.status(400).send(error))
    },
    update: (req, res) => {
        var params = req.body;
        return employee.update({
            id: params.id,
            firstName: params.firstName,
            secondName: params.secondName,
            firstLastName: params.firstLastName,
            secondLastName: params.secondLastName,
            email: params.email,
            entryDate: params.entryDate,
            registerDate: params.registerDate,
            state: params.state,
            typeId: params.typeId,
            areaId: params.areaId,
            countryId: params.countryId
        },
        {
            where: { id: req.params.id }
        })
        .then(employee => res.status(200).send({ message: 'empleado actualizado', employee: employee }))
        .catch(error => res.status(400).send(error));
    },
    delete: (req,res) => {
        return employee.destroy({
            where: {
                id: req.params.id
            }
        })
        .then(employee => res.status(200).send({ message: 'empleado eliminado', employee: employee }))
        .catch(error => res.status(400).send(error));
    }
};

module.exports = controller;