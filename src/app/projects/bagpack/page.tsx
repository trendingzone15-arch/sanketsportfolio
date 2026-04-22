import { MoveLeft } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

function page() {
  return (
    <div className="w-full px-5 sm:px-10 md:px-20 lg:px-40 xl:px-80 mt-20 flex flex-col">

        <a href='/projects' className='pt-5 pb-2 flex flex-row gap-2'><MoveLeft/> Back to Projects</a>
        <h1 className="text-4xl font-bold mb-6 text-white">Bagpack Project Overview</h1>
        <p className="text-lg text-gray-300 mb-4">
        Welcome to Bagpack Trips, your ultimate travel companion designed to make your trip planning effortless and enjoyable. Whether you are a solo traveler, a couple, or a family, Bagpack Trips has everything you need to create unforgettable travel experiences.
        </p>

        <img src="/bagpacktrips2.png" alt="Bagpack Trips" className="w-full h-auto rounded-lg mb-6"/>

        <p className="text-lg text-gray-300 mb-4">
        Bagpack Trips is a full-stack web application built with Next.js, Express.js, Tailwind CSS & MongoDb , leveraging the power of MongoDB for data storage. The app offers a seamless user experience, allowing users to plan, customize, and book their trips with ease. From discovering popular destinations to managing itineraries, Bagpack Trips is your go-to platform for all things travel.
        </p>
        <h2 className="text-2xl font-semibold mb-4 text-white">Key Features :</h2>
        <ul className="list-disc list-inside text-lg text-gray-300 mb-4">
            <li> <span className='font-semibold'> User Authentication :</span>  Secure sign-up and login functionality using google to keep your travel plans safe.</li>
            <li><span className='font-semibold'> Trip Planning :</span> Built in, customize, and manage your trips with ease.</li>
            <li> <span className='font-semibold'> Payment Methods :</span> Implemented <span className='text-red-500'>Razorpay Payment gateway</span> using demo keys.</li>
            <li> <span className='font-semibold'>Booking Integration : </span> Seamlessly book trips, hotels, and activities directly through the app.</li>
            <li> <span className='font-semibold'> Dashboard Management :</span> User can manage their trips using user dashboard</li>
         
        </ul>
        <h2 className="text-2xl font-semibold mb-4 text-white">Technologies Used :</h2>
        <ul className="list-disc list-inside text-lg text-gray-300 mb-4">
            <li>Next.js : For building a responsive and dynamic user interface.</li>
            <li>Tailwind CSS : To create a sleek and modern design.</li>
            <li>MongoDB: For efficient and scalable data storage.</li>
            <li>Node.js & Express: To handle backend operations and API integrations.</li>
           
        </ul>
        <h2 className="text-2xl font-semibold mb-4 text-white">Get Started:</h2>
        <p className="text-lg text-gray-300 mb-4">
        Check out my this featured project. Visit the <Link href="https://bagpacktrips.vercel.app/" target='_blank' className="text-blue-400 underline">Bagpack Trips</Link> website .
        </p>

    </div>
  )
}

export default page