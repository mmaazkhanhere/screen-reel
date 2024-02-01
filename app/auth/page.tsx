/*This is a user authentication page allowing the users to either log in or
register for a new account. The details of the user are managed using the React
hooks. Appropriate error messages are displayed to facilitate a seamless user 
experience */

"use client"

import axios from 'axios';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const LoginPage = () => {

    const router = useRouter()

    /*state variable for switching between login and register */
    const [variant, setVariant] = useState('login');

    /*State variables for user details */
    const [username, setUsername] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    /*Sate variables for user experiences */
    const [loading, setLoading] = useState(false);
    const [matchingPassword, setMatchingPassword] = useState(true)
    const [errorMessage, setErrorMessage] = useState('');


    const handleSwitchVariant = () => {
        setVariant((prevVariant) =>
            (prevVariant === 'login' ? 'register' : 'login'));
    }; /*The function that is used to switch between register and login */


    /* Function that checks if the password and confirm password matches
        and perform relative actions */
    const handleConfirmPassword =
        (event: React.ChangeEvent<HTMLInputElement>) => {

            const confirmPasswordValue = event.target.value; /*confirm 
            password value passed */

            setConfirmPassword(confirmPasswordValue); /*state variable
            is set with the confirm password value entered */

            if (password !== "" && confirmPasswordValue !== "") {
                /*Checks if password and confirm password are entered */

                setMatchingPassword(confirmPasswordValue === password);
                /*set the matching password state variable by comparing 
                the values of confirm password and password. If they matches, 
                the value of state variable matchingPassword is set to true or
                else false */
            } else {
                setMatchingPassword(false);
            }
        }

    /*Function that handles action performed when user submits the details */
    const handleSubmit = async (e: any) => {

        e.preventDefault();/*The default behavior of the form is prevented */

        if (variant === 'login') { /*Checks if the user is signing in. */

            try {

                setLoading(true) /*The loading state of the button is set to
                true preventing multiple clicks */

                if (username == '' || password == '') {
                    /*Checks if username of password are empty. If empty, return
                    appropriate error message */
                    setErrorMessage('Missing username or password')
                    setLoading(false) /*Set loading to false */
                } else {
                    /*If username and password are provided. then this code is
                    run */

                    const response =
                        await fetch(`/api/login?username=${username}&password=${password}`, {
                            method: 'GET'
                        })
                    /*Pass the username and password to the login api to
                    check if the user exists */

                    if (response.status == 200) {
                        /*If the response status is 200 (api was run successfully)
                        redirect the user to home page and set the loading state
                        to false */

                        const result = await response.json()
                        setLoading(false)
                        router.push('/')
                    }
                    else if (response.status == 401) {
                        /*If the response status is 401 (details are incorrect),
                        display error message */
                        setErrorMessage('Incorrect password or username')
                        setLoading(false)
                    }
                }
            } catch (error) {
                /*console log any error that occurs while logging in */
                console.log("Error while login in:", error)
                setLoading(false)
            }
        }
        else {
            /*If user is registering themselves, the below code is run */
            try {

                setLoading(true)/*loading state is set true to prevent multiple
                clicks */

                if (name == '' || username == '' || password == '' || email == '') {
                    /*Checks if any detail is missing and if so return error
                    message */
                    setErrorMessage('Missing information')
                    setLoading(false)
                }
                else {
                    /*If all details are provided, the below code is run */

                    if (matchingPassword) {
                        /*Checks if the password and confirm password matches.
                        If they matches,  add the user detail to the database*/

                        const response = await axios.post('/api/register', {
                            name: name,
                            username: username,
                            email: email,
                            password: password
                        })

                        if (response.status === 200) {
                            /*If response status is set to 200, redirect the
                            user to home page */
                            router.push('/')
                        }
                    }
                    else {
                        /*If confirm password and password doesn't match, 
                        display error message */
                        setErrorMessage('Password do not match');
                        setLoading(false)
                    }
                }
            } catch (error) {
                console.error('ERROR WHILE PASSING USER DETAIL: ', error);

                if (error.response?.status === 422) {
                    /*If error status is 422, display error message that
                    user already exists and redirect them to login page
                    (by setting the variant to login) */

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
            className="flex items-center justify-center 
        max-w-[1600px] mx-auto"
        >
            <div className='relative w-screen'>
                <video
                    src="/images/auth_background.mp4"
                    loop
                    autoPlay
                    muted
                    className='object-cover h-screen w-screen'
                />
            </div>
            <div
                className="absolute flex flex-col items-start justify-center 
                border border-black rounded-xl px-8 py-4 transition 
                duration-300 bg-white/70"
            >
                {/*Logo */}
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

                {/*Form  */}
                <form
                    onSubmit={handleSubmit}
                    className="flex flex-col items-center mt-4 w-full">
                    {/*Name */}
                    {/*Only required when user is registering */}
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

                    {/*Username */}
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

                    {/*Email */}
                    {/*Required only when registering */}
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

                    {/*Password */}
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

                    {/*Register */}
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

                    {/*Error message */}
                    {
                        errorMessage !== '' && (
                            <p className="text-red-500">{errorMessage}</p>
                        )
                    }

                    {/*Login/Register Button */}
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

                {/*Switching to Login/Register*/}
                <p className="text-sm  text-gray-400 mt-5">
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
