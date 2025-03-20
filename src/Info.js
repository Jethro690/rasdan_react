import React from 'react';
import HowItWorks from './HowItWorks';
import ContactDetails from './ContactDetails';

function Info() {
    return (
        <section>
            <ul id="info-list">
                <li>
                    <HowItWorks />
                </li>
                <li>
                    <ContactDetails />
                </li>
            </ul>

        </section>
    );
}

export default Info;