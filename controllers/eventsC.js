import { eventsModel } from "../schema/eventSchema.js";
import { studentModel } from "../schema/studentSchema.js";



export async function RegisterEvent(req, res) {
    console.log("inside register controller", req.body);
    const {rollNo} = req.body;
    const participantsArray = await eventsModel.findOne({ _id: req.body.eventId }).select('participants');
    if (req.body.events.includes(req.body.eventId)) {
        res.json({ message: "Already registered for this event!!" })
    } else {
        const addEvent = await studentModel.updateOne({ _id: req.body.studentId }, { $push: { events: req.body.eventId } });
        if (req.body.teamCode) {
            await eventsModel.updateOne({ _id: req.body.eventId }, { participants: [...participantsArray.participants, { studentId: req.body.studentId, teamCode: req.body.teamCode, status: false }] })
            res.json({ message: 'Registered for the event successfully!!'});
        } else {
            await eventsModel.updateOne({ _id: req.body.eventId }, { participants: [...participantsArray.participants, { studentId: req.body.studentId, status: false }] });
            res.json({ message: 'Registered for the event successfully!!'});
        }
    }
}

export async function FetchStatus(req, res) {
    console.log("line 21",req.body)
    const {rollNo, email, eventId} = req.body;
    const studentId = String(req.body.studentId);
    console.log("rollNo",rollNo)
    console.log("eventId", eventId);
    console.log("studentId", studentId);
    let status = false;
    try {
        const participantsArray = await eventsModel.findOne({ _id: eventId });
        console.log(participantsArray.participants)
        const filteredParticipants = participantsArray.participants.filter((participant) => studentId == participant.studentId);
        // status = participantsArray.participants[0].status;
        // console.log('line 32',participantsArray.participants, status);
        console.log('line 32',filteredParticipants);
        if(filteredParticipants.length == 0) {
            res.json({ message: false});
        } else {
            res.json({ message: true, teamCode: filteredParticipants[0].teamCode});
        }
    }
    catch (error) {
        console.log(error)
    }
}


