import React, { useState, useEffect } from 'react';
import { userApi, productApi, orderApi } from '../api';

function OrderForm( refreshSignal ) {
    const [users, setUsers] = useState([]);
    const [products, setProducts] = useState([]);
    const [selectedUser, setSelectedUser] = useState("");
    const [selectedProduct, setSelectedProduct] = useState("");

    const fetchDropdowns = async () => {
        const [userRes, productRes] = await Promise.all([
            userApi.get("/users"),
            productApi.get("/products")
        ]);
        setUsers(userRes.data);
        setProducts(productRes.data);
    };

    useEffect(() => {
        fetchDropdowns();
    }
    , [refreshSignal]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        await orderApi.post("/orders", { username: selectedUser, product_name: selectedProduct });
        alert("Order placed successfully!");
        setSelectedUser("");
        setSelectedProduct("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <h3>Place Order</h3>
            <select value={selectedUser} onChange={(e) => setSelectedUser(e.target.value)} required>
                <option value="">Select User</option>
                {users.map((u, i) => (<option key={i} value={u.username}>{u.username}</option>))}
            </select>
            <select value={selectedProduct} onChange={(e) => setSelectedProduct(e.target.value)} required>
                <option value="">Select Product</option>
                {products.map((p, i) => (<option key={i} value={p.name}>{p.name} - ${p.price}</option>))}
            </select>
            <button type="submit">Place Order</button>
        </form>
    );
}

export default OrderForm;