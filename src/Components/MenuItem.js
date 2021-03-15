import React from 'react'
import menu from '../menu'
import '../Styles/App.css'
import { OrderModal } from './Modal'
import { default as pizza } from '../Styles/pizza.svg'
import { default as burger } from '../Styles/hamburger.svg'



const MenuItem = ({ filterInput, cartHandler, sortInput, categoryInput }) => {

    // Destructuring of JSON data

    const { categories } = menu
    console.log(categories)

    // Switch statement for sorting the menu items L2H = Low to High etc.
    const sortingFunction = (a, b) => {
        switch (sortInput) {
            case 'L2H':
                return a.price - b.price
            case 'H2L':
                return b.price - a.price
            default:
                break;
        }
    }

    // Mapping, filtering and sorting the data
    // Rendering the outcome 
    const menuItems = categories.map((item) => item.products.filter((elem) =>
        (elem.name.toLowerCase().includes(filterInput.toLowerCase()) || item.name.toLowerCase().includes(filterInput.toLowerCase())) && item.name.toLowerCase().startsWith(categoryInput.toLowerCase())))
        .map((item) => item.sort((a, b) => sortingFunction(a, b))
            .map((item) => {
                return (
                    <div key={item.id} className='MenuItem'>
                        {item.menu_category_id === 1 ?
                            <img alt={'burger'} height={'50%'} width={'50%'} src={burger}></img> :
                            <img alt={'pizza'} height={'50%'} width={'50%'} src={pizza}></img>
                        }
                        <p>{item.name}</p>
                        <p>€{item.price}</p>
                        {/* <p>{item.description}</p> */}
                        {/* Displaying unavailable items but alerting user of this */}
                        {item.active ?
                            <OrderModal item={item} cartHandler={cartHandler} originComponent='Order' /> : <p style={{ color: 'red', marginTop: '1em' }}>Not available</p>}
                    </div>
                )
            }))


    return (
        <div className='menu-hub'>
            {menuItems}
        </div>
    )
}

export default MenuItem
