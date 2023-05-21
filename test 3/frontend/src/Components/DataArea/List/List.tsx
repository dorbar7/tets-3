import { ChangeEvent, useEffect, useState } from "react";
import "./List.css";
import GroupModel from "../../../Models/GroupModel";
import MeetingModel from "../../../Models/MeetingModel";
import meetingService from "../../../Services/DataService";
import DailyCard from "../DailyCard/DailyCard";

function List(): JSX.Element {
   
    const [developmentGroup, setDevelopmentGroup] = useState<GroupModel[]>([]);
    const [meetings, setMeetings] = useState<MeetingModel[]>([]);

    useEffect(() => {
        meetingService.getAllDevelopmentGroup()
            .then(developmentGroup => setDevelopmentGroup(developmentGroup))
            .catch(err => alert(err.message));
    }, []);

   
    async function dailyPlanner(args: ChangeEvent<HTMLSelectElement>) { 
        const value = +args.target.value;
        meetingService.getMeetingByGroup(value)
            .then(meetings => setMeetings(meetings))
            .catch(err => alert(err.message));
    }

    return (
        <div className="List">

            <label>Select Development Group: </label>
            <select defaultValue="" onChange={dailyPlanner}>
                <option disabled value="">Select...</option>
                {developmentGroup.map(d =>
                    <option key={d.developmentGroupId} value={d.developmentGroupId}>
                        {d.developmentGroupName}
                    </option>
                )}
            </select>

            <br />

            {meetings.map(m => <DailyCard key={m.meetingId} meeting={m} />)}

        </div>
    );
}

export default List;