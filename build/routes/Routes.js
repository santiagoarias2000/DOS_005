"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const CandidateController_1 = __importDefault(require("../controller/CandidateController"));
const PartyController_1 = __importDefault(require("../controller/PartyController"));
class Routes {
    constructor() {
        this.routesApi = (0, express_1.Router)();
        this.setting();
    }
    setting() {
        this.routesApi.get('/Candidate', CandidateController_1.default.getMeCandidate);
        this.routesApi.get('/Party', PartyController_1.default.getMeParty);
    }
}
const routes = new Routes();
exports.default = routes.routesApi;
