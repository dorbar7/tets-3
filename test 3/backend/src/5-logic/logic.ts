import { OkPacket } from "mysql";
import dal from "../2-utils/dal"
import GroupModel from "../4-models/group-model";
import MeetingModel from "../4-models/meeting-model";


async function getAllDevelopmentGroup(): Promise<GroupModel[]> {
    const sql = `SELECT * FROM developmentgroups `;
    const developmentGroups = await dal.execute(sql);
    return developmentGroups;
}

async function getMeetingByGroup(developmentGroupId: number): Promise<MeetingModel[]> {

    const sql = `
        SELECT M.*, G.developmentGroupName
            FROM meetingschedule AS  M JOIN developmentgroups AS G
            ON M.developmentGroupId = G.developmentGroupId
            WHERE M.developmentGroupId = ${developmentGroupId}`;

    const meeting = await dal.execute(sql);

    return meeting;
}

async function addMeeting(meeting: MeetingModel): Promise<MeetingModel> {
    const sql = `
        INSERT INTO meetingschedule VALUES(
            DEFAULT,
            '${meeting.meetingId}',
            '${meeting.developmentGroupId}',
            '${meeting.dateStartMeeting}',
            '${meeting.dateStopMeeting}',
            '${meeting.description}'
            '${meeting.meetingRoom}'

        )`;

    const info: OkPacket = await dal.execute(sql);

    meeting.meetingId = info.insertId;

    return meeting;
}


export default {
    getAllDevelopmentGroup,
    getMeetingByGroup,
    addMeeting
};
