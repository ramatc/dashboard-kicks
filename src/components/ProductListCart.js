import React, {Component} from 'react';
import ProductCart from "./ProductCart"

class ProductListCart extends Component{
    constructor(props){
		super(props);
		this.state = {
			products: [],
		}
	} 

	getProducts(){
        fetch("/api/products").then(r => r.json()).then(respuesta =>{ 
            this.setState({products: respuesta.productsInCart})
            console.log(respuesta.productsInCart)
        })
    }

	componentDidMount(){
		this.getProducts()
	}

    
    render(){
        return(
            <div className="col-lg-6 mb-4">
				<div className="card shadow mb-4">
					<div className="card-header py-3">
						<h5 className="m-0 font-weight-bold text-gray-800">Products in Cart</h5>
					</div>
					<div className="card-body">
							<h3>{this.state.products.length}</h3>
					</div>
				</div>
				{
                    this.state.products.map((product,i)=>{
                        return  <ProductCart  {...product}  key={i} />
                    })
                }
			</div>
        )
    }

}

export default ProductListCart;