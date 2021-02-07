import React from "react";
import Header from "./components/Header";
import Filters from "./components/Filters";
import hotelsData from "./data";
import "./styles/styles.css";
require("moment/locale/es.js");

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			hotels: hotelsData,
			checkIn: "",
			checkOut: "",
			country: "",
			price: "",
			hotelSize: "",
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleResetFilters = this.handleResetFilters.bind(this);
	}

	handleChange = (event) => {
		const { name, value } = event.target;
		this.setState({
			[name]: value,
		});
	};

	handleResetFilters = () => {
		this.setState({
			checkIn: "",
			checkOut: "",
			country: "",
			price: "",
			hotelSize: "",
		});
	};

	render() {
		return (
			<div className="App">
				<Header filtersState={this.state} handleResetFilters={this.handleResetFilters} />
				<Filters
					filtersState={this.state}
					hotelsData={this.state.hotels}
					handleChange={this.handleChange}
				/>
			</div>
		);
	}
}

export default App;
