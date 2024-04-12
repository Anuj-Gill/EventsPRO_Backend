import { eventsModel } from "../schema/eventSchema.js";

export async function FetchEvents(req,res) {
    console.log(req.body);
    const role = req.body.role;
    const adminCommittee = req.body.committee;
    console.log(adminCommittee, role);
    const allEvents = await eventsModel.find({ committee: adminCommittee });
    const pending = allEvents.filter((event) => event.status == "PendingEC");
    const approved = allEvents.filter((event) => event.status != "PendingEC");
    res.json({pendingEvents: pending, approvedEvents: approved});
}