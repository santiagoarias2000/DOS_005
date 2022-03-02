"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQL_CANDIDATE = void 0;
exports.SQL_CANDIDATE = {
    ALL: 'SELECT c.id_candidate, c.name_candidate, c.datebirth_candidate, c.eval_candidate,c.id_party\
     FROM candidates c\
     ORDER BY c.name_candidate;'
};
