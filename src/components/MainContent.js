import React from "react";
import NoResults from "./NoResults";
import Card from "./Card";

function MainContent(props) {
	const noResultsMsg =
		"no pudimos encontrar resultados que coincidan con su busqueda. Intentelo nuevamente.";
	return (
		<section className="row">
			{props.hotels.length === 0 ? (
				<NoResults msg={noResultsMsg} />
			) : (
				props.hotels.map((hotel) => <Card key={hotel.id} hotel={hotel} />)
			)}
		</section>
	);
}

export default MainContent;
