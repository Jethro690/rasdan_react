import React from 'react';

function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer style={{ textAlign: 'center', padding: '20px' }}>
            <p>Have a plant-tastic day 😊🌵</p>
            <p>
                <a 
                    href="#" 
                    onClick={(e) => {
                        e.preventDefault(); // Prevents jumping to top instantly
                        scrollToTop();
                    }} 
                    style={{ 
                        color: '#d4bf79', /* Gold color */
                        textDecoration: 'none',
                        fontWeight: 'bold',
                        cursor: 'pointer'
                    }}
                >
                    Return to Top ⬆️
                </a>
            </p>
        </footer>
    );
}

export default Footer;
