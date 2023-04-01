import React from "react";
import { MdSearch } from "react-icons/md";
import "./style/search.css"

const Search = (props) => {
    return (
        <div className='search'>
            <MdSearch className='search-icons' size='1.3em' />
            <input
                onChange={(event) => props.handleSearchParfume(event.target.value)}
                type='text'
                placeholder='Type to search...'
            />

        </div>
    );
};

export default Search;