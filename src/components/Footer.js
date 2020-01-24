import React from 'react';
import './styles.css';

const Footer = (props) => {
    return ( 
        <footer class="padding">

        <div class="container-fluid">

            <div class="row text-center">

                <div class="col-12">

                    <ul class="navbar-nav ml-auto">

                        <li class="nav-item active">
                            <a class="nav.link text-light links-footer" href="Home">Home</a>
                        </li>

                        <li class="nav-item">
                            <a class="nav.link text-light links-footer" href="Galleri">Galleri</a>
                        </li>

                        <li class="nav-item">
                            <a class="nav.link text-light links-footer" href="About">Om mig</a>
                        </li>

                    </ul>

                </div>

            </div>

        </div>

    </footer>
     );
}
 
export default Footer;