const DriversController = require('../controllers/DriversController');

module.exports = (app) => {
    app.get('/api/drivers', DriversController.all);
    app.post('/api/drivers', DriversController.create);
    app.put('/api/drivers/:id', DriversController.update);
    app.delete('/api/drivers/:id', DriversController.delete);
}