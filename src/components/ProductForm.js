import React, { useState, useEffect } from 'react';
import { productApi } from '../api';

function ProductForm({ onProductCreated }) {
    const [ products, setProducts ] = useState([]);
    const [ name, setName ] = useState("");
    const [ description, setDescription ] = useState("");
    const [price, setPrice] = useState("");

    useEffect(() => { fetchProducts(); }, []);

    const fetchProducts = async () => {
        const res = await productApi.get('/products');
        setProducts(res.data);
        if (onProductCreated) onProductCreated();
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await productApi.post('/products', { name, description, price: parseFloat(price) });
        alert("Product added successfully");
        setName(""); setDescription(""); setPrice("");
        fetchProducts();
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h3>Add Product</h3>
                <input placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
                <input placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
                <input placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} required />
                <button type="submit">Add Product</button>
            </form>

            <h4>Product List</h4>
            <ul>
                {products.map((p,i) => (
                    <li key={i}>{p.name} - ${p.price} <br /><small>{p.description}</small></li>
                ))}
            </ul>
        </div>
    );

}

export default ProductForm;