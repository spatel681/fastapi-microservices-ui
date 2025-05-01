import React, { useState } from 'react';
import UserForm from './components/UserForm';
import ProductForm from './components/ProductForm';
import OrderForm from './components/OrderForm';

function App() {

    const [refreshKey, setRefreshKey] = useState(0);

    const handleRefresh = () => setRefreshKey(prev => prev + 1);

  return (
      <div style={{ maxWidth: "600px", margin: "2rem auto" }}>
          <h1>FastAPI Microservices UI</h1>
          <UserForm onUserCreated={handleRefresh} />
          <hr />
          <ProductForm onProductCreated={handleRefresh} />
          <hr />
          <OrderForm refreshSignal={refreshKey} />
      </div>
  );
}

export default App;
