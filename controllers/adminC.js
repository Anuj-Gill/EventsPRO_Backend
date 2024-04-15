import { eventsModel } from "../schema/eventSchema.js";

export async function FetchEvents(req,res) {
    console.log("reached cotroller",req.body);
    const role = req.body.role;
    const adminCommittee = req.body.committee;
    console.log(adminCommittee, role);
    let allEvents = [];
    let approved = [];
    if(role == "CAO") {
        allEvents = await eventsModel.find({});
    } else {
        allEvents = await eventsModel.find({ committee: adminCommittee });
    }
    console.log("allevents",allEvents);
    const pending = allEvents.filter((event) => event.status.includes(role)); 
    approved = allEvents.filter((event) => event.status == "Approved");
    console.log("pending",pending);
    res.json({pendingEvents: pending, approvedEvents: approved, role: role});
}

export async function UpdateStatus(req,res) {
    console.log(req.body, "line 14");
    const event = await eventsModel.updateOne({_id: req.body.event},{status: req.body.status});
    console.log(event);

    
}