import React from 'react';
import products from '../data/products'; // Import product data

function ProductList({ selectedItems, setSelectedItems }) {

    const toggleSelection = (product) => {
        setSelectedItems(prevItems => {
            const isSelected = prevItems.some(item => item.name === product.name);

            if (isSelected) {
                return prevItems.filter(item => item.name !== product.name);
            } else {
                return [...prevItems, product];
            }
        });
    };

    const sortedProducts = [...products].sort((a, b) => {
        return a.availability === 'available' && b.availability !== 'available' ? -1 : 
               a.availability !== 'available' && b.availability === 'available' ? 1 : 0;
    });

    return (
        <section>
            <h2>Items for Sale</h2>
            <ul id="product-list">
                {sortedProducts.map((product, index) => (
                    <li key={index} className={`plant-box ${product.availability}`}>
                    <input 
                        type="checkbox" 
                        onChange={() => toggleSelection(product)} 
                        checked={selectedItems.some(item => item.name === product.name)}
                        disabled={product.availability !== 'available'} // Disable checkbox for unavailable items
                    />
                    <h3>{product.name}</h3>
                    <p className={`availability ${product.availability}`}>{product.availability.toUpperCase()}</p>
                    <a href={product.fullImage} target="_blank" rel="noopener noreferrer">
                        <img src={product.image} alt={product.name} className="product-image thumbnail" />
                    </a>
                    <p>{product.description}</p>
                    <p>{product.size}</p>
                    <p>{product.price}</p>
                </li>
                ))}
            </ul>
        </section>
    );
}

export default ProductList;
