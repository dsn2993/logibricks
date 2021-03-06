import React from 'react'

const Search = () => {

    function handleSubmit(e){
        e.preventDefault();
    }

    return (
        <div>
            <nav className="navbar navbar-light bg-light">
                <form className="form-inline " onSubmit={handleSubmit}>
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </nav>

        </div>
    )
}

export default Search