import "./Home.css";
import images from "../../../assets/jpg/images.jpg";
function Home(): JSX.Element {
    return (
        <div className="Home">
			<h2>Home Page</h2>
            <br />
            <img src={images} />
        </div>
    );
}

export default Home;
