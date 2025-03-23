import React, { useState } from 'react';

function Order({ selectedItems, quantities }) {
    const [customerLocation, setCustomerLocation] = useState('');
    const PUDO_COST = 109; // Set the PUDO shipping cost

    const handleLocationChange = (event) => {
        setCustomerLocation(event.target.value);
    };

    // Function to calculate total price of selected items with quantities
    const calculateTotalPrice = () => {
        const total = selectedItems.reduce((sum, item) => {
            const quantity = quantities[item.name] || 1;
            return sum + (parseFloat(item.price.replace('R', '')) * quantity);
        }, 0);

        return total + (customerLocation ? PUDO_COST : 0); // Add PUDO cost if location is entered
    };

    const formatWhatsAppMessage = () => {
        if (selectedItems.length === 0) {
            return "I'm interested in purchasing some plants. Please let me know what’s available.";
        }

        const itemList = selectedItems.map(item => {
            const quantity = quantities[item.name] || 1;
            return `${quantity} * ${item.name} - ${item.price}`;
        }).join('\n');

        const locationText = customerLocation ? `I'm based in ${customerLocation}, and I want the following:\n` : "I want the following:\n";
        const shippingText = customerLocation ? `\nShipping via PUDO: R${PUDO_COST}` : '';

        return `${locationText}${itemList}${shippingText}\nTotal Price: R${calculateTotalPrice()}`;
    };

    const whatsappLink = `https://wa.me/27643201946?text=${encodeURIComponent(formatWhatsAppMessage())}`;

    return (
        <section className="order-box">
            <h2>Basket</h2>
            {selectedItems.length > 0 ? (
                <div className='info-boxlet'>
                    <ul>
                        {selectedItems.map((item, index) => (
                            <li key={index}>
                                {quantities[item.name] || 1} * {item.name} - {item.price}
                            </li>
                        ))}
                    </ul>
                </div>
            ) : (
                <div className='info-boxlet'>No items selected*</div>
            )}

            {/* Total Price Display */}
            <p className="total-price">
                {customerLocation
                    ? `Total Price + Shipping: R${calculateTotalPrice()}`
                    : `Total Price: R${calculateTotalPrice()}`
                }
            </p>

            {/* Location Input */}
            <div className="input-container">
                <input
                    type="text"
                    id="location"
                    value={customerLocation}
                    onChange={handleLocationChange}
                    placeholder="Enter nearest PUDO Locker"
                />
            </div>

            {/* Order Buttons */}
            <ul className="button-container">
                <li>
                    <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                        Order via WhatsApp 📱
                    </a>
                </li>
            </ul>
        </section>
    );
}

export default Order;
