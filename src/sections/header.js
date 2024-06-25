function Header() {
    return (
        <header
            id="header"
            className="header d-flex items-center fixed top-0"
        >
            <div className="container mx-auto flex items-center justify-between">
                <a href="/" className="logo flex items-center">
                    <h1 className="text-xl font-bold">Wish Watch</h1>
                </a>

                <title>Button Redirect</title>
    <script src="bredirect.js" defer></script>
    <button id="redirectButton">Go to Books Page</button>

                <nav id="navbar" className="navbar">
                    <ul className="flex">
                        <li><a className="nav-link active" href="/home">Home</a></li>
                        <li><a className="nav-link" href="/books">Books</a></li>
                        <li><a className="nav-link" href="/movies">Movies</a></li>
                        <li><a className="nav-link" href="/suggestions">Suggestions</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;
