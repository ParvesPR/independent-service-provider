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
    <div id='services'>
      <span className='services-sub-title'>Services</span>
      <h1 className='w-50 mx-auto text-align-center'>Real Wedding Memories Captured</h1>
      <div className='services-items'>
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