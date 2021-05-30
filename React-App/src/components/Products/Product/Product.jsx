import React from 'react'
import {Card, CardMedia, CardContent, CardActions, Typography, IconButton} from '@material-ui/core'
import {AddShoppingCart} from '@material-ui/icons'
// import classes from '*.module.css'
import useStyles from './styles'

const Product = ({product, onAddToCart}) => {

    const classes = useStyles()

    // function randFunc(input1, input2){
    //     return(console.log(input1,input2))
    // }    
    
    return (
        <Card className={classes.root} >
            <CardMedia 
            style={{ height: "auto" }}
            image={product.media.source}
            className={classes.media} 
             title={product.name}/>
            <CardContent>
                <div className={classes.CardContent}>
                    
                    <Typography variant='h5' gutterBottom>
                        {product.name}
                    </Typography>

                    <Typography variant='h5'>
                        {product.price.formatted_with_symbol}
                    </Typography>

                </div>
                <Typography dangerouslySetInnerHTML={{__html:product.description}} variant='body2' color='textSecondary'/> 
            </CardContent>
            <CardActions disableSpacing className={classes.CardActions} >
                <IconButton aria-label='Add to Cart' onClick= { () => onAddToCart(product.id, 1)}>
                {/* <IconButton aria-label='Add to Cart' > */}
                    <AddShoppingCart/>
                </IconButton>

            </CardActions>
        </Card>

    )
}

export default Product
