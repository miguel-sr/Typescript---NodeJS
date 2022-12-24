import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import index from './routes/index';
import routes from './routes/routes';

class App {
  public express: express.Application;

  public constructor() {
    this.express = express();
    this.middlewares();
    this.database();
    this.routes();
  }

  private middlewares():void {
    this.express.use(express.urlencoded({extended: true}));
    this.express.use(express.json());
    this.express.use(express.json({type: "application/vnd.api+json"}));
    this.express.use(cors());
  }

  private database():void {
    mongoose.Promise = global.Promise;
    mongoose.set("strictQuery", true);

    mongoose.connect('mongodb://127.0.0.1:27017/tsnode').then(() => {
      console.log('A base de dados foi conectada com sucesso!');
    }).catch((err) => {
      console.log(`Erro ao conectar com a base de dados ... : ${err} `);
      process.exit();
    });
  }

  private routes():void {
    // ==> Rotas da API:
    this.express.use(index);
    this.express.use('/api/v1', routes);
  }
}

export default new App().express;