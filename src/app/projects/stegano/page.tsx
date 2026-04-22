import { MoveLeft } from 'lucide-react';
import React from 'react';

function page(){
    return(
        <div className="w-full px-5 sm:px-10 md:px-20 lg:px-40 xl:px-80 mt-20 flex flex-col">

        <a href='/projects' className='pt-5 pb-2 flex flex-row gap-2'><MoveLeft/> Back to Projects</a>
        <h1 className="text-4xl font-bold mb-6 text-white">Stegano Project Overview</h1>
        <p className="text-lg text-gray-300 mb-4">
Stegano is a cutting-edge steganography web application that enables users to hide secret messages within images using advanced LSB (Least Significant Bit) techniques. Built with modern web technologies, it provides a secure, client-side solution for digital steganography with an intuitive drag-and-drop interface and support for multiple file processing.        </p>
        <img src="/stegno2.png" alt="Stegano App" className="w-full h-auto rounded-lg mb-6"/>
       
        <h2 className="text-2xl font-semibold mb-4 text-white">Key Features :</h2>
        <ul className="list-disc list-inside text-lg text-gray-300 mb-4">
            <li> <span className='font-semibold'> LSB Steganography :</span>  Advanced Least Significant Bit technique for invisible message embedding.</li>
            <li><span className='font-semibold'> Drag & Drop Interface :</span> Intuitive file upload with support for multiple image formats.</li>
            <li> <span className='font-semibold'> Multiple File Support :</span> Process and encode messages in multiple images simultaneously.</li>
            <li> <span className='font-semibold'> Client-Side Processing :</span> All operations happen locally in the browser for maximum security.</li>

            <li><span className='font-semibold'> Batch Processing :</span> Efficient handling of multiple images for productivity.</li>
            <li> <span className='font-semibold'> Cross-Platform Compatibility :</span> Responsive design that works seamlessly across all devices.</li>
            <li> <span className='font-semibold'> No Data Upload :</span> Complete privacy with no server-side storage of sensitive content.</li>
        </ul>
        <h2 className="text-2xl font-semibold mb-4 text-white">Technologies Used :</h2>
        <ul className="list-disc list-inside text-lg text-gray-300 mb-4">
            <li>Next.js : For building a responsive and dynamic user interface.</li>
            <li>Tailwind CSS : To create a sleek and modern design.</li>
        </ul>
        <h2 className="text-2xl font-semibold mb-4 text-white">Get Started:</h2>
        <p className="text-lg text-gray-300 mb-4">
        Explore the capabilities of Stegano by visiting the <a href="https://stegenography.vercel.app" target='_blank' className="text-blue-400 underline">Stegano</a> website and experience secure data hiding like never before.
        </p>
    </div>
    )
}
export default page;