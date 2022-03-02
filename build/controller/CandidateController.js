"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const CandidateDAOS_1 = __importDefault(require("../daos/CandidateDAOS"));
const candidate_sql_1 = require("../repository/candidate_sql");
class CandidateController extends CandidateDAOS_1.default {
    getMeCandidate(req, res) {
        CandidateController.getCandidate(candidate_sql_1.SQL_CANDIDATE.ALL, [], res);
    }
}
const candidateController = new CandidateController();
exports.default = candidateController;
