import React, { useEffect, useRef } from 'react'

const Input = ({ filterHandler, sortHandler, categoryHandler }) => {

    // Focus on 'ALL' category button by default when the app loads for styling purposes
    const ref = useRef(null)
    useEffect(() => {
        ref.current.focus()
    }, [])

    return (
        <div className='Input'>
            <div className='filter-handlers'>
                <input type='text' placeholder='Search...' onChange={filterHandler}></input>
                <select defaultValue='default' onChange={sortHandler}>
                    <option value='default' disabled >Sort</option>
                    <option value='H2L'>Highest to Lowest</option>
                    <option value='L2H'>Lowest to Highest</option>
                </select>
            </div>
            {/* Decided to use the category names here but as the sample size would grow I would
                revert to menu_category_id*/}
            <div className='category-buttons'>
                <button id='clear-button' ref={ref} onClick={() => categoryHandler('')}>All</button>
                <button id='burger-button' onClick={() => categoryHandler("Burgers")}>Burgers</button>
                <button id='pizza-button' onClick={() => categoryHandler("Pizza")}>Pizza</button>
            </div>

        </div>
    )
}

export default Input
