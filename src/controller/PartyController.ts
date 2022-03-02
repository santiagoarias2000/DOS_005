import { Request, Response } from "express";
import PartyDAOS from "../daos/PartyDAOS";
import { SQL_PARTY } from "../repository/party_sql";

class PartyController extends PartyDAOS{
    public getMeParty(req: Request, res: Response): void{
        PartyController.getParty(SQL_PARTY.ALL, [], res);
    }
}
const partyController = new PartyController();
export default partyController;