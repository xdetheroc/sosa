import { Sequelize } from 'sequelize';
import { environment } from '../../environments/environment.dev';
import { InitModel } from './init.model';

export class ConfigSequelize {
    private static _instance: ConfigSequelize;
    public sequelize!: Sequelize;

    constructor() {
        if(!ConfigSequelize._instance) {
            console.log('creating instance ConfigSequelize');
        } else {
            console.log('retrieve instance ConfigSequelize');
            return ConfigSequelize._instance;
        }
    }

    public static getInstance() {
        return ConfigSequelize._instance;
    }

    public async setupConnection() {
        if(this.sequelize) return;

        try {
            this.sequelize = new Sequelize(
                environment.db.name,
                environment.db.username,
                environment.db.password, {
                    host: environment.db.host,
                    dialect: 'mysql'
                });

            InitModel(this.sequelize);
        } catch (error) {
            throw new Error(error);
        }       

    }


}