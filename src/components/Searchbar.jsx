function Searchbar(props) {
    return (
        <div className="container-xl my-4">
            <form className="d-flex">
                <input 
                    className="form-control me-2" 
                    type="search" 
                    placeholder="Search" 
                    aria-label="Search"
                    onChange={(e) => {props.onSearchChange(e.target.value)}}>
                </input>
            </form>
        </div>
    )
}

export default Searchbar