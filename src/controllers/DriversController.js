const Driver = require('../models/Driver');
module.exports = {

    all(req, res, next) {
        Driver.find({})
                .then((drivers)=> res.status(200).send(drivers))
                .catch(next)
    },

    create(req, res, next) {
        const driverProps = new Driver(req.body);
        Driver.create(driverProps)
                .then((driver)=> res.status(201).send(driver))
                .catch(next);
    },

    update(req, res, next) {
        const driverId = req.params.id;
        Driver.findOneAndUpdate({ _id: driverId}, req.body)
                .then(()=> Driver.findById({_id: driverId}))
                .then((driver) =>  res.status(200).send(driver))
                .catch(next);
    },

    delete(req, res, next) {
        const driverId = req.params.id;
        Driver.findOneAndDelete({_id: driverId})
                .then(() => res.status(200).send({status:'ok',message:'Driver deleted'}))
                .catch(next);
    }

};