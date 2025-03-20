import React from 'react';

function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer style={{ textAlign: 'center', padding: '20px' }}>
            <p>Have a plant-tastic day 😊🌵</p>
            <p>
                <button 
                    onClick={scrollToTop}
                    style={{ 
                        background: 'none',
                        border: 'none',
                        color: '#d4bf79', /* Gold color */
                        textDecoration: 'underline',
                        fontWeight: 'bold',
                        cursor: 'pointer',
                        fontSize: 'inherit',
                        padding: 0
                    }}
                >
                    Return to Top ⬆️
                </button>
            </p>
        </footer>
    );
}

export default Footer;
