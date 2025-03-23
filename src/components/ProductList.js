import React, { useState } from 'react';
import products from '../data/products';
import ProductModal from './ProductModal';

function ProductList({ selectedItems, setSelectedItems, quantities, setQuantities }) {
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = (product) => {
        if (product.availability !== 'available') return; // 🚫 Prevent opening for unavailable items
        setSelectedProduct(product);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setSelectedProduct(null);
        setIsModalOpen(false);
    };

    const toggleSelection = (product) => {
        setSelectedItems(prevItems => {
            const isSelected = prevItems.some(item => item.name === product.name);
    
            if (isSelected) {
                // If unchecked, remove from selected items and delete from quantities
                setQuantities(prev => {
                    const updatedQuantities = { ...prev };
                    delete updatedQuantities[product.name];
                    return updatedQuantities;
                });
                return prevItems.filter(item => item.name !== product.name);
            } else {
                // If checked, add to selected items and set quantity to maxQuantity (or 1 if maxQuantity is missing)
                const defaultQuantity = Math.min(1, product.maxQuantity || 1); // 👈 Ensure quantity is within limit
                setQuantities(prev => ({ ...prev, [product.name]: defaultQuantity }));
                return [...prevItems, product];
            }
        });
    };    

    const updateQuantity = (product, quantity) => {
        if (quantity < 1) return; // Prevent selecting below 1
        if (quantity > product.maxQuantity) quantity = product.maxQuantity; // 👈 Ensure it doesn't exceed the max
    
        setQuantities(prev => ({ ...prev, [product.name]: quantity }));
    };    

    const sortedProducts = [...products]
        .filter(product => product.visible) // Hide invisible items
        .sort((a, b) => (a.availability === 'available' && b.availability !== 'available' ? -1 : 1));

    return (
        <section>
            <h2>Items for Sale</h2>
            <ul id="product-list">
                {sortedProducts.map((product, index) => (
                    <li 
                    key={index} 
                    className={`plant-box ${product.availability}`} 
                    onClick={() => openModal(product)}
                    style={{ cursor: product.availability === 'available' ? 'pointer' : 'not-allowed', opacity: product.availability === 'available' ? 1 : 0.6 }}
                >
                
                        {/* Urgency Banner */}
                        {product.urgencyLevel === 1 && <div className="urgency-banner">1 Left!! 🔥🔥</div>}
                        {product.urgencyLevel === 2 && <div className="urgency-banner">2 Left!! 🔥</div>}

                        {/* Checkbox */}
                        <input
                            type="checkbox"
                            onChange={(e) => {
                                e.stopPropagation(); // Prevent modal opening
                                toggleSelection(product);
                            }}
                            checked={selectedItems.some(item => item.name === product.name)}
                            disabled={product.availability !== 'available'}
                        />

                        {/* Product Info */}
                        <h3>{product.name}</h3>
                        <p className={`availability ${product.availability}`}>{product.availability.toUpperCase()}</p>
                        <img
                            src={product.image}
                            alt={product.name}
                            className="product-image thumbnail"
                            onClick={() => openModal(product)} // Clicking the image opens the modal
                        />
                        <p>{product.description}</p>
                        <p>{product.size}</p>
                        <p>{product.price}</p>
                    </li>
                ))}
            </ul>

            {/* Modal Component */}
            {isModalOpen && (
                <ProductModal
                    product={selectedProduct}
                    isOpen={isModalOpen}
                    onClose={closeModal}
                    toggleSelection={toggleSelection}
                    selectedItems={selectedItems}
                    setQuantity={updateQuantity}
                    quantities={quantities}
                />
            )}
        </section>
    );
}

export default ProductList;
