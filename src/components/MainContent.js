import React from "react";
import NoResults from "./NoResults";
import Card from "./Card";

function MainContent(props) {
	return (
		<section className="row">
			{props.hotels.length === 0 ? (
				<NoResults />
			) : (
				props.hotels.map((hotel) => <Card key={hotel.id} hotel={hotel} />)
			)}
		</section>
	);
}

export default MainContent;
