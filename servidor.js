const http = require('http');
const chalk = require('chalk');

const host = 'localhost';
const port = 8000; // 

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  const responseJSON = JSON.stringify({ nombre: 'Andres', mensaje: '¡Gracias Youtube por enseñarme!' });
  res.end(responseJSON);
});

server.listen(port, host, () => {
  console.log(chalk.green(`El servidor está escuchando en http://${host}:${port}/`));
});
