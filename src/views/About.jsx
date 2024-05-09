import React from 'react';
import './About.css'; // assuming you have a CSS file for styling

const About = () => {
    return (
        <div className="about-container">
            <h3>Historien om Nackademin</h3>
            <p>
                Nackademin, det ligger väl i Nacka? tänker du och säkert många med dig. Och du har rätt – historien om Nackademin börjar i Nacka, där två lärare från Nacka kommun bestämde sig för att starta vuxenutbildningar som skulle leda till jobb. Året var 1994 och man hade en idé om att driva utbildning med tät samverkan mellan näringsliv och skola. Och varför inte kombinera utbildning med Göteborgshumor, tänkte de, och namnet Nackademin kom till.
            </p>
            <p>
                Praktik har alltid varit en viktig komponent i Nackademins utbildningar där våra studenter spenderat en fjärdedel av sin studietid ute på ett företag. Detta har varit en vinnande kombination för både studenter och arbetsgivare – studenterna får med stor säkerhet jobb och företagen har möjlighet att anställa medarbetare med rätt och aktuell kompetens direkt från näringslivet.
            </p>
        </div>
    );
}

export default About;