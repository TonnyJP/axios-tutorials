import { useEffect } from 'react';
import authFetch from '../axios/custom';

const url = 'https://course-api.com/react-store-products';

const Interceptors = () => {
  const fetchData = async () => {
    console.log('axios interceptors');
    try {
      const resp = await authFetch('/react-store-products');
      //console.log("respond send")
    } catch (error) {
      
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <h2 className='text-center'>interceptors</h2>;
};
export default Interceptors;
