import React from 'react';
import './Contacto.css';

const Contacto = () => {
    return (
        <div className='containerContacto'>
            <h2>Contacto</h2>
            <p>¿Tienes alguna pregunta o necesitas asistencia? En TechArg estamos aquí para ayudarte.</p>
            
            <h3>Formas de Contacto</h3>
            <p>
            <strong>Teléfono:</strong> +54 11 1234 5678<br />
            <strong>Correo Electrónico:</strong> soporte@techarg.com.ar<br />
            <strong>Dirección:</strong> Avenida Libertador 1800, Buenos Aires, Argentina
            </p>
            
            <h3>Horarios de Atención</h3>
            <p>
            <strong>Lunes a Viernes:</strong> 9:00 AM - 6:00 PM<br />
            <strong>Sábados:</strong> 10:00 AM - 2:00 PM
            </p>
            
            <h3>Redes Sociales</h3>
            <p>
            Síguenos en nuestras redes sociales para estar al día con las últimas novedades y ofertas:
            </p>
            <p>
            <strong>Facebook:</strong> <a href="https://facebook.com/techarg" target="_blank" rel="noopener noreferrer">facebook.com/techarg</a><br />
            <strong>Instagram:</strong> <a href="https://instagram.com/techarg" target="_blank" rel="noopener noreferrer">instagram.com/techarg</a><br />
            <strong>Twitter:</strong> <a href="https://twitter.com/techarg" target="_blank" rel="noopener noreferrer">twitter.com/techarg</a>
            </p>
            
        </div>
    );
};

export default Contacto;
