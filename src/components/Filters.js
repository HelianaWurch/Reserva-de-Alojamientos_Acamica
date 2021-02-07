import React from "react";
import MainContent from "./MainContent";
import NoResults from "./NoResults";
import ResetBtn from "./ResetBtn";

class Filters extends React.Component {
	checkDateFilterValue(item) {
		const inDate = new Date(this.props.filtersState.checkIn);
		const outDate = new Date(this.props.filtersState.checkOut);

		const checkInValue = new Date(
			inDate.getFullYear(),
			inDate.getMonth(),
			inDate.getDate() + 1
		).getTime();

		const checkOutValue = new Date(
			outDate.getFullYear(),
			outDate.getMonth(),
			outDate.getDate() + 1
		).getTime();

		if (this.props.filtersState.checkIn === "" || this.props.filtersState.checkOut === "") {
			return true;
		} else {
			return checkInValue <= item.availabilityFrom && checkOutValue <= item.availabilityTo;
		}
	}

	countryFilterValue(item) {
		if (this.props.filtersState.country === "Argentina") {
			return item.country === "Argentina";
		} else if (this.props.filtersState.country === "Brasil") {
			return item.country === "Brasil";
		} else if (this.props.filtersState.country === "Chile") {
			return item.country === "Chile";
		} else if (this.props.filtersState.country === "Uruguay") {
			return item.country === "Uruguay";
		} else {
			return true;
		}
	}

	priceFilterValue(item) {
		if (this.props.filtersState.price === "1") {
			return item.price === 1;
		} else if (this.props.filtersState.price === "2") {
			return item.price === 2;
		} else if (this.props.filtersState.price === "3") {
			return item.price === 3;
		} else if (this.props.filtersState.price === "4") {
			return item.price === 4;
		} else {
			return true;
		}
	}

	hotelSizeFilterValue(item) {
		if (this.props.filtersState.hotelSize === "Pequeños") {
			return item.rooms <= 10;
		} else if (this.props.filtersState.hotelSize === "Medianos") {
			return item.rooms > 10 && item.rooms <= 20;
		} else if (this.props.filtersState.hotelSize === "Grandes") {
			return item.rooms > 20;
		} else {
			return true;
		}
	}

	render() {
		let filterData = this.props.hotelsData.filter((item) => {
			return (
				this.countryFilterValue(item) &&
				this.priceFilterValue(item) &&
				this.hotelSizeFilterValue(item) &&
				this.checkDateFilterValue(item)
			);
		});

		const errorDate = "ha ingresado una fecha incorrecta, por favor ingrese una fecha valida.";

		return (
			<section>
				<div className="filters-container container-fluid bg-primary p-2">
					<form className="form-row d-flex justify-content-center">
						<div className="input-group col-lg-2 col-md-6">
							<div className="input-group-prepend">
								<span className="input-group-text bg-white text-black-50">
									<i className="fas fa-sign-in-alt"></i>
								</span>
							</div>
							<input
								type="date"
								className="form-control"
								id="checkInInput"
								name="checkIn"
								value={this.props.filtersState.checkIn}
								onChange={this.props.handleChange}
							/>
						</div>

						<div className="input-group col-lg-2 col-md-6">
							<div className="input-group-prepend">
								<span className="input-group-text bg-white text-black-50">
									<i className="fas fa-sign-out-alt"></i>
								</span>
							</div>
							<input
								type="date"
								className="form-control"
								id="checkOutInput"
								name="checkOut"
								value={this.props.filtersState.checkOut}
								onChange={this.props.handleChange}
							/>
						</div>
						<div className="input-group col-lg-2 col-md-6">
							<select
								className="form-control"
								id="countrySelect"
								name="country"
								value={this.props.filtersState.country}
								onChange={this.props.handleChange}
							>
								<option value="">Todos los Paises </option>
								<option value="Argentina"> Argentina </option>
								<option value="Brasil"> Brasil </option>
								<option value="Chile"> Chile </option>
								<option value="Uruguay"> Uruguay </option>
							</select>
						</div>

						<div className="input-group col-lg-1 col-md-6">
							<select
								className="form-control"
								id="priceSelect"
								name="price"
								value={this.props.filtersState.price}
								onChange={this.props.handleChange}
							>
								<option value="">Precio </option>
								<option value="1"> $ </option>
								<option value="2"> $$ </option>
								<option value="3"> $$$ </option>
								<option value="4"> $$$$ </option>
							</select>
						</div>
						<div className="input-group col-lg-1 col-md-6">
							<select
								className="form-control"
								id="hotelSizeSelect"
								name="hotelSize"
								value={this.props.filtersState.hotelSize}
								onChange={this.props.handleChange}
							>
								<option value="">Tamaño</option>
								<option value="Pequeños"> Hotel Pequeño </option>
								<option value="Medianos"> Hotel Mediano </option>
								<option value="Grandes"> Hotel Grande </option>
							</select>
						</div>
						<div className="d-inline-flex justify-content-center px-4 col-md-12 col-lg-2">
							<ResetBtn handleResetFilters={this.props.handleResetFilters} />
						</div>
					</form>
				</div>

				<main className="container mt-5 py-5">
					{this.props.filtersState.checkIn !== "" &&
					this.props.filtersState.checkOut !== "" &&
					this.props.filtersState.checkIn >= this.props.filtersState.checkOut ? (
						<NoResults msg={errorDate} />
					) : (
						<MainContent hotels={filterData} />
					)}
				</main>
			</section>
		);
	}
}
export default Filters;
