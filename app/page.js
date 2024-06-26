"use client"

import Link from 'next/link';
import { useState } from 'react';
import {useRouter} from "next/navigation";

export default function Home() {
    const [showPassword, setShowPassword] = useState(false);
    const [values, setValues] = useState({
        email: "",
        password: "",
    });
    const [error, setError] = useState("");
    const router = useRouter();

    const handleChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };
    const resetMessage = () => {
        setError("");
    };


    const handleSubmit = async (e) => {
        e.preventDefault();

        const {email, password} = values;

        try {
            const response = await fetch("http://localhost:3007/api/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({email, password}),
            });

            if (!response.ok) {
                throw new Error("Invalid credentials");
            }

            router.replace("/dashboard"); // Redirect to the dashboard after successful login
            toast.success('Connexion réussie');

        } catch (error) {
            toast.error('Invalid credentials');
            setTimeout(resetMessage, 5000);
        }
    };

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };







    return (
    <div className="flex flex-col items-center justify-between min-h-screen p-24 bg-primary_color">
      <div className="w-4/12 h-[597.59px]">
        <header className="flex justify-around px-10 text-white  justify-centert-bold h-[50px]">
          <div className="flex logo">
              <svg width="14" height="28" viewBox="0 0 14 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.666016 0.666237H13.9973L0.666016 27.3288V0.666237Z" fill="white"/>
              </svg>

              <svg width="21" height="14" viewBox="0 0 21 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.666016 0.666237H20.663L13.9973 13.9975L0.666016 0.666237Z" fill="black" fill-opacity="0.15"/>
              </svg>

              <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.666016 0.666237H27.3286V27.3288L0.666016 0.666237Z" fill="white"/>
              </svg>



          </div>
          RED PRODUCT
        </header>


          <form onSubmit={handleSubmit}  className="content  h-[424.25px] border-2 border-white bg-white">
                  <h2 className="pt-10 text-center ">Connectez-vous en tant que Admin</h2>
                  <div className="input flex flex-col justify-around h-[150px] items-center ">
                      <input
                          value={values.email}
                          name="email"
                          onChange={handleChange}
                          type="text"
                          placeholder="Email"
                          className="text h-[45.33px]
                           w-[270px] border-b border-gray-400 outline-none focus:border-none"
                      />
                      <input  value={values.password}
                              name="password"
                              type="password"
                              onChange={handleChange}
                              placeholder="Password"
                              className="text h-[45.33px] w-[270px] border-b border-gray-400 outline-none focus:border-none"/>
                  </div>
                  <div className="checkbox mx-auto flex items-center justify-center justify-around w-[300px] pt-4 ">
                      <input type="checkbox" className="checkbox w-[20px] h-[20px] border-3 border-text-checkboxColor"/>
                      <p className="text-base text-xl font-roboto">Gardez-moi connecté</p>
                  </div>

                  <button type="submit" className="bg-buttonColor  font-roboto font-medium text-xl px-4 py-2 text-white rounded mt-10 w-[320px] mx-10">Se connecter</button>

                  <div className="flex flex-col p-4 mt-3 text-center bg-primary_color">
                      <Link href="/password" className="text-linkColor">Mot de passe oublié?</Link>
                      <Link href="/sign-in" className="text-white">Vous n avez pas de compte? <span className="text-linkColor">S inscrire</span></Link>
                  </div>

              </form>


       
        
      </div>
      
      
      

    </div>
  );
}


