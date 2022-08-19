// Llamando Modulos
const Express = require('express');
const path = require('path');

// Inializar Variables
const app = Express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(Express.static(path.join(__dirname, 'public')));

// Rutas

app.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname, 'public/index.html'));
});


app.use((req, res, next)=>{
    res.status(404).sendFile(path.join(__dirname, 'public/404.html'));
});


// Inicio del servidor
app.listen(PORT, ()=>{
    console.log(`Servidor en el puerto ${PORT}`);
});