import React from "react";

class Card extends React.Component {
	render() {
		const listIcons = (hotel) =>
			Array.from({
				length: hotel.price,
			}).map((item, index) => <i className="fas fa-dollar-sign price-icons" key={index}></i>);

		return (
			<main className="container mt-5 py-5">
				<section className="row">
					{this.props.hotels.map((hotel) => (
						<article className="col-lg-4 col-md-6 col-12 my-2" key={hotel.id}>
							<div className="card mx-2">
								<img src={hotel.photo} className="card-img-top" alt={hotel.slug} />
								<div className="card-body text-left">
									<h2 className="card-title">{hotel.name}</h2>
									<p className="card-text ">{hotel.description}</p>
									<div className="">
										<div className="d-flex">
											<i className="fas fa-map-marker bg-primary icons"></i>
											<h6 className="info">
												{hotel.city}, {hotel.country}
											</h6>
										</div>

										<div className="d-flex">
											<div className="d-inline-flex">
												<i className="fas fa-bed bg-primary icons"></i>
												<h6 className="info"> {hotel.rooms} Habitaciones</h6>
											</div>

											<span className="price-span bg-primary ml-2">{listIcons(hotel)}</span>
										</div>
									</div>
									<button
										type="button"
										className="btn btn-info btn-lg btn-block"
										onClick={console.log("botton")}
									>
										Reservar
									</button>
								</div>
							</div>
						</article>
					))}
				</section>
			</main>
		);
	}
}

export default Card;
