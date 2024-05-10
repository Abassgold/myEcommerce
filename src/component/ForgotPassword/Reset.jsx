import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios'
import { Link, useNavigate, useParams } from 'react-router-dom';
import * as Yup from 'yup';
import AlertComponent from '../Alert/AlertComponent';
import { searchContext } from '../../App';
import PasswordReset from './PasswordReset';
import Invalidlink from './Invalidlink';

const Reset = () => {
    const { id, token } = useParams()
    const context = useContext(searchContext)
    const { getToken, user } = context;
    // if (user) return <p>........</p>;
    const [isVisible, setIsVisible] = useState(false)
    const [isVisible1, setIsVisible1] = useState(false)

    const navigate = useNavigate()
    let URI = `http://localhost:5000/user/reset-password/${id}/${token}`;

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const { data } = await axios.get(URI);
                if (data?.success) {
                    setIsVisible(true);
                    return ;
                }
                setIsVisible1(true)
            } catch (error) {
                console.error('Error fetching user data:', error);
                setIsVisible1(true)

            }
        };
        fetchUserData();

    }, [URI, id, token])
    return (
        <div>
            {
                isVisible && <PasswordReset />
            }
            {
                isVisible1 && <Invalidlink />
            }
        </div>
    )
}

export default Reset