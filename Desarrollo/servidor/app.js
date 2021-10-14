import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import path from 'path';

const app = express();

// Conexión base de datos
const mongoose = require('mongoose');
//const uri = 'mongodb://localhost:27017/DBTorneos';
//se crea la const uri y se pega la direccion de atlas
//mongodb+srv://user_31:<password>@grupo30.crxqd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
// se remplaza <password> por la contrasena de la BD y myFirstDatabase por el nombre de la BD
const uri = 'mongodb+srv://user_31:13061996@grupo30.crxqd.mongodb.net/GRUPO30?retryWrites=true&w=majority'
const options = {useNewUrlParser: true, useUnifiedTopology: true};

// Or using promises
mongoose.connect(uri, options).then(
    () => {console.log('Conectado a la base de datos')},
    err => { console.log(err)}
  );



//Middleware
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());

//establece dic en postman
app.use(express.urlencoded({ extended: true }))
//app.use(express.static(path.join(__dirname, 'public')));


//Rutas
app.use('/api', require('./routes/nota'));
app.use('/api', require('./routes/user'));

// Middleware para Vue.js router modo history
const history = require('connect-history-api-fallback');
app.use(history());
app.use(express.static(path.join(__dirname, 'public')));

//Puerto
app.set('puerto', process.env.PORT || 3000);
app.listen(app.get('puerto'), () => {
 console.log('Se esta estableciendo comounicación con el puerto '+ app.get('puerto'));
});

