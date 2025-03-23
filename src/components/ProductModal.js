import React from 'react';

function ProductModal({ product, isOpen, onClose, toggleSelection, quantities, setQuantity }) {
    if (!isOpen || !product) return null;

    return (
        <div>
            {/* Modal Overlay */}
            <div className="modal-overlay" onClick={onClose}></div>

            {/* Modal Content */}
            <div className="modal">
                <div className="modal-close" onClick={onClose}>
                    &times; {/* Close button */}
                </div>
                <h2>{product.name}</h2>
                <div style={{ display: 'flex' }}>
                    {/* Product Image */}
                    <img src={product.fullImage} alt={product.name} style={{ maxWidth: '300px', marginRight: '20px' }} />

                    {/* Product Details */}
                    <div>
                        <p>{product.description}</p>
                        <p>{product.size}</p>
                        <p>{product.price}</p>

                        {/* Quantity Input */}
                        <div>
                            <label htmlFor="quantity">Quantity:</label>
                            <input
                                type="number"
                                value={quantities[product.name] || 1} // Default to 1
                                onChange={(e) => {
                                    let value = parseInt(e.target.value, 10);
                                    if (value > product.maxQuantity) value = product.maxQuantity; // 👈 Prevent exceeding maxQuantity
                                    if (value < 1) value = 1; // 👈 Prevent selecting less than 1
                                    setQuantity(product, value);
                                }}
                                min="1"
                                max={product.maxQuantity} // 👈 Set max value in input
                            />
                        </div>

                        {/* Checkbox */}
                        <label>
                            <input
                                type="checkbox"
                                checked={quantities[product.name] > 0}
                                onChange={() => toggleSelection(product)}
                            />
                            Select this item
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductModal;
