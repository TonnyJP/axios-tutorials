import React from 'react';
import axios from 'axios';
// limit, if 429 wait for 15 min and try again
const url = 'https://course-api.com/react-store-products';

const FirstRequest = () => {
  const [ data, setData] = React.useState([])

  const fetchData = async() => {
    try {
      const response = await axios(url);
      if(response.status === 200 ){
        setData(response.data)
      }
    } catch (error) {
      console.log(error.message)
    }
  }
  console.log(data)

  React.useEffect(() => {
    console.log('first axios request');
    fetchData()
  }, []);

  return <h2 className='text-center'>first request</h2>;
};
export default FirstRequest;
