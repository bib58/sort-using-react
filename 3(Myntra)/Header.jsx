function Header() {
    return (
        <div className="header">
            <img src="https://brandlogos.net/wp-content/uploads/2022/03/myntra-logo-brandlogos.net_.png" alt="Myntra Logo" className="logo" draggable="false" />

            <div className="options">
                <button>Men</button>
                <button>Women</button>
                <button>Kids</button>
                <button>Home & Living</button>
                <button>Beauty</button>
            </div>
            <div className="search-container">
                <input type="text" placeholder="Search for products, brands and more" className="search-bar" />
                <i className="fas fa-search search-icon"></i>
            </div>
            <div className="head">
                <i className="fas fa-shopping-cart"></i>
                <i className="fas fa-heart"></i>
                <i className="fas fa-user"></i>
            </div>
        </div>
    );
}

export default Header;