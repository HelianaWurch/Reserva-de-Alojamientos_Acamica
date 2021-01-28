import React from "react";
import MainResults from "./MainResults";
import hotelsData from "../data";

class Filters extends React.Component {
	render() {
		return (
			<section className="container-fluid bg-primary p-3 px-5">
				<form className="form-row d-inline-flex justify-content-center">
					<div className="input-group col-lg-2 col-md-6">
						<div className="input-group-prepend">
							<span className="input-group-text bg-white text-black-50">
								<i className="fas fa-sign-in-alt"></i>
							</span>
						</div>
						<input type="date" className="form-control" id="dateInInput" name="dateIn" />
					</div>
					<div className="input-group col-lg-2 col-md-6">
						<div className="input-group-prepend">
							<span className="input-group-text bg-white text-black-50">
								<i className="fas fa-sign-out-alt"></i>
							</span>
						</div>
						<input type="date" className="form-control" id="dateOutInput" name="dateOut" />
					</div>
					<div className="input-group col-lg-2 col-md-6">
						<select
							className="form-control"
							id="countrySelect"
							name="country"
							value={this.props.country}
							onChange={this.props.handleChange}
						>
							<option value="">Todos los Paises </option>
							<option value="argentina"> Argentina </option>
							<option value="brasil"> Brasil </option>
							<option value="chile"> Chile </option>
							<option value="uruguay"> Uruguay </option>
						</select>
					</div>

					<div className="input-group col-lg-2 col-md-6">
						<select
							className="form-control"
							id="priceSelect"
							name="price"
							value={this.props.price}
							onChange={this.props.handleChange}
						>
							<option value=""> Cualquier Precio </option>
							<option value="1"> $ </option>
							<option value="2"> $$ </option>
							<option value="3"> $$$ </option>
							<option value="4"> $$$$ </option>
						</select>
					</div>
					<div className="input-group col-lg-2 col-md-6">
						<select
							className="form-control"
							id="hotelSizeSelect"
							name="hotelSize"
							value={this.props.hotelSize}
							onChange={this.props.handleChange}
						>
							<option value="">Cualquier Tamaño</option>
							<option value="small"> Hotel Pequeño </option>
							<option value="medium"> Hotel Mediano </option>
							<option value="big"> Hotel Grande </option>
						</select>
					</div>
				</form>
				<p>Pais: {this.props.filtersState.country}</p>
				<p>Precio: {this.props.filtersState.price}</p>
				<p>Tamaño: {this.props.filtersState.hotelSize}</p>
			</section>
		);
	}
}

export default Filters;
