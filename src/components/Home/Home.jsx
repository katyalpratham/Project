import React from 'react'
export default function Home() {
    return (

        <div>

            <h1 style={{ fontSize: '3rem' ,marginLeft:'18rem'}}>First job with Zidio</h1>
            <h1 style={{ fontSize: '2rem' ,marginLeft:'33rem'}}>Secure your job with us . . .</h1>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '300px', width: '350px', borderRadius: '10px', marginTop: '4rem', marginBottom: '14rem', marginLeft: '30rem', backgroundColor: '#fff6fe' }}>

                <form className="p-6 flex flex-col justify-center">

                    <div className="flex flex-col">
                        <label for="name" className="hidden">
                            Phone no. or Email
                        </label>
                        <input
                            type="name"
                            name="name"
                            id="name"
                            placeholder="Phone no. or Email "
                            className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
                        />
                    </div>
                    <div className="flex flex-col mt-2">
                        <label for="tel" className="hidden">
                            Password
                        </label>
                        <input
                            type="tel"
                            name="tel"
                            id="tel"
                            placeholder="Enter password"
                            className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
                        />
                        <br />
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <button
                            type="submit"
                            className="md:w-32 bg-orange-700 hover:bg-blue-dark text-white font-bold py-3 px-6 rounded-lg mt-3 hover:bg-orange-600 transition ease-in-out duration-300"
                        >
                            Sign in
                        </button>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <button
                            type="submit"
                            className="md:w-32 bg-orange-700 hover:bg-blue-dark text-white font-bold py-3 px-6 rounded-lg mt-3 hover:bg-orange-600 transition ease-in-out duration-300"
                        >
                            Sign out
                        </button></div>
                </form>
            </div>


        </div>
    )
}