import { PRODUCTS } from '../services/endPoint';
import { useQuery } from '@tanstack/react-query';
import request from '../services/apiService';

// Fetch products query
export const useFetchProducts = () => {
  return useQuery({
    queryKey: ['products'],
    queryFn: () => request(PRODUCTS),
  });
};

// Fetch single product query
export const useFetchProduct = (productId) => {
  return useQuery({
    queryKey: ['product', productId],
    queryFn: () => request(`${PRODUCTS}/${productId}`),
  });
};
