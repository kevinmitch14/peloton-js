import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { Button } from '@material-ui/core';
import DoneIcon from '@material-ui/icons/Done';
import CloseIcon from '@material-ui/icons/Close';


// Majority of this was taken from MaterialUI site and added some things in myself


const useStyles = makeStyles((theme) => ({
    paper: {
        top: '50%',
        left: '50%',
        transform: `translate(-50%, -50%)`,
        position: 'absolute',
        width: '50%',
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));


export const OrderModal = ({ item, cartHandler }) => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [orderSuccess, setOrderSuccess] = useState(false)

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const orderBody = (
        <div className={classes.paper}>
            <span onClick={handleClose} style={{ position: 'absolute', top: 5, right: 10 }}><CloseIcon /></span>
            <h2 id="simple-modal-title">{item.name}</h2>
            <p id="simple-modal-description">{item.description}</p>
            <p>€{item.price.toFixed(2)}</p>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <button onClick={() => { cartHandler(item); setOrderSuccess(true) }}>Add to cart</button>
                {orderSuccess && <DoneIcon />}
            </div>
        </div>
    );


    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Button variant='contained' style={{ backgroundColor: '#1c5955', color: 'white', marginTop: '1em' }} onClick={handleOpen}>Order </Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                {orderBody}

            </Modal>
        </div >
    );
}
export const CartModal = ({ cart }) => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const cartBody = (
        <div className={classes.paper}>
            <span onClick={handleClose} style={{ position: 'absolute', top: 5, right: 10 }}><CloseIcon /></span>
            <h2 id="simple-modal-title">Cart</h2>
            {cart.map((item) => {
                console.log(item)
                return (
                    <p key={item.id}>{item.name} - €{item.price}</p>
                )
            })}
            <h2 id='total-cart'>Total: {cart.reduce((acc, item) => acc + item.price, 0)}</h2>
            <button style={{ backgroundColor: '#1c5955', padding: '0.5em', margin: '0.5em', color: 'white' }}>Complete Order</button>
        </div>
    );


    return (
        <div>
            <button id='cart-button' onClick={handleOpen}>View</button>
            <Modal
                style={{ textAlign: 'center' }}
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                {cartBody}

            </Modal>
        </div >
    );
}

