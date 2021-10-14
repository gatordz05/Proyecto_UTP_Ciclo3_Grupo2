import express from 'express';
const router = express.Router();
// importar el modelo nota
import Nota from '../models/nota';



// Ruta de POST agregar doc
//POSTMAN
//http://localhost:3000/api/nueva-nota
router.post('/nueva-nota', async(req, res) => {
// este body es el objeto que se crea en la BD
// ese objeto esta creado en el cliente llamado nota 
//ubicado en /view/nota/data linea 71/nota linea 82
    const body = req.body; 

    try {
     //crear una constante que enviar doc a la BS
        const notaDB = await Nota.create(body);
        res.status(200).json(notaDB);
        } catch (error) {
            return res.status(500).json({
            mensaje: 'Ocurrio un error',
            error
        })
    }
});

//Rutas Get traer doc
//POSTMAN
//http://localhost:3000/api/nota/61591119e9e951535f321717
router.get('/nota/:id', async(req, res) => {
    const _id = req.params.id;
    try { // findOne buscar un doc  mediante el _id
            // enviarlo a notaDB y entregar una respuesta
        const notaDB = await Nota.findOne({_id});
        res.json(notaDB);


    }catch (error) {

        return res.status(500).json({
            mensaje: 'Ocurrio un error',
            error
        })
    }
});



// Get con todos los documento
//POSTMAN
//http://localhost:3000/api/nota 
router.get('/nota', async(req, res) =>{

    try{
        const notaDB= await Nota.find();
        res.json(notaDB);

    }catch (error) {
        
        return res.status(500).json({
            mensaje: 'Ocurrio un error',
            error
    })
    }
});

// Delete eliminar una nota
router.delete('/nota/:id', async(req, res) =>{
    const _id= req.params.id;
    try{

        const notaDB= await Nota.findByIdAndDelete({_id});
        if(!notaDB){

            return res.status(404).json({
                mensaje: 'No se encontro el id indicado',
                error
            })

        }
        res.json(notaDB);
    }catch (error) {
        return res.status(500).json({
            mensaje: 'Ocurrio un error',
            error
    }
    )
    }
});

// Put actualizar una nota
router.put('/nota/:id', async(req, res) =>{

    const _id = req.params.id;
    const body = req.body;
    try {
        const notaDB = await Nota.findByIdAndUpdate(
            _id,
            body,
            {new: true});
            res.json(notaDB);

    }catch (error) {
        return res.status(500).json({
            mensaje: 'Ocurrio un error',
            error
    })
    }

});


// Exportamos la configuración de express app
module.exports = router;
