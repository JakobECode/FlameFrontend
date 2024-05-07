import React from 'react';
import './Contact.css'; // assuming you have a CSS file for styling

const Contact = () => {
    return (
        <div className="contact-container">
            <h3>Kontakta oss</h3>
            <p>
                Nackademin ligger centralt beläget i K-märkta lokaler nära St Eriksplan och Karolinska-området.
            </p>
            <p>Tomtebodavägen 3A, 171 65, Solna</p>
            <p>
                Närmsta tunnelbana är St Eriksplan och du kan också åka pendeltåg till Stockholm Odenplan och ta buss 53 eller 72 mot 
                Karolinska institutet och gå av vid hållplats Karolinska institutet västra som är precis utanför oss.
            </p>
        </div>
    );
}

export default Contact;