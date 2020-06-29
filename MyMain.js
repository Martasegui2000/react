import React from "react";

const MyMain = () => {
    return <article className="row">
        <div className="col-6">
            <h1>LOGIN</h1>
            <p>
                <label className="uname">
                    Usuario
                </label>
                <input id="username" name="username" type="text" placeholder="Tu usuario"/>
            </p>
            <p>
                <label className="youpasswd">
                    Contraseña
                </label>
                <input id="password" name="password" type="password" placeholder="Tu contraseña"/>
            </p>
            <p className="login button">
                <input type="submit" value="Login"/>
            </p>
        </div>
        <div className="col-6">
            <h1>REGISTRO</h1>
            <p>
                <label className="uname">Tu nombre</label>
                <input id="usernamesignup" name="usernamesignup" type="text" placeholder="Nombre"/>
            </p>
            <p>
                <label className="youmail">Tu email</label>
                <input id="emailsignup" name="emailsignup" type="email" placeholder="guay@mail.com"/>
            </p>
            <p>
                <label className="passwordsignup">Tu contraseña</label>
                <input id="passwordsignup" name="passwordsignup" type="password"/>
            </p>
            <p>
                <label className="youpasswd">Confirma tu contraseña</label>
                <input id="passwordsignup-confirm" name="passwordsignup-confirm" type="password"/>
            </p>
            <p className="signin button">
                <input type="submit" value="Registro"/>
            </p>
        </div>
    </article>
};


export default MyMain;
