import { Response } from "express";
import pool from "../settings/connection/connectionDB";

class PartyDAOS {

    public static async getParty(sqlConsult: string, parameter: any, res: Response): Promise<any> {
        //.result retorna muchos datos
        await pool.result(sqlConsult, parameter)
            .then((result) => {
                res.status(200).json(result.rows);
            })
            .catch((meErr) => {
                console.log('Error in daos: ', meErr);
                res.status(400).json({ answer: 'does not word: PartyDaos' });
            });
    }

    public static async createParty(sqlConfirm: string, sqlCreate: string, parameter: any, res: Response): Promise<any> {
        //await funciona solo con metodos async
        await pool.task(async consult => {
            //.one retorna muchos datos
            const data = await consult.one(sqlConfirm, parameter);
            if (data.amount == 0) {
                return await consult.one(sqlCreate, parameter);
            } else {
                return { id_party: 0 };
            };
        })
            .then((response) => {
                if (response?.id_party != 0) {
                    res.status(200).json({answer: 'Create party', newCode: response?.id_party});
                } else {
                    res.status(402).json({answer: 'Error create register it is repeated'})
                };
            })
            .catch((meErr) => {
                console.log('Error in daos: ', meErr);
                res.status(400).json({ answer: 'Error in create from party.' });
            });


    }
}
export default PartyDAOS;