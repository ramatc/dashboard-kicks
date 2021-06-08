import React, { Component } from 'react'

class LastProductInDb extends Component {
	constructor(props){
		super(props);
		this.state = {
			products: {},
		}
	} 

	getProducts(){
        fetch("/api/products").then(r => r.json()).then(respuesta =>{ 
            this.setState({products: respuesta.data[respuesta.data.length - 1]})
        })
    }

	componentDidMount(){
		this.getProducts()
	}

	render(){
		
		let url = "http://localhost:3000/products/" + this.state.products.id
		
		return (
			<div className="col-lg-6 mb-4">
				<div className="card shadow mb-4">
					<div className="card-header py-3">
						<h5 className="m-0 font-weight-bold text-gray-800">Last product in data base</h5>
						<h6 className="m-0 font-weight-bold text-gray-800">{this.state.products.name}</h6>
					</div>
					<div className="card-body">
						<div className="text-center">
							<img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 40 +'rem'}} src={this.state.products.image} alt={this.state.products.name}/>
						</div>
							<p>{this.state.products.description}</p>
							<a className="btn btn-danger" target="_blank" rel="noreferrer" href={url} >View product detail</a>
					</div>
				</div>
			</div>
   			 )
		}
}

export default LastProductInDb;
