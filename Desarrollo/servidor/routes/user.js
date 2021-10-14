import express from 'express';
const router = express.Router();
// Importamos modelo Tarea
import User from '../models/user';
// Hash Contraseña
const bcrypt = require('bcrypt');
const saltRounds = 10;


router.post('/nuevo-usuario', async (req, res) => {
        const body = {
        nombre: req.body.nombre,
        email: req.body.email,
        role: req.body.role
}

body.pass = bcrypt.hashSync(req.body.pass, saltRounds);
            try {
                const userDB = await User.create(body);
                return res.json(userDB);

                } catch (error) {
                return res.status(500).json({
                mensaje: 'Ocurrio un error',
                error
            });
        }
});


//Put usuario
router.put('/usuario/:id', async(req, res) => {
    let id = req.params.id;
    let body = req.body;
    try {
    // {new:true} nos devuelve el usuario actualizado
    const usuarioDB = await User.findByIdAndUpdate(id, body, {new:true});

    return res.json(usuarioDB);

    } catch (error) {

    return res.status(400).json({

        mensaje: 'Ocurrio un error',
        error
        })
    }
});




/* GET users listing. */
router.get('/', function(req, res, next) {
            res.send('respond with a resource');
            });
            
module.exports = router;
