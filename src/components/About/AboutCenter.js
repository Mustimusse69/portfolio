import React from 'react';
import '../styles.css';

const About = (props) => {
    return (

<>
        <div className="container-fluid padding">

            <div className="row text-center">

                <div className="col-12 col-md-4">
                    <a href="#">
                        <img src="/images/om-mig.png" width="50%" alt="et foto" />
                    </a>
                    <h1 className="text-light padding">Om mig</h1>
                    <p className="text-light info">Jeg er en fyr på 19 som godt kan lide at bruge noget tid foran en skærm men
                også at gå ud og få en del motion, og være sammen med andre.<br />
                        Jeg har altid fået af vide jeg var god til at tegne og at jeg kunne bruge det i fremtiden, så
                jeg valgte at gå mere i dybden med at designe, men på en computer.<br />
                        Derfor går jeg nu på 3D college i Grenå.</p>
                </div>

                <div className="col-12 col-md-4">
                    <a href="#">
                        <img src="/images/fakta.png" width="50%" alt="et foto" />
                    </a>
                    <h1 className="text-light padding">Fakta</h1>
                    <p className="text-light info">Jeg er fra Syrien, flyttet til Danmark 2012.<br />

                        Jeg er en åben person som elsker at kaste sig i nye ting og lære noget af det, og jeg elsker at
                hjælpe.<br />

                        Jeg er social, men kan godt være lidt stille i starten.<br />

                        Jeg kan både dansk, engelsk, Arabisk og Kurdisk.<br /></p>
                </div>

                <div className="col-12 col-md-4">
                    <a href="#">
                        <img src="/images/fritid.png" width="50%" alt="et foto" />
                    </a>
                    <h1 className="text-light padding">Fritid</h1>
                    <p className="text-light info"> 2012 - 2014 billedkunst på Kulturhuset Pavillonen i Grenå.<br />
                        2014 - Juniorklubben Grenaa.<br />
                        2015 - Svømning.<br/>
                2015 - 2016 Fodbold.</p>
                </div>

            </div>

        </div>

        <div className="container-fluid padding">

            <div className="row text-center">

                <div className="col-12 col-md-4">
                    <a href="#">
                        <img src="/images/uddannelser.png" width="50%" alt="et foto" />
                    </a>
                    <h1 className="text-light padding">Uddannelser</h1>
                    <p className="text-light info">2012 - 2013 Gik i modtageklassen på Kattegatskolen i Grenå.<br/>
                        2014 - 2015 Startet i syvende. V på kattegatskolen.<br/>
                        2015 - 2016 Ottende. V på Kattegat.<br/>
                        2016 - 2018 Startet på Kongenshus efterskole i Karup.<br/>
                2018 - 2019 Grundforløb/medie/Viden Djurs.</p>
                </div>

                <div className="col-12 col-md-4">
                    <a href="#">
                        <img src="/images/Erhvervserfaring.png" width="50%" alt="et foto" />
                    </a>
                    <h1 className="text-light padding">Erhvervserfaring</h1>
                    <p className="text-light info"> 2015: Uddeling af aviser og menukort.<br/>
                        2018: Praktikant i Kvickly Grenå.<br/>
                2017: Medhjælper i Strandpizza i Grenå, forskellige funktioner. </p>
                </div>

                <div className="col-12 col-md-4">
                    <a href="#">
                        <img src="/images/kontakt.png" width="50%" alt="et foto" />
                    </a>
                    <h1 className="text-light padding">Kontakt</h1>
                    <p className="text-light info"> Navn: Mustafa Habash<br/>
                Mail: mous0115@outlook.com</p>
                </div>

            </div>

        </div>

</>

    
     );
}

export default About;