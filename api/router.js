const router = require('express').Router()
const FormController = require('./controllers/formController');

router.get('/', function(req, res) {
    res.send('hola desde rutas de inicio')
});

router.get('/categories', FormController.categories)
router.post('/form/store', FormController.store)
router.post('/validate/email', FormController.searchEmail)



module.exports = router