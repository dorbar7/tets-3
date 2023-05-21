import express, {Request, Response, NextFunction} from "express";
import logic from "../5-logic/logic"
import MeetingModel from "../4-models/meeting-model";

const router = express.Router()

// GET http://localhost:3001/api/devlopment-groups
router.get("/devlopment-groups", async (request: Request, response: Response, next: NextFunction) => {
    try {
        const devlopmentGroup = await logic.getAllDevelopmentGroup();
        response.json(devlopmentGroup);
    }
    catch (err: any) {
        next(err);
    }
});

// GET http://localhost:3001/api/meetings-per-development-group/:devlopmentGroupId
router.get("/meetings-per-development-group/:devlopmentGroupId([0-9]+)", async (request: Request, response: Response, next: NextFunction) => {
    try {
        const devlopmentGroupId= +request.params.devlopmentGroupId;
        const meetings = await logic.getMeetingByGroup(devlopmentGroupId);
        response.json(meetings);
    }
    catch (err: any) {
        next(err);
    }
});

// POST http://localhost:3001/api/meetings
router.post("/meetings", async (request: Request, response: Response, next: NextFunction) => {
    try {
        const meeting = new MeetingModel(request.body);
        const addedMeeting = await logic.addMeeting(meeting);
        response.status(201).json(addedMeeting);
    }
    catch (err: any) {
        next(err);
    }
});

export default router;