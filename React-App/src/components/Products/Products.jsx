import React from 'react'
import {Grid} from '@material-ui/core'
import Product from './Product/Product'
import useStyles from './styles'
const products = [
    {id:1, name: 'Shoes', description:'Running Shoes.', price:'$5', image: 'https://cdn.pixabay.com/photo/2015/05/31/10/54/shoes-791044_1280.jpg'},
    {id:2, name: 'Macbook', description:'Apple Macbook.', price:'$2000', image: 'https://cdn.pixabay.com/photo/2014/05/02/21/49/laptop-336373_1280.jpg' }
]
const Products=( {products, onAddToCart} ) =>{
    
    const classes = useStyles()
    return(

    <main className={classes.content} >
        <div className= {classes.toolbar}/>
        <Grid container justify='center' spacing ={4}>
            { products.map( (product) => (
                <Grid item key={product.id} xs={12} sm={6} md={4} lg={3} > 
                    <Product product={product} onAddToCart={onAddToCart}/>
                </Grid>
            ))}

        </Grid>
    </main>
    )
}

export default Products