import React, { useState } from 'react';

function Order({ selectedItems }) {
    const [customerLocation, setCustomerLocation] = useState('');

    const handleLocationChange = (event) => {
        setCustomerLocation(event.target.value);
    };

    const formatWhatsAppMessage = () => {
        if (selectedItems.length === 0) {
            return "I'm interested in purchasing some plants. Please let me know what’s available.";
        }

        const itemList = selectedItems.map(item => `${item.name} - ${item.price}`).join('\n');
        const locationText = customerLocation ? `I'm based in ${customerLocation}, and I want the following:\n` : "I want the following:\n";
        
        return `${locationText}${itemList}`;
    };

    const whatsappLink = `https://wa.me/27643201946?text=${encodeURIComponent(formatWhatsAppMessage())}`;

    return (
        <section className="order-box">
            <h2>Selected Items</h2>
            {selectedItems.length > 0 ? (
                <div className='info-boxlet'>
                    <ul>
                        {selectedItems.map((item, index) => (
                            <li key={index}>{item.name} - {item.price}</li>
                        ))}
                    </ul>
                </div>
            ) : (
                <div className='info-boxlet'>No items selected*</div>
            )}

            {/* Centered Input Section */}
            <li>
            <div className="input-container">
                <input
                    type="text"
                    id="location"
                    value={customerLocation}
                    onChange={handleLocationChange}
                    placeholder="Enter nearest PUDO Locker"
                />
            </div>
            </li>

            <ul className="button-container">
                <li>
                    <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                        Order via WhatsApp 📱
                    </a>
                </li>
                {/* WIP: Fix instagram message problem                
                <li>
                    <a href="https://www.instagram.com/rasdan_69" target="_blank" rel="noopener noreferrer">
                        Order via Instagram 🌐
                    </a>
                </li> */}
            </ul>
        </section>
    );
}

export default Order;
