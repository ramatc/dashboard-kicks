
import React from 'react'

export default function LastProductInDb(props) {
    return (
        <div className="col-lg-6 mb-4">
			<div className="card shadow mb-4">
				<div className="card-header py-3">
					<h5 className="m-0 font-weight-bold text-gray-800">Last product in data base</h5>
                    <h6 className="m-0 font-weight-bold text-gray-800">{props.name}</h6>
				</div>
				<div className="card-body">
					<div className="text-center">
						<img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 40 +'rem'}} src={props.image} alt={props.name}/>
					</div>
						<p>{props.description}</p>
						<a className="btn btn-danger" target="_blank" rel="nofollow" href="/">View product detail</a>
				</div>
			</div>
		</div>
    )
}
