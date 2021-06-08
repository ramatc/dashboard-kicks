import React from 'react'

function ProductCart(props){		
		return (
			<div className="col-lg-6 mb-4">
				<div className="card shadow mb-4">
					<div className="card-header py-3">
						<h5 className="m-0 font-weight-bold text-gray-800">{props.name}</h5>
					</div>
					<div className="card-body">
                        <h6 className="m-0 font-weight-bold text-gray-800">Size: {props.size}</h6>
                        <h6 className="m-0 font-weight-bold text-gray-800">Price: {props.price}</h6>
                        <h6 className="m-0 font-weight-bold text-gray-800">Amount: {props.amount}</h6>
							<p>{props.description}</p>
					</div>
				</div>
			</div>
   			  )
}

export default ProductCart;
