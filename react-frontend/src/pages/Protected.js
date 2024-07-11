import React, { useEffect, useState } from 'react';
import { getProtectedData } from '../api';

const Protected = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await getProtectedData();
        setData(data);
      } catch (error) {
        console.error('Error fetching protected data', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {data ? <div>{data}</div> : <div>Loading...</div>}
    </div>
  );
};

export default Protected;
