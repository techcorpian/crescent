import React, { useState, useEffect } from 'react';
import AuthService from '../../../../services/auth.service'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

const Settings = () => {
    const currentUser = AuthService.getCurrentUser();
    // const [password, setPassword] = useState([])
    const [passwordData, setPassword] = useState({
        password: '',
        conpassword: '',
        username: currentUser.username
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPassword((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    console.log(currentUser);

    const apiUrl = import.meta.env.VITE_REACT_APP_API_URL;

    const validateUser = () => {
        const { password, conpassword } = passwordData;

        console.log(password, conpassword)
        if (!password) {
            toast.error('Please Enter The Password');
            return false;
        }

        if (password !== conpassword) {
            toast.error('Password Mismatch!');
            return false;
        }

        if (password.length < 10) {
            toast.error('Password Should be at least 10 characters');
            return false;
        }
        return true;
    };

    const handlePasswordUpdate = async () => {

        try {
            if (!validateUser()) return;
            console.log(currentUser.id)
            await axios.put(`${apiUrl}/users/updatepassword/${currentUser.id}`, passwordData);
            toast.success('Password Updated Successfully');
            setPassword({
                password: '',
                conpassword: ''
            })

        } catch (error) {
            console.error('Error saving Password:', error);
            toast.error('Error In Updating Password');

        }
    }

    return (
        <main className='h-screen '>
            <div className='text-3xl px-3 font-bold text-sky-700 mb-6'>Settings</div>
            <div className='flex gap-6 px-3'>
                <div className='w-1/6'>
                    <li className='list-none bg-sky-700 p-3 text-white rounded-lg'>Change Password</li>
                </div>
                <div className='flex-grow bg-white h-full p-4 shadow-lg rounded-lg'>
                    {/* <div>
                        <div>Old Password</div>
                        <input type="text" className='border p-1 px-2' value={password.passwordold} />
                    </div> */}
                    <div className='flex gap-6'>
                        <div>
                            <div>New Password</div>
                            <input type="text" name='password' onChange={handleChange} className='border p-1 px-2' value={passwordData.password} />
                        </div>
                        <div>
                            <div>Confirm New Password</div>
                            <input type="text" name='conpassword' onChange={handleChange} className='border p-1 px-2' value={passwordData.conpassword} />
                        </div>
                    </div>
                    <div><button className='bg-green-600 mt-6 text-white p-2 px-4 rounded-lg' onClick={handlePasswordUpdate}>Update Password</button></div>
                </div>

            </div>

            <ToastContainer />
        </main>
    )
}

export default Settings