import React, { useState } from 'react';
import './styles.css';
import Header from './components/Header';
import ProductList from './components/ProductList';
import Order from './components/Order';
import Footer from './components/Footer';
import Info from './components/Info';

function App() {
    const [selectedItems, setSelectedItems] = useState([]);
    const [quantities, setQuantities] = useState({}); // Add quantities state

    return (
        <div>
            <Header />
            <Info />
            <ProductList
                selectedItems={selectedItems}
                setSelectedItems={setSelectedItems}
                quantities={quantities} // Pass quantities to ProductList
                setQuantities={setQuantities} // Pass setQuantities to ProductList
            />
            <Order
                selectedItems={selectedItems}
                quantities={quantities} // Pass quantities to Order
            />
            <Footer />
        </div>
    );
}

export default App;
