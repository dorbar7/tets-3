class MeetingModel {
    
    public meetingId: number;
    public developmentGroupId: number;
    public dateStartMeeting: Date;
    public dateStopMeeting: Date;
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

}

export default MeetingModel;