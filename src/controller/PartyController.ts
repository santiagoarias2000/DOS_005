import { Request, Response } from "express";
import PartyDAOS from "../daos/PartyDAOS";
import { SQL_PARTY } from "../repository/party_sql";

class PartyController extends PartyDAOS{
    public getMeParty(req: Request, res: Response): void{
        PartyController.getParty(SQL_PARTY.VIEW, [], res);

    }

    public createMeParty(req: Request, res: Response): void{
        const name = req.body.nameParty;
        const parameter = [name];
        PartyController.createParty(SQL_PARTY.CONFIRM, SQL_PARTY.CREATE, parameter, res);
    }
}
const partyController = new PartyController();
export default partyController;