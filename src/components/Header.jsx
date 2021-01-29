import React from "react";

function Header(props) {
	return (
		<header className="container-fluid bg-info text-white py-5">
			<div className="container  text-left">
				<h1>Hoteles</h1>
				<h6>
					Hoteles de <strong>{props.filtersState.country}</strong> desde el
					<strong> martes, 1 de enero de 2019</strong> hasta el {""}
					<strong>miercoles, 2 de Febrero 2019</strong> {props.count}
				</h6>
			</div>
		</header>
	);
}

export default Header;
