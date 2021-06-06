import React from 'react';

const ProductList = (props) =>{
    return(
        <tr>
            <td>{props.id}</td>
            <td>{props.name}</td>
            <td>{props.description}</td>
            <td>{props.price}</td>
            <td>{props.discount}</td>
            <td>{props.size}</td>
            <td>{props.genre.name}</td>
            <td>{props.brands.name}</td>
            <td>{props.colors.name}</td>
            <td>{props.categories.name}</td>
        </tr>
    )
}

export default ProductList;