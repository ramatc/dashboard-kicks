import React, { Component } from 'react';

import CategoriesInDb from './CategoriesInDb';
import ContentRowProducts from './ContentRowProducts';
import LastProductInDb from "./LastProductInDb"

class ContentRowTop extends Component{
	constructor(props){
		super(props);
		this.state = {
			productsList: [],
            
		}
	} 

	getProducts(){
        fetch("/api/products").then(r => r.json()).then(respuesta =>{ 
            this.setState({productsList: respuesta.data})
        })
    }
	componentDidMount(){
		this.getProducts()
	}
	
	render(){
		let productsList=this.state.productsList
		let lastProduct=productsList[productsList.length-1]
		
		
		return(
        <React.Fragment>
				{/*<!-- Content Row Top -->*/}
				<div className="container-fluid">
					<div className="d-sm-flex aligns-items-center justify-content-between mb-4">
						<h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
					</div>
				
					{/*<!-- Content Row Movies-->*/}
					<ContentRowProducts />
					{/*<!-- End movies in Data Base -->*/}
					
	
					{/*<!-- Content Row Last Movie in Data Base -->*/}
					<div className="row">
						{/*<!-- Last Movie in DB -->*/}
						<LastProductInDb {...lastProduct} />
						{/*<!-- End content row last movie in Data Base -->*/}

						{/*<!-- Genres in DB -->*/}
						<CategoriesInDb />

						{/*<!--End Genres In Db-->*/}		
					</div>
				</div>
				{/*<!--End Content Row Top-->*/}

        </React.Fragment>
    )

}}
export default ContentRowTop;