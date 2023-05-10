import { useNavigate } from "react-router-dom";
import "./Insert.css";
import { useEffect, useState } from "react";
import GroupModel from "../../../Models/GroupModel";
import { useForm } from "react-hook-form";
import MeetingModel from "../../../Models/MeetingModel";
import meetingService from "../../../Services/DataService";

function Insert(): JSX.Element {
   
        const navigate = useNavigate();

    const [developmentGroup, setDevlopmentGroup] = useState<GroupModel[]>([]);

    const { register, handleSubmit } = useForm <MeetingModel>();

    useEffect(() => {
        meetingService.getAllDevelopmentGroup()
            .then(developmentGroup => setDevlopmentGroup(developmentGroup))
            .catch(err => alert(err.message));
    }, []);

    async function add(meeting: MeetingModel) {
        try {
            await meetingService.addMeeting(meeting);
            alert("meeting has been added to the daily ");
            navigate("/meetings");
        }
        catch(err: any) {
            alert(err.message);
        }
    }

    return (
        <div className="Insert">

            <form onSubmit={handleSubmit(add)}>

                <label>Select Development Group: </label>
                <select defaultValue="" {...register("developmentGroupId")} required>
                    <option disabled value="">Select...</option>
                    {developmentGroup.map(d =>
                        <option key={d.developmentGroupId} value={d.developmentGroupId}>
                            {d.developmentGroupName}
                        </option>
                    )}
                </select>

                <label>Start At: </label>
                <input type="date" {...register("dateStartMeeting")} required/>
                 <br /><br />
                <label>Description: </label>
                <input type="text" {...register("description")} required/>
                 <br /><br />
                <label>End At </label>
                <input type="date" {...register("dateStopMeeting")} required  />
                 <br /><br />
                <label>Meeting Room: </label>
                <input type="text" {...register("meetingRoom")} required  />
                <hr />
                <button>Add Meeting</button>

            </form>
        </div>
    );
}

export default Insert;
