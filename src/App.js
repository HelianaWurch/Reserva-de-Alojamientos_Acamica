import React from "react";
import Header from "./components/Header";
import Filters from "./components/Filters";
import Card from "./components/Card";
import hotelsData from "./data";
import "./styles/styles.css";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			hotels: hotelsData,
			dateIn: "",
			dateOut: "",
			country: "",
			price: "",
			hotelSize: "",
		};

		this.handleCountry = this.handleCountry.bind(this);
		this.handlePrice = this.handlePrice.bind(this);
		this.handleHotelSize = this.handleHotelSize.bind(this);
	}

	handleCountry = (event) => {
		if (event.target.value === "") {
			this.setState({ country: event.target.value, hotels: hotelsData });
		} else {
			this.setState({
				country: event.target.value,
				hotels: hotelsData.filter((item) => {
					if (event.target.value === "Argentina") {
						return item.country === "Argentina";
					} else if (event.target.value === "Brasil") {
						return item.country === "Brasil";
					} else if (event.target.value === "Chile") {
						return item.country === "Chile";
					} else if (event.target.value === "Uruguay") {
						return item.country === "Uruguay";
					} else {
						return "Error en selección del país de los hoteles";
					}
				}),
			});
		}
	};

	handlePrice = (event) => {
		if (event.target.value === "") {
			this.setState({ price: event.target.value, hotels: hotelsData });
		} else {
			this.setState({
				price: event.target.value,
				hotels: hotelsData.filter((item) => {
					if (event.target.value === "1") {
						return item.price === 1;
					} else if (event.target.value === "2") {
						return item.price === 2;
					} else if (event.target.value === "3") {
						return item.price === 3;
					} else if (event.target.value === "4") {
						return item.price === 4;
					} else {
						return "Error en selección de precio de hoteles";
					}
				}),
			});
		}
	};

	handleHotelSize = (event) => {
		if (event.target.value === "") {
			this.setState({ hotelSize: event.target.value, hotels: hotelsData });
		} else {
			this.setState({
				hotelSize: event.target.value,
				hotels: hotelsData.filter((item) => {
					if (event.target.value === "small") {
						return item.rooms <= 10;
					} else if (event.target.value === "medium") {
						return item.rooms > 10 && item.rooms <= 20;
					} else if (event.target.value === "big") {
						return item.rooms > 20;
					} else {
						return "Error en selección de tamaño de hoteles";
					}
				}),
			});
		}
	};

	render() {
		return (
			<div className="App">
				<Header filtersState={this.state} count={this.state.hotels.length} />
				<Filters
					country={this.state.country}
					price={this.state.price}
					hotelSize={this.state.hotelSize}
					handleCountry={this.handleCountry}
					handlePrice={this.handlePrice}
					handleHotelSize={this.handleHotelSize}
				/>
				<Card hotels={this.state.hotels} />
			</div>
		);
	}
}

export default App;
