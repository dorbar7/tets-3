import axios from "axios";
import GroupModel from "../Models/GroupModel";
import appConfig from "../Utils/config";
import MeetingModel from "../Models/MeetingModel";

class MeetingsService {

    public async getAllDevelopmentGroup(): Promise<GroupModel[]>{
        const response = await axios.get<GroupModel[]>(appConfig.developmentGroupUrl);
        const developmentGroup = response.data;
        return developmentGroup;
    }

    public async getMeetingByGroup(developmentGrpoupId: number): Promise<MeetingModel[]> {
        const response = await axios.get<MeetingModel[]>(appConfig.meetingByDevelopmentGroupUrl + developmentGrpoupId);
        const meeting = response.data;
        return meeting;
    }

    public async addMeeting(meeting: MeetingModel): Promise<void> {
        await axios.post<MeetingModel>(appConfig.meetingsUrl, meeting);
    }

}

const meetingService = new MeetingsService();

export default meetingService;