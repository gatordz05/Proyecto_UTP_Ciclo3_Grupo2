import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const notaSchema = new Schema({

    nombre: {type:String, required:[true, 'Nombre obligatorio']},
    descripcion: String,
    ubicacion: String,
    ncupos: String,
    fecha: Date,
    Participante_1: String,
    Participante_2: String,
    Participante_3: String,
    Participante_4: String,
    Participante_5: String,
    usuarioId: String,
    date: {type:Date, default:new Date},
    activo: {type: Boolean, default:true}

});


//convertir a modelo
const Nota = mongoose.model('Nota', notaSchema);

export default Nota;
