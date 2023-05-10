class Config {
    public developmentGroupUrl = "http://localhost:3001/api/devlopment-groups/";
    public meetingByDevelopmentGroupUrl = "http://localhost:3001/api/meetings-per-development-group/";
    public meetingsUrl = "http://localhost:3001/api/meetings/";
}
const appConfig = new Config()
export default appConfig