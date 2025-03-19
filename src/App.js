import React from 'react';
import './styles.css';
import Header from './Header';
import ProductList from './ProductList';
import Footer from './Footer';
import Info from './Info';

function App() {
    return (
        <div>
            <Header />
            <Info />
            <ProductList />
            <Footer />
        </div>
    );
}

export default App;
