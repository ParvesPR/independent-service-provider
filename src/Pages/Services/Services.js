import React, { useEffect, useState } from 'react';
import Service from '../../images/Service/Service';
import './Services.css';

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch('services.json')
      .then(res => res.json())
      .then(data => setServices(data))
  }, []);
  return (
    <div id='services' >
      <h1 className='w-25 mx-auto text-center d-block text-primary mt-3'>Services</h1>
      <h2 className='w-50 mx-auto text-center mb-sm-3'>Real Wedding Memories Captured</h2>
      <div  className='services-container'>
        {
          services.map(service => <Service
            key={service.id}
            service={service}
          ></Service>)
        }
      </div>
    </div>
  );
};

export default Services;