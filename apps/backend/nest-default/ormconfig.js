"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const column_entity_1 = require("./src/columns/entity/column.entity");
const group_entity_1 = require("./src/groups/entities/group.entity");
const ormseedconfig = {
    type: 'sqlite',
    database: 'axb.db',
    autoLoadEntities: true,
    synchronize: true,
    logging: true,
    entities: [group_entity_1.GroupEntity, column_entity_1.ColumnEntity],
    migrations: ['src/database/seeds/*.ts'],
};
exports.default = ormseedconfig;
//# sourceMappingURL=ormconfig.js.map