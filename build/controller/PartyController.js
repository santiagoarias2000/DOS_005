"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const PartyDAOS_1 = __importDefault(require("../daos/PartyDAOS"));
const party_sql_1 = require("../repository/party_sql");
class PartyController extends PartyDAOS_1.default {
    getMeParty(req, res) {
        PartyController.getParty(party_sql_1.SQL_PARTY.ALL, [], res);
    }
}
const partyController = new PartyController();
exports.default = partyController;
