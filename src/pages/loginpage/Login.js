import React from 'react';
import AuthBgImg from '../../assets/auth-bg.jpg';
import Navbar from '../../components/layouts/navbar/Navbar';
import AuthForm from '../../components/forms/authForm/AuthForm';

const Login= () => {
    return (
        <React.Fragment>
            <Navbar darkText={true}/>
            <section className="signup-container">
                <div className='signup-img-container'>
                    <img src={AuthBgImg} alt="authentication-background" />
                </div>
                <div className="signup-content-container">
                    <div className="container">
                        <div className="content-wrapper">
                            <h2>Iniciar Sesion</h2>
                            <p>Ingrese su correo y contraseña.</p>

                            <AuthForm buttonName="Ingresar" />
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default Login;