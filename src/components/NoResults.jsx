import React from "react";

function NoResults() {
	return (
		<article className="my-5 py-5 col-12">
			<div className="row mx-5 py-5 my-4">
				<div className="col-lg-6 col-sm-12 ">
					<i className="far fa-frown-open sad-face"></i>
				</div>
				<div className="col-lg-6 col-sm-12 my-4 text-left">
					<h3>
						Lo sentimos, no pudimos encontrar resultados que coincidan con su busqueda. Intentelo
						nuevamente.
					</h3>
				</div>
			</div>
		</article>
	);
}

export default NoResults;
