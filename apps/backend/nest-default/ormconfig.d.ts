declare const ormseedconfig: {
    type: string;
    database: string;
    autoLoadEntities: boolean;
    synchronize: boolean;
    logging: boolean;
    entities: any[];
    migrations: string[];
};
export default ormseedconfig;
