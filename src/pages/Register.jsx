
import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from "react";
import { APIRequest } from '../components/APIRequest';

const BASE_URL = "http://127.0.0.1:4000/api/v1";
const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const { username, password } = formData;

  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;

  const handleOnChange = (e) => {
    e.preventDefault();
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };


  const handleOnSubmit = async (e) => {
    e.preventDefault();

    const signupData = { ...formData };
    console.log("Signup Data : ", signupData)
    const response = await APIRequest("POST", BASE_URL + "/register", signupData);
    console.log("Response : ", response);
    if(response.success) {
      alert(response.message)
    } 

    setFormData({
      username: "",
      password: "",
    });
  };

  return (
    <div className='min-h-screen flex items-center justify-center'>
        <form onSubmit={handleOnSubmit}>
            <div className="p-4 p-2 sm:p-2 md:p-10 lg:p-6">
            <div className="p-8 bg-sky-100 w-full shadow-[rgba(0,0,0,0.24)_0px_3px_8px]">
                <h2 className="text-2xl font-semibold text-center mb-6">Create Account</h2>
                <div className="space-y-3">
                    <div>
                        <p className="mt-2 text-[0.875rem] leading-[1.375rem] font-bold">
                        username <sup className="text-pink-200">*</sup>
                        </p>
                        <div className="relative">
                            <input
                                required
                                type="text"
                                name="username"
                                value={username}
                                onChange={handleOnChange}
                                placeholder="Enter username"
                                className="text-gray-700 outline-none box-shadow-none placeholder:text-slate-400 bg-white border-none p-2"
                            />
                        </div>
                    </div>

                <div className="relative">
                    <p className="mt-2 text-[0.875rem] leading-[1.375rem] font-bold">
                    Password <sup className="text-pink-200">*</sup>
                    </p>              
                    <input
                    required
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={password}
                    onChange={handleOnChange}
                    placeholder="Password"
                    className="form-style outline-none box-shadow-none p-2 text-gray-700 placeholder:text-slate-400"
                    />
                </div>

                <div>
                    <button type="button" class="text-white bg-blue-700 p-2 px-4 font-medium rounded-lg" 
                        onClick={handleOnSubmit}>
                            Register
                    </button>
                </div>
                <p className="text-sm text-center">
                    Already have an account? <Link to='/login' className="text-blue-600">Login</Link>
                </p>
                </div>
            </div>
            </div>
        </form>
    </div>
  )
}


export default Register;