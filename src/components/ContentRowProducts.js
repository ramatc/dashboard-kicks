import React, { Component } from 'react';
import SmallCard from './SmallCard';
class ContentRowProducts extends Component{
       
	constructor(props){
		super(props);
		this.state = {
			productsList: [],
            usersList: [],
		}
	} 

	getProducts(){
        fetch("/api/products").then(r => r.json()).then(respuesta =>{ 
            this.setState({productsList: respuesta.meta})
        })
    }

    getUsers(){
        fetch("/api/users").then(r => r.json()).then(respuesta =>{ 
            this.setState({usersList: respuesta.meta})
        })
    }

    componentDidMount(){
        this.getProducts()
        this.getUsers()
    }
    
    render(){
    return (
        <React.Fragment>
        {/*<!-- Content Row -->*/}
        <div className="row">
           <SmallCard valor={this.state.productsList.count} titulo="Products in Data Base" color="primary" icono="fas fa-box-open"/>
           <SmallCard valor={this.state.usersList.count} titulo="Total users"  color="success" icono="fas fa-users"/>
           <SmallCard valor={this.state.productsList.countCategories} titulo="Total categories" color="warning" icono="fas fa-list"/>
        </div>
        </React.Fragment>
    )
}  }
export default ContentRowProducts;