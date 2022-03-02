import { Router } from "express";
import candidateController from "../controller/CandidateController";
import partyController from "../controller/PartyController";

class Routes{
    public routesApi: Router;
    constructor(){
        this.routesApi = Router();
        this.setting();
    }
    public setting(){
        this.routesApi.get('/Candidate', candidateController.getMeCandidate);
        this.routesApi.get('/Party', partyController.getMeParty);
        this.routesApi.post('/Party/Create', partyController.createMeParty);
    }
}
const routes = new Routes();
export default routes.routesApi;
