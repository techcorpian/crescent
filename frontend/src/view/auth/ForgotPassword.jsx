import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';
import bcrypt from "bcryptjs";
import axios from 'axios';

const Settings = () => {
    const [hashedPassword, setHashedPassword] = useState('')
    const [passwordData, setPassword] = useState({
        email:'',
        oldpassword: '',
        password: '',
        conpassword: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPassword((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const apiUrl = import.meta.env.VITE_REACT_APP_API_URL;

    useEffect(() => {
        async function fetchEmail() {
            try {
                const response = await axios.get(`${apiUrl}/users/getpassword/${passwordData.email}`);
                setHashedPassword(response.data);
            } catch (error) {
                console.error('Error fetching email:', error);
            }
        }

        fetchEmail();
    }, [apiUrl,passwordData.email]);

    const validateUser = () => {
        const { email, oldpassword, password, conpassword } = passwordData;

        // console.log(hashedPassword);

        const hashPassword = hashedPassword[0].password;

        const match = bcrypt.compareSync(oldpassword, hashPassword);
        console.log(match);

        console.log(password, conpassword)
        
        if (!email) {
            toast.error('Please Enter Your Email ID');
            return false;
        }

        if (!oldpassword) {
            toast.error('Please Enter Your Old Password');
            return false;
        }

        if (!match) {
            toast.error('Old Password Incorrect');
            return false;
        }

        if (!password) {
            toast.error('Please Enter The New Password');
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
            // console.log(currentUser.id)
            await axios.put(`${apiUrl}/users/updatepassword/${hashedPassword[0].id}`, passwordData);
            toast.success('Password Updated Successfully');
            setPassword({
                email:'',
                oldpassword: '',
                password: '',
                conpassword: ''
            })

        } catch (error) {
            console.error('Error saving Password:', error);
            toast.error('Error In Updating Password');

        }
    }

    return (
        <div className='h-screen flex flex-col items-center justify-center'>
            <div className='text-3xl px-3 font-bold text-sky-700 mb-6'>Forgot Password?</div>
            <div className='px-3'>
                <div className='flex-grow bg-white w-[30rem] h-full p-4 shadow-lg rounded-lg'>
                    {/* <div>
                        <div>Old Password</div>
                        <input type="text" className='border p-1 px-2' value={password.passwordold} />
                    </div> */}
                    <div className='flex flex-col gap-4'>
                        <div>
                            <div>Confirm Your Email ID</div>
                            <input type="text" name='email' onChange={handleChange} className='border p-1 px-2 w-full' value={passwordData.email} />
                        </div>
                        <div>
                            <div>Old Password</div>
                            <input type="text" name='oldpassword' onChange={handleChange} className='border p-1 px-2 w-full' value={passwordData.oldpassword} />
                        </div>
                        <div>
                            <div>New Password</div>
                            <input type="text" name='password' onChange={handleChange} className='border p-1 px-2 w-full' value={passwordData.password} />
                        </div>
                        <div>
                            <div>Confirm New Password</div>
                            <input type="text" name='conpassword' onChange={handleChange} className='border p-1 px-2 w-full' value={passwordData.conpassword} />
                        </div>
                    </div>
                    <div className='flex items-center justify-between'>
                    <Link to='/portal/login' className='bg-sky-700 mt-6 text-white p-2 px-4 rounded-lg'>Go to Login</Link>
                        <button className='bg-green-600 mt-6 text-white p-2 px-4 rounded-lg' onClick={handlePasswordUpdate}>Change Password</button>

                    </div>
                </div>

            </div>

            <ToastContainer />
        </div>
    )
}

export default Settings