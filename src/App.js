import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { QueryClientProvider } from '@tanstack/react-query';
import queryClient from '../src/services/queryClient'; // Import the configured QueryClient
// Import your components and pages
import ProductList from './pages/productList';
// Add other imports as needed

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/" element={<ProductList />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
