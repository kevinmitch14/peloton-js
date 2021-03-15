import React from 'react'
import menu from '../menu'
import '../Styles/App.css'
import { OrderModal } from './Modal'



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
                            <img alt='burger' height='40%' width='40%' src='https://www.flaticon.com/svg/vstatic/svg/3075/3075977.svg?token=exp=1615784172~hmac=5c50a70a67c350ad60316ba1dd404e0c'></img> :
                            <img alt='pizza' height='40%' width='40%' src='https://www.flaticon.com/svg/vstatic/svg/2094/2094661.svg?token=exp=1615783494~hmac=e006b5f26ca5459795b0edda6ffebc8f'></img>}
                        <p>{item.name}</p>
                        <p>€{item.price}</p>
                        {/* <p>{item.description}</p> */}
                        {/* Displaying unavailable items but alerting user of this */}
                        {item.active ?
                            <OrderModal item={item} cartHandler={cartHandler} originComponent='Order' /> : <p style={{ color: 'red' }}>Not available</p>}
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
