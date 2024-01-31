"use client"

import axios from 'axios';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const LoginPage = () => {

    const router = useRouter()

    const [username, setUsername] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [variant, setVariant] = useState('login');
    const [loading, setLoading] = useState(false);
    const [matchingPassword, setMatchingPassword] = useState(true)
    const [errorMessage, setErrorMessage] = useState('');

    const handleSwitchVariant = () => {
        setVariant((prevVariant) =>
            (prevVariant === 'login' ? 'register' : 'login'));
    };


    const handleConfirmPassword =
        (event: React.ChangeEvent<HTMLInputElement>) => {
            const confirmPasswordValue = event.target.value;

            setConfirmPassword(confirmPasswordValue);

            if (password !== "" && confirmPasswordValue !== "") {
                setMatchingPassword(confirmPasswordValue === password);
            } else {
                setMatchingPassword(false);
            }
        }

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        if (variant === 'login') {

            try {
                setLoading(true)
                if (username == '' || password == '') {
                    setErrorMessage('Missing username or password')
                    setLoading(false)
                } else {
                    const response =
                        await fetch(`/api/login?username=${username}&password=${password}`, {
                            method: 'GET'
                        })
                    if (response.status == 200) {
                        const result = await response.json()
                        setLoading(false)
                        router.push('/')
                    }
                    else if (response.status == 401) {
                        setErrorMessage('Incorrect password or username')
                        setLoading(false)
                    }
                }
            } catch (error) {
                console.log("Error while login in:", error)
                setLoading(false)
            }
        }
        else {
            try {
                setLoading(true)
                if (name == '' || username == '' || password == '' || email == '') {
                    setErrorMessage('Missing information')
                    setLoading(false)
                }
                else {
                    if (matchingPassword) {
                        const response = await axios.post('/api/register', {
                            name: name,
                            username: username,
                            email: email,
                            password: password
                        })

                        if (response.status === 200) {
                            router.push('/')
                        }
                    }
                    else {
                        setErrorMessage('Password do not match');
                        setLoading(false)
                    }
                }
            } catch (error) {
                console.error('ERROR WHILE PASSING USER DETAIL: ', error);
                if (error.response?.status === 422) {
                    setErrorMessage('User already exists');
                    setLoading(false);
                    setVariant('login');
                } else {
                    setErrorMessage('An error occurred during registration');
                    setLoading(false);
                }
            }
        };
    }


    return (
        <section
            className="flex items-center justify-center w-screen h-screen 
        max-w-[1600px] mx-auto"
        >
            <div
                className="flex flex-col items-start justify-center border 
            border-black rounded-xl px-8 py-4 transition duration-300">
                <div className="flex items-center">
                    <Image
                        src="/logo.png"
                        alt="Logo"
                        width={100}
                        height={100}
                        className="self-center"
                    />
                    <span
                        className="uppercase text-3xl font-bold -ml-3">
                        ScreenReel
                    </span>
                </div>

                <form
                    onSubmit={handleSubmit}
                    className="flex flex-col items-center mt-4 w-full">
                    {
                        variant === 'register' && (
                            <label className="flex flex-col w-full mb-2">
                                Name:
                                <input
                                    type="text"
                                    value={name}
                                    className="border border-gray-300 px-2 py-1"
                                    placeholder="Jan Doe"
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                />
                            </label>
                        )
                    }

                    <label className="flex flex-col w-full mb-2">
                        Username:
                        <input
                            type="text"
                            value={username}
                            className="border border-gray-300 px-2 py-1"
                            placeholder="jandoe"
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </label>

                    {
                        variant === 'register' && (
                            <label className="flex flex-col w-full mb-2">
                                Email:
                                <input
                                    type="email"
                                    value={email}
                                    className="border border-gray-300 px-2 py-1"
                                    placeholder="jandoe@mail.com"
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </label>
                        )
                    }


                    <label className="flex flex-col w-full mb-2">
                        Password:
                        <input
                            type="password"
                            value={password}
                            className="border border-gray-300 px-2 py-1"
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </label>

                    {
                        variant === 'register' && (
                            <label className="flex flex-col w-full mb-2">
                                Confirm Password:
                                <input
                                    type="password"
                                    value={confirmPassword}
                                    className="border border-gray-300 px-2 py-1"
                                    onChange={handleConfirmPassword}
                                    required
                                />
                            </label>
                        )
                    }

                    {
                        errorMessage !== '' && (
                            <p className="text-red-500">{errorMessage}</p>
                        )
                    }

                    <button
                        type="submit"
                        disabled={loading}
                        onClick={handleSubmit}
                        className="bg-red-500 text-white px-8 py-2 mt-4 
                            rounded-xl"
                    >
                        {variant === 'login' ? 'Login' : 'Register'}
                    </button>
                </form>

                <p className="mt-2 text-sm  text-gray-400 mt-5">
                    {
                        variant === 'login' ? "Don't have an account?"
                            : 'Already have an account?'
                    }
                    <button
                        type="button"
                        onClick={handleSwitchVariant}
                        className="underline text-red-500 focus:outline-none 
                        ml-2"
                    >
                        {variant === 'login' ? 'Register' : 'Login'}
                    </button>
                </p>
            </div>
        </section>
    );
};

export default LoginPage
