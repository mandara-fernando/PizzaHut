import React from 'react'

function Navbar() {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="/">Home</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link active" href="#">Link</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link active" href="/login">Login</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link active" href="/signup">Sign up</a>
                        </li>
                        
                        
                    </ul>
                    
                    
                    </div>
                </div>
                </nav>
        </div>
    )
}

export default Navbar;
