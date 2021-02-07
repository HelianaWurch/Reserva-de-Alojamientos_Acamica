import React from "react";

function ResetBtn(props) {
	return (
		<button className="btn btn-info btn-lg" onClick={props.handleResetFilters}>
			Borrar
		</button>
	);
}

export default ResetBtn;
