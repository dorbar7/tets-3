import Joi from "joi";

class MeetingModel {
    
    public meetingId: number;
    public developmentGroupId: number;
    public dateStartMeeting: string;
    public dateStopMeeting: string;
    public description: string;
    public meetingRoom:string ;

    public constructor(meeting:MeetingModel) {
        this.meetingId = meeting.meetingId;
        this.developmentGroupId = meeting.developmentGroupId;
        this.dateStartMeeting= meeting.dateStartMeeting;
        this.dateStopMeeting = meeting.dateStopMeeting;
        this.description = meeting.description;
        this.meetingRoom = meeting.meetingRoom;
    }

    public static validationSchema = Joi.object({
        meetingId: Joi.number().optional().integer().positive(),
        developmentGroupId: Joi.number().required().integer().positive(),
        dateStartMeeting: Joi.string().required(),
        dateStopMeeting: Joi.string().required(),
        description: Joi.string().required().min(5).max(2000),
        meetingRoom: Joi.string().required().min(3).max(100)
    })

    public validate(): string {
        const result = MeetingModel.validationSchema.validate(this)
        return result.error?.message
    }
}


export default MeetingModel;