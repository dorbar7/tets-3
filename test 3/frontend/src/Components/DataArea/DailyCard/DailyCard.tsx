import MeetingModel from "../../../Models/MeetingModel";
import "./DailyCard.css";

interface DailyCardProps {
	meeting:MeetingModel
}

function DailyCard(props: DailyCardProps): JSX.Element {
    return (
        <div className="DailyCard">
			<div className="Container">
                <span>Start At: {props.meeting.dateStartMeeting}</span>
                <br />
                <span>Description: {props.meeting.description}</span>
                <br />
                <span>End At:{props.meeting.dateStopMeeting}</span>
                <br />
                <span>Meeting Room: {props.meeting.meetingRoom}</span>
                <br />
            </div>
        </div>
    );
}

export default DailyCard;
