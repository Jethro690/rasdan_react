import React, { useState } from 'react';

function Order({ selectedItems, setSelectedItems, quantities, setQuantities }) {
    const [customerLocation, setCustomerLocation] = useState('');
    const PUDO_COST = 109; // Set the PUDO shipping cost

    const handleLocationChange = (event) => {
        setCustomerLocation(event.target.value);
    };

    const calculateTotalPrice = () => {
        const total = selectedItems.reduce((sum, item) => {
            const quantity = quantities[item.name] || 1;
            return sum + (parseFloat(item.price.replace('R', '')) * quantity);
        }, 0);

        return total + (customerLocation ? PUDO_COST : 0);
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

    // Clear the selection list and reset the location
    const clearBasket = () => {
        setSelectedItems([]);
        setQuantities({});
        setCustomerLocation('');
    };

    return (
        <section className="order-box">
            <h2>Basket</h2>
            {selectedItems.length > 0 ? (
                <div className='basket-boxlet'>
                    <ul>
                        {selectedItems.map((item, index) => (
                            <li key={index}>
                                {quantities[item.name] || 1} * {item.name} - {item.price}
                            </li>
                        ))}
                    </ul>
                </div>
            ) : (
                <div className='basket-boxlet'>No items selected*</div>
            )}

            {/* Total Price and Clear Basket Button */}
            <div className="total-and-clear">
                <p className="total-price">
                    {customerLocation ? "Total Price + Shipping: " : "Total Price: "} 
                    R{calculateTotalPrice()}
                </p>
                <button className="clear-basket" onClick={clearBasket}>🗑️</button>
            </div>

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
