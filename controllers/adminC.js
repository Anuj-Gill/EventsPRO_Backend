import { eventsModel } from "../schema/eventSchema.js";

export async function FetchEvents(req, res) {
    console.log("reached cotroller", req.body);
    const role = req.body.role;
    const adminCommittee = req.body.committee;
    console.log(adminCommittee, role);
    let allEvents = [];
    let approved = [];
    let pending = [];
    if (role == "CAO" || role == "ACC") {
        allEvents = await eventsModel.find({});
    } else {
        allEvents = await eventsModel.find({ committee: adminCommittee });
    }
    console.log("allevents", allEvents);
    if (role == 'head') {
        pending = allEvents.filter((event) => event.status.includes("Pending"));  
    } else if(role == 'ACC') {
        pending = allEvents.filter((event) => event.status.includes("PendingAccounts"));  
    }
    else {
        pending = allEvents.filter((event) => event.status.includes(role));
    }
    approved = allEvents.filter((event) => event.status == "Approved");
    console.log("pending", pending);
    res.json({ pendingEvents: pending, approvedEvents: approved, role: role });
}

export async function UpdateStatus(req, res) {
    console.log(req.body, "line 14");
    const event = await eventsModel.updateOne({ _id: req.body.eventId }, { status: req.body.status, feedback: req.body.feedback });
    console.log(event);


}