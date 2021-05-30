import React from 'react'
import {AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography} from '@material-ui/core'
import {Shop, ShoppingCart} from '@material-ui/icons'
import useStyles from './styles'
import logo from '../../images/rocket-1976107_1280.png'
import {Link, useLocation} from 'react-router-dom'


const Navbar = ({totalItems}) => {
    const classes= useStyles()
    const location = useLocation()

    return (
        <>
            <AppBar position='fixed' className={classes.appBar} color='inherit'>
                <Toolbar>
                    <Typography component={Link} to='/' variant='h6'className={classes.title} color='inherit'>
                        <img src={logo} alt='Commerce.js' height='25px' className={classes.image} fontSize='20px'/>
                        Commerce.js
                    </Typography>
                    <div className={classes.grow}/>
                    { location.pathname == '/' && (
                          <div className={classes.button}>
                            <IconButton component={Link} to='/cart' aria-label='Show Cart Items' color='inherit'>
                                <Badge badgeContent={totalItems} color='secondary' >
                                    <ShoppingCart style={{fontSize: '40'}}/>
                                </Badge>
                            </IconButton>
                        </div>
                    )}
                </Toolbar>
            </AppBar>   
        </>
    )
}

export default Navbar
