import React from "react";


const MyFooter = () => {
    return <div className={"row"}>
        <div className={"col-2"}>
            <h5>Contáctanos via:</h5>
            <ul>
                <li>Twitter</li>
                <li>Facebook</li>
                <li>Instagram</li>
            </ul>
        </div>
        <div className={"col-2"}>
            <h5>Polítca legal:</h5>
            <a href="#" className="stretched-link">Información de interés y política de protección de datos. </a>
        </div>
        <div className={"col-2"}>
            <h5>Acerca de nosotros:</h5>
            <ul>
                <li>C/La Fuente, Valencia</li>
                <li>Teléfono: 971-111-111</li>
                <li>kokobop@gmail.com</li>
            </ul>
        </div>
    </div>
};

export default MyFooter;