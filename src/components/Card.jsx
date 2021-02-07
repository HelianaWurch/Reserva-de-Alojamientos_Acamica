import React from "react";

function Card(props) {
	const listIcons = (hotel) =>
		Array.from({
			length: hotel.price,
		}).map((item, index) => <i className="fas fa-dollar-sign price-icons" key={index}></i>);

	return (
		<article className="col-lg-4 col-md-6 col-12 my-3">
			<div className="shadow card card-hover">
				<img src={props.hotel.photo} className="card-img-top" alt={props.hotel.slug} />
				<div className="card-body text-left">
					<h2 className="card-title">{props.hotel.name}</h2>
					<p className="card-text ">{props.hotel.description}</p>
					<div className="">
						<div className="d-flex">
							<i className="fas fa-map-marker bg-primary icons"></i>
							<h6 className="info">
								{props.hotel.city}, {props.hotel.country}
							</h6>
						</div>

						<div className="d-flex">
							<div className="d-inline-flex">
								<i className="fas fa-bed bg-primary icons"></i>
								<h6 className="info"> {props.hotel.rooms} Habitaciones</h6>
							</div>

							<span className="price-span bg-primary mx-2">{listIcons(props.hotel)}</span>
						</div>
					</div>
					<button type="button" className="btn btn-info btn-lg btn-block" onClick={console.log("boton")}>
						Reservar
					</button>
				</div>
			</div>
		</article>
	);
}

export default Card;
