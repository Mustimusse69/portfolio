import React from 'react';
import '../styles.css';

const Galleri = (props) => {
    return ( 
        <div className=" Galerri container-fluid padding">

        <div className="row text-center">

            <div className="col-12 col-md-4">
                <a href="#">
                <img src="/images/3d.png" width="50%" alt="et foto" />
                </a>
                <h1 className="text-light padding">Tidliger 3D projekter</h1>
            </div>

            <div className="col-12 col-md-4">
                <a href="#">
                <img src="/images/photoshop.png" width="50%" alt="et foto" />
                </a>
                <h1 className="text-light padding">Photoshop</h1>
            </div>

            <div className="col-12 col-md-4">
                <a href="#">
                <img src="/images/web.png" width="50%" alt="et foto" />
                </a>
                <h1 className="text-light padding">Web projekter</h1>
            </div>

        </div>

    </div>
     );
}
 
export default Galleri;