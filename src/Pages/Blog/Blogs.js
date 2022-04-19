import React from 'react';

const Blogs = () => {
    return (
        <div className='col-sm-12 col-lg-12'>
            <h2 className='text-center text-primary py-4'>WELCOME TO MY BLOG</h2>
            <div className='bg-success border-1 rounded-3 m-4 p-4 text-white'>
            <h4>Difference between authorization and authentication.</h4>
            <p> <span className='fw-bold text-black'>Authentication:</span> Authentication is a process of identifying someone or something is, in fact, or what it says it is. It Provides access to the real account holder. If unrecognized people or something want access, it will be impossible.</p>
            <p> <span className='fw-bold text-black'>Authorization:</span> It is a function of specify to access rights to resources, which is related to general information security, and to access in particular. Authorization provides security and authentication just check your info which you provide before.</p>
            </div>

            <div className='bg-info border-1 rounded-3 m-4 p-4 text-black'>
               <h4>Why are you using firebase? What other options do you have to implement authentication?</h4>
               <p>I use Google Firebase.Because, Google Firebase gives us many others features to easily handle authentication and authorized after completed site.Other options to implement authentication : React router hook, Back4App, Parse, AWS Amplify,Backendless etc.</p>
            </div>
            <div className='bg-secondary border-1 rounded-3 m-4 p-4 text-white'>
                <h4>What other services does firebase provide other than authentication</h4>
                <p>There are many services which GOOGLE FIREBASE provide. 1. Cloud Firestore, 2. Cloud Functions, 3. Hosting, 4. Cloud, 5. Google Analysis, 6, Predictions, 7. Cloud Messaging, 8. Dynamic Links and 9. Remote Config.</p>
            </div>
        </div>
    );
};

export default Blogs;