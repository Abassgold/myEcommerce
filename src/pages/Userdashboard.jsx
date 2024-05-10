import axios from 'axios';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Userdashboard = () => {
  let navigate = useNavigate()
  let URI = `http://localhost:5000/user/dashboard`
  const token = localStorage.userToken
  useEffect(() => {
    axios.get(URI, {
      headers: {
        "Authorization": "Bearer " + token,
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
    }).then((res) => {
      if (res?.data?.success) {
        console.log(res?.data?.user)
        return;
      }
      localStorage.clear(token);
      navigate('/signin')
    })
  }, [token])
  return (
    <div>
    </div>
  );
}

export default Userdashboard;
