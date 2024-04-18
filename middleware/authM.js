
import { verifyToken } from "../utils/JWT.js";

import { json } from "express";

export function AuthCheck() {
    return async (req, res, next) => {
        const body = req.body;
        console.log("initial boody",req.body)
        const authtoken = req.headers.authorization;
        try {
            if (!authtoken || !authtoken.startsWith("Bearer")) {
                res.send("plz login");
                res.status(201);
            }
            const token = authtoken.split(" ")[2];
            console.log('line 15', token)
            const decodedData  = await verifyToken(token);
            console.log(decodedData, "line 16 authM");
            //console.log(verifyToken(token))
            if (decodedData != null) {
                req.body = body;
                req.body.email = decodedData["email"];
                console.log(req.body, "line 23 authm");
                next();
            }
        } catch (error) {
            res.status(401).send(error);
        }
    };
}