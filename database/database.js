import mongoose from 'mongoose';

mongoose.connect('mongodb://localost:27017/medi-app');

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error: '));

db.once(
    'open', function() {
        console.log('Database conected successfuly!');
    }
);

/* No momento que a aplicacão for inicializada, este arquivo database
   irá conectar no MongoDB no servidor local;
   ele irá criar uma collection chamada medi-app, onde serão colocados
   os modelos da pasta models. */

export default db;
