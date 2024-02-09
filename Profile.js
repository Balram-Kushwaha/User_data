import React from 'react'
import { useState,useEffect } from 'react';

const Profile = () => {
  
    const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://randomuser.me/api/?page=1&results=1&seed=abc');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const jsonData = await response.json();
        setData(jsonData);
     
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!data) return <div>No data available</div>
 
  console.log(data);

  return (
    <div className=' flex items-center justify-center h- w-auto bg-blue-400 shadow-xl'>
      <div className='p-6 '>

      <div className='flex p-4 px-6'>
      <div className='image mr-6'>

    <img className='rounded-full' src={data.results[0].picture.large} alt='profile-picture'/>

 </div>
    <div className='mt-2 ml-6'>
   <h1 className='mb-2 text-xl font-bold'>{data.results[0].name.first} {data.results[0].name.last}</h1>
   <p className='mb-2 text-xl font-semibold'>{data.results[0].gender} </p>
   <p className='text-sm mb-2 font-medium'>{data.results[0].phone} </p>
   </div>
      </div>
        
      </div>
    </div>
  )
}

export default Profile










