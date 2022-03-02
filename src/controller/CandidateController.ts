import { Request, Response } from "express";
import CandidateDOAS from "../daos/CandidateDAOS";
import { SQL_CANDIDATE } from "../repository/candidate_sql";

class CandidateController extends CandidateDOAS{
    public getMeCandidate(req: Request, res:Response): void{
        CandidateController.getCandidate(SQL_CANDIDATE.ALL, [], res);
    }
}
const candidateController = new CandidateController();
export default candidateController;