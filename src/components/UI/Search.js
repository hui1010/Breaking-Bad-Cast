import React, {useState} from 'react'

const Search = ({getQuery}) => {
    //Every input in the form should have its own piece of state 
    const [text, setText] = useState('')

    const onChange = (q) => {
        setText(q)
        getQuery(q)
    }

    return (
        <section className='search'>
            <form>
                <input type="text" 
                className='form-control' 
                placeholder='Search characters' 
                value={text} 
                onChange={(e) => onChange(e.target.value)}
                autoFocus/>
            </form>
        </section>
    )
}

export default Search
