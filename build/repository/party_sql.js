"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQL_PARTY = void 0;
exports.SQL_PARTY = {
    VIEW: 'SELECT pp.id_party, pp.name_party \
            FROM political_partys pp \
            ORDER BY pp.name_party;',
    CREATE: 'INSERT INTO political_partys(name_party) \
        VALUES ($1) \
        RETURNING id_party;',
    CONFIRM: 'SELECT COUNT(pp.id_party) AS amount \
    FROM political_partys pp \
    WHERE (pp.name_party) = lower($1);'
};
