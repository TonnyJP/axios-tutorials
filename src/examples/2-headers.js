import { useState } from 'react';
import axios from 'axios';

const url = 'https://icanhazdadjoke.com/';
// Accept : 'application/json'

const Headers = () => {
  const [joke, setJoke] = useState('random dad joke');

  const fetchDadJoke = async () => {
    console.log('fetch dad joke');
    try {
      const response= await axios.get(url,{
        headers: {
          Accept: 'application/json'
        }
      });
    if(response.status === 200){
      setJoke(response.data.joke)
    }
    } catch (error) {
      
    }
  };

  return (
    <section className='section text-center'>
      <button className='btn' onClick={fetchDadJoke}>
        random joke
      </button>
      <p className='dad-joke'>{joke}</p>
    </section>
  );
};
export default Headers;
