import React from 'react';
import '../styles.css';

const Home = (props) => {
    return (

        <>

            <div className=" Home container-fluid">

                <div className="row text-center padding">

                    <div className="col-12 img-fluid">
                        <a href="Home">
                            <img src="/images/pb.png" width="50%" alt="et foto" />
                        </a>
                    </div>

                    <div className="col-12 text-light">

                        <h1>HEJ.</h1>
                        <p className="text-info-home"> Jeg hedder Mustafa og jeg er 19 år gammel. </p>
                    </div>

                </div>

            </div>
            
            <hr class="hr-light"/>

        </>
    );
}

export default Home;