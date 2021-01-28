import React from "react";

import MainResults from "./components/MainResults";
import Header from "./components/Header";
import Filters from "./components/Filters";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			dateIn: "",
			dateOut: "",
			country: "",
			price: "",
			hotelSize: "",
			subTitle: "chau",
		};
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange = (event) => {
		const { name, value } = event.target;
		this.setState({
			[name]: value,
		});
	};

	render() {
		return (
			<div className="App">
				<Header filtersState={this.state} />
				<Filters filtersState={this.state} handleChange={this.handleChange} />
				<MainResults
					filtersState={this.state}
					handleChange={this.handleChange}
					subTitle={this.state.subTitle}
				/>
			</div>
		);
	}
}

export default App;
