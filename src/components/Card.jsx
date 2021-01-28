import React from "react";

class Card extends React.Component {
	render() {
		const listIcons = Array.from({ length: this.props.price }).map((item) => (
			<i className="fas fa-dollar-sign price-icons" key={Math.random()}></i>
		));

		return (
			<section className="col-lg-4 col-md-6 col-12 my-2">
				<div className="card mx-2">
					<img src={this.props.photo} className="card-img-top" alt="la bamba de areco" />
					<div className="card-body text-left">
						<h2 className="card-title">{this.props.subTitle}</h2>
						<h2 className="card-title">{this.props.hotel}</h2>
						<p className="card-text ">{this.props.description}</p>
						<div className="">
							<div className="d-flex">
								<i className="fas fa-map-marker bg-primary icons"></i>
								<h6 className="info">
									{" "}
									{this.props.city}, {this.props.country}{" "}
								</h6>
							</div>

							<div className="d-flex">
								<div className="d-inline-flex">
									<i className="fas fa-bed bg-primary icons"></i>
									<h6 className="info"> {this.props.rooms} Habitaciones</h6>
								</div>{" "}
								<span className="price-span bg-primary ml-2">{listIcons}</span>
							</div>
						</div>
						<button type="button" className="btn btn-info btn-lg btn-block" onClick={this.handleClick}>
							Reservar
						</button>
					</div>
				</div>
			</section>
		);
	}
}

export default Card;
