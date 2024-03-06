function Navbar() {
    return (
        <div>
            <nav className="navbar bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img src="https://edupoly.in/common/assets/edupoly-logo-light.png" alt="Logo" width="120" height="40" className="d-inline-block align-text-top" />
                    </a>
                    <button type="button" className="btn btn-primary btn-sm ">All Enquiries</button>
                </div>
            </nav>
        </div>
    )
}
export default Navbar;