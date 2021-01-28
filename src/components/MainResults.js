import React from "react";
import Card from "./Card";
import hotelsData from "../data";

class MainResults extends React.Component {
	render() {
		const hotelCard = hotelsData.map((item) => (
			<Card
				key={item.slug}
				hotel={item.name}
				description={item.description}
				// price={this.props.filtersState.price}
				// country={this.props.filtersState.country}
				price={item.price}
				country={item.country}
				city={item.city}
				rooms={item.rooms}
				photo={item.photo}
				subTitle={this.props.subTitle}
			/>
		));

		return (
			<main className="container mt-5 py-5">
				<div className="row">{hotelCard}</div>
			</main>
		);
	}
}

export default MainResults;
