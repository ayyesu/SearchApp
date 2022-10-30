import React from 'react';

const Search = ({ keyword, setKeyword, filterActors }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        filterActors()
    }
    
    return ( 
      <div className="search">
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            placeholder="Search by character name"
            id="search-box"
            value={keyword}
            onChange= {(e) => setKeyword(e.target.value)}
          ></input>
          <button type="submit">Search</button>
          <button className="Clear-search" onClick={(e) => {
            setKeyword("")
          }}>Clear</button>
        </form>
      </div>
     );
}
 
export default Search;