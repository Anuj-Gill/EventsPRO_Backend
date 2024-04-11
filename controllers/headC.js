import { adminModel } from "../schema/adminSchema.js";
import { eventsModel } from "../schema/eventSchema.js";

export async function EventRegister(req,res) {
    try{
        console.log("Req reached here",req.body);
        const {eventName, eventPoster, date, time, venue, about, mode, socialHandles, prize, entryFee, contactDetails, type , proposalLink, whatsappGroupLink, committee} = req.body;
        const newEvent  = await new eventsModel({eventName,eventPoster, committee,date, time, venue, about, about, mode, socialHandles, prize, entryFee, contactDetails, type, proposalLink, whatsappGroupLink }).save();
        res.json({message: "Event Added Successfully"});
    } catch(error){
        console.log(error)
    }
}