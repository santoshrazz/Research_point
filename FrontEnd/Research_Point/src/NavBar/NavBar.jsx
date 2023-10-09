function Nav() {
    // FindStudent Function to find the student on database

    // Send to login button funtion

    // Logout Admin

    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">Research Online Point</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarColor02">
                        <ul className="navbar-nav ms-auto mr-4">
                            <li className="nav-item">
                                <a className="nav-link active fw-bolder mx-2" href="/">Home
                                    <span className="visually-hidden">(current)</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link fw-bolder mx-2" href="/Services">Services</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link fw-bolder mx-2" href="/pricing">New Jobs</a>
                            </li>
                        </ul>
                    </div>
                    <button className="btn btn-primary mx-4">Login</button>
                </div>
            </nav>
        </div>
    )
}

export default Nav