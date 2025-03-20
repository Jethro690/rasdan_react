import React from 'react';

function Order({ selectedItems }) {
    return (
        <section className="order-box">
            <h2>Selected Items</h2>
            {selectedItems.length > 0 ? (
                <div className='info-boxlet'>
                    {selectedItems.map((item, index) => (
                        <li key={index}>{item.name} - {item.price}</li>
                    ))}
                </div>
            ) : (
                <div className='info-boxlet'>No items selected*</div>
            )}
            <ul>
                <li>
                    <a href={`https://wa.me/27643201946?text=${encodeURIComponent(selectedItems.map(item => item.name).join(', '))}`}
                        target="_blank" 
                        rel="noopener noreferrer">
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
