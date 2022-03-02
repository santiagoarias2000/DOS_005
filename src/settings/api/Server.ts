import cors from 'cors';
import morgan from 'morgan';
import express from 'express';
import routesApi from '../../routes/Routes';

class Server {
    public app: express.Application;

    constructor() {
        this.app = express();
        this.startSetting()
        this.activeRoute();

    }

    public startSetting(): void {
        this.app.set('PORT', 8088);
        this.app.use(cors());
        this.app.use(morgan('dev'));
        this.app.use(express.json({ limit: '100mb' }));
        this.app.use(express.urlencoded({ extended: true }));

    }

    public activeRoute(): void {
        this.app.use('/api', routesApi);
    }
    public start(): void {
        this.app.listen(this.app.get('PORT'), ()=>{
            console.log('It works', this.app.get('PORT'));
        });
    }
}
export default Server;
