import React from "react";
import Newnavbar from "./navbar";
import Card from "./card.jsx";
import Jumbotron from "./jumbotron";
import Footer from "./footer";
import "../../styles/index.css";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<>
			<Newnavbar/>
			<div className="container">
			<Jumbotron/>
			<div className="cards_row mt-4">
        		<Card />
       			<Card />
        		<Card />
        		<Card />
      		</div>
			</div>
			<Footer/>
		</>
	);
};

export default Home;
