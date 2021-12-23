import React from "react";

export function Footer(){
    return(
        <footer className="page-footer font-small blue mt-5 pt-4 navbarColor text-light">
            <div className="container-fluid text-center text-md-left">
                <div className="row mb-4">
                    <div className="col-12 col-md-4 mt-md-0 mt-3">
                        <h3 className="navbar-brand fw-bold logoColor ps-4">MoviesDB</h3>
                    </div>
                    <div className="col-12 col-md-2 mb-3">
                        <h5>THE BASICS</h5>
                    </div>
                    <div className="col-12 col-md-2 mb-3">
                        <h5>GET INVOLVED</h5>
                    </div>
                    <div className="col-12 col-md-2 mb-3">
                        <h5>COMMUNITY</h5>
                    </div>
                    <div className="col-12 col-md-2 mb-3">
                        <h5>LEGAL</h5>
                    </div>
                </div>
            </div>
                <div className="footer-copyright text-center py-3">© 2021 Copyright
            </div>    
        </footer>
    )
}