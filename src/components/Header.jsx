import React from "react";
import logo from "../../src/assets/BoussoleLogo.png";
import moment from "moment";

function Header(props) {
	const showCountryText =
		props.filtersState.country !== "" ? (
			<h6>
				Hoteles de <strong>{props.filtersState.country}. </strong>{" "}
			</h6>
		) : (
			<h6>Encontrá las mejores ofertas.</h6>
		);

	const showPriceAndSizeText =
		props.filtersState.price !== "" || props.filtersState.hotelSize !== "" ? (
			<span className="row">
				<h6 className="col-sm-12 col-md-4 col-lg-6">
					Precio seleccionado:
					{props.filtersState.price === "" ? (
						<strong> Todos </strong>
					) : (
						<strong> {props.filtersState.price}</strong>
					)}
				</h6>
				<h6 className="col-sm-12 col-md-4 col-lg-6">
					Tamaño seleccionado:
					{props.filtersState.hotelSize === "" ? (
						<strong> Todos </strong>
					) : (
						<strong> {props.filtersState.hotelSize}</strong>
					)}
				</h6>
			</span>
		) : (
			<span className="row">
				<h6 className="col-sm-12 col-md-4 col-lg-12">
					Desde hermosos departamentos hasta cómodas estancias en los principales centros turísticos de
					la región.{" "}
				</h6>
			</span>
		);

	const showDateText =
		props.filtersState.checkIn !== "" && props.filtersState.checkOut !== "" ? (
			<h6>
				Desde el {""}
				<strong>{moment(props.filtersState.checkIn).locale("es").format("LL")}</strong> hasta el {""}
				<strong>{moment(props.filtersState.checkOut).format("LL")}</strong>{" "}
			</h6>
		) : (
			""
		);

	return (
		<header className="container-fluid bg-info text-black d-flex justify-content-center">
			<div className="row container">
				<div className="col-sm-3 col-md-4 col-lg-2 mx-4">
					{" "}
					<img className="w-100 my-5" src={logo} alt="Boussole Logo" />
				</div>
				<div className="text-left col-sm-12 col-md-8 col-lg-8">
					{" "}
					<h1>¡Comenzá la búsqueda de tu alojamiento perfecto!</h1>
					<div>
						{showCountryText}
						{showDateText}
					</div>
					<div>{showPriceAndSizeText}</div>
				</div>
			</div>
		</header>
	);
}

export default Header;
