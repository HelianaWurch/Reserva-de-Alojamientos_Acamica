import React from "react";
import logo from "../assets/BoussoleLogo.png";

function Header(props) {
	return (
		<header className="container-fluid bg-info text-black d-flex justify-content-center">
			<div className="row container">
				<div className="container col-sm-3 col-md-4 col-lg-2 d-flex justify-content.left">
					{" "}
					<img className="w-100" src={logo} alt="Boussole Logo" />
				</div>
				<div className="container text-left col-sm-12 col-md-8 col-lg-8">
					<h1>¡Comenza la busqueda de tu alojamiento perfecto!</h1>
					{props.filtersState.checkIn !== "" ||
					props.filtersState.checkOut !== "" ||
					props.filtersState.country !== "" ||
					props.filtersState.price !== "" ||
					props.filtersState.hotelSize !== "" ? (
						<div>
							<h6>
								Hoteles de <strong>{props.filtersState.country}</strong> desde el
								<strong> {props.filtersState.checkIn}</strong> hasta el {""}
								<strong>{props.filtersState.checkOut}</strong>{" "}
							</h6>
							<span className="row">
								<h6 className="col-sm-12 col-md-4 col-lg-4">
									Precio de los hoteles:
									{props.filtersState.price === "" ? (
										<strong> Todos </strong>
									) : (
										<strong> {props.filtersState.price}</strong>
									)}
								</h6>
								<h6 className="col-sm-12 col-lg-4">
									Tamaño de los hoteles:
									{props.filtersState.hotelSize === "" ? (
										<strong> Todos </strong>
									) : (
										<strong> {props.filtersState.hotelSize}</strong>
									)}
								</h6>
							</span>
						</div>
					) : (
						<div>
							<h6 className="mt-4">Encontrá las mejores ofertas de toda la región.</h6>
							<h6>
								Desde hermosos departamentos hasta cómodas estancias en los principales centros turísticos.{" "}
							</h6>
						</div>
					)}
				</div>
			</div>
		</header>
	);
}

export default Header;
