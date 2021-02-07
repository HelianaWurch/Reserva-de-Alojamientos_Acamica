import React from "react";

function DateError() {
	return (
		<article className="my-5 py-3 col-12">
			<div className="row mx-5">
				<div className="col-lg-6 col-sm-12">
					<i className="far fa-frown-open sad-face"></i>
				</div>
				<div className="col-lg-6 col-sm-12 my-4 text-left">
					<h3>FECHA INCORRECTA</h3>
				</div>
			</div>
		</article>
	);
}

export default DateError;
