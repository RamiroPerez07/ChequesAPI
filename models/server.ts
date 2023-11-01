import express, {Express} from "express"
import cors from "cors";
import authRoutes from "../routes/auth"
import { dbConnection } from "../database/config";
import chequesRoutes from '../routes/cheques'
import issuesRoutes from "../routes/issues"

export class Server{

  app: Express
  port: string | number | undefined
  authPath: string
  chequesPath: string
  issuesPath : string

  constructor() {
    this.app = express()
    this.port = process.env.PORT;
    this.authPath = "/auth";
    this.chequesPath = "/cheques"
    this.issuesPath = "/issues"
    this.conectarDB();
    this.middlewares();
    this.routes();
  }

  async conectarDB(): Promise<void> {
    await dbConnection();
  }

  middlewares():void{
    this.app.use(express.json())
    this.app.use(cors())  //para hacer el deploy de la api
  }

  routes(): void {
    this.app.use(this.authPath, authRoutes)
    this.app.use(this.chequesPath, chequesRoutes)
    this.app.use(this.issuesPath, issuesRoutes)
  }

  listen(): void {
    this.app.listen(this.port, () => {
      console.log(`Corriendo en puerto ${this.port}`);
    })
  }
}