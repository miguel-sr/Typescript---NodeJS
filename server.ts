import app from './src/app';
const port = process.env.port || 8089;

app.listen(port, () => {
  console.log('Aplicação executando na porta ... :', port);
});