import { eventsModel } from "../schema/eventSchema.js";

export async function FetchEvents(req,res) {
    console.log(req.body);
    const role = req.body.role;
    const pending = await eventsModel.find({ status: { $regex: role, $options: 'i' } });
    console.log(pending);
}