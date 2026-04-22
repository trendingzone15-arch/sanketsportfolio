import { MoveLeft } from 'lucide-react';
import React from 'react';

function page(){
    return(
        <div className="w-full px-5 sm:px-10 md:px-20 lg:px-40 xl:px-80 mt-20 flex flex-col">

        <a href='/projects' className='pt-5 pb-2 flex flex-row gap-2'><MoveLeft/> Back to Projects</a>
        <h1 className="text-4xl font-bold mb-6 text-white">ResumeIQ : AI-Interviewer Project Overview</h1>
        <p className="text-lg text-gray-300 mb-4">
            ResumeIQ is AI powered interviewer that conducts mock interviews based on your resume. It leverages advanced natural language processing techniques to analyze your resume and generate relevant interview questions. Whether you are preparing for a job interview or looking to improve your interviewing skills, ResumeIQ provides a realistic and interactive experience to help you succeed. 
        </p>
        <img src="/aiinterviewer.png" alt="Stegano App" className="w-full h-auto rounded-lg mb-6"/>
       
        <h2 className="text-2xl font-semibold mb-4 text-white">Key Features :</h2>
        <ul className="list-disc list-inside text-lg text-gray-300 mb-4">
            <li> <span className='font-semibold'> User Authentication :</span> Implemented log in with google option to authorize users.</li>
            <li><span className='font-semibold'> Resume Drag & Drop OR Upload:</span> User can drag and drop or upload resume manually  .</li>
            <li> <span className='font-semibold'> 10 mb File Support :</span> It support only file with the size less that 10 mb</li>
            <li> <span className='font-semibold'> Resume parsing  :</span> Users resume get parsed after uploadation process get done.</li>
            <li><span className='font-semibold'> Data input :</span> Ask user for data like name, number of questions and what level of questions they want that ai asks etc.</li>
            <li> <span className='font-semibold'> Speech to text :</span> When ai will ask the question there is no need to type ans by click on mic button user has to speak only it will analyze your words.</li>
            <li> <span className='font-semibold'> Instant Feedback :</span> After completing the qusetions submit the data by clicking on submit it direct user to feedback page.</li>
            <li> <span className='font-semibold'> Session Storage :</span> User data like resume parsing data and feedback data is stored in session also in database </li>
        </ul>
        <h2 className="text-2xl font-semibold mb-4 text-white">Technologies Used :</h2>
        <ul className="list-disc list-inside text-lg text-gray-300 mb-4">
            <li>Next.js : For building a responsive and dynamic user interface.</li>
            <li>Tailwind CSS : To create a sleek and modern design.</li>
            <li>Express.js : Handles backend for the resume parsing and for database operations</li>
            <li>MongoDB :  Stores data of user like feedback of users interview</li>
        </ul>
        <h2 className="text-2xl font-semibold mb-4 text-white">Get Started:</h2>
        <p className="text-lg text-gray-300 mb-4">
            Start using the ResumeIQ by visiting the <a href="https://interviewer-swart.vercel.app" target='_blank' className="text-blue-400 underline">ResumeIQ</a> website and get experience for real time AI based interview platform.
        </p>
    </div>
    )
}
export default page;