import React from 'react';

const Blogs = () => {
    return (
        <div className='min-h-screen'>
            <h3 className='text-4xl pt-24 text-center text-slate-800 font-bold'>Questions/Answers</h3>
            <div className='w-11/12 md:w-3/4 mx-auto'>
                <div className='my-6 p-6 border-2 rounded-xl shadow-lg'>
                    <p className='text-2xl font-semibold' >Q1. Difference between JavaScript and NodeJS.</p>
                    <p className='text-xl pt-2'>A: JavaScript is a scripting languange. It is mostly used for writing scripts on the website. JS can only be run in the browser. It has the capability to add html tage and play with the DOM. On the other hand NodeJS is a javascript runtime environment. It helps us to run JS in the server-side. V8 is the js engine inside nodeJS that parses and runs javascript.It does not have any ability to add html tags.</p>
                </div>
                <div className='my-6 p-6 border-2 rounded-xl shadow-lg'>
                    <p className='text-2xl font-semibold' >Q2. When should you use nodejs and when should you use mongodb?</p>
                    <p className='text-xl pt-2'>A: I should use nodejs when i have to build a data intensive real-time application that runs across distributed devices. Nodejs uses an event-driven, non-blocking I/O architecture which makes it lightweight and efficient.
                        As for MongoDB, I should use it when I have to build a highly available and scalable internet application. MongoDB is built on a scale-out architecture. It can store structured or unstructured data in a JSON like format. So there is no need to think about normalizing data. MongoDB can handle high volume and scale both vertically or horizintally to accomodate large data loads.</p>
                </div>
                <div className='my-6 p-6 border-2 rounded-xl shadow-lg'>
                    <p className='text-2xl font-semibold' >Q3. Differences between sql and nosql databases.</p>
                    <p className='text-xl pt-2'>A: SQL databases are relational databases.They have predefined schema and are not suitable for hierarchical data storage. They follow ACID properties (Atomicity,Consistency, Isolation and Durability). Some example of SQL database are Oracle, PostgreSQL, MySQL etc. On the other hand, nosql databases are non-relational or distributed database system. They have dynamic schema and are best suited for hierarchical data storage.These databases follow CAP properties (consistency, availability. partition tolerance). some example are Redis, MongoDB, CouchDB etc.</p>
                </div>
                <div className='my-6 p-6 border-2 rounded-xl shadow-lg'>
                    <p className='text-2xl font-semibold' >Q3. What is the purpose of jwt and how does it work?</p>
                    <p className='text-xl pt-2'>A: JWT or JSON web token is a standard used to create access tokens for an application. Th purpose of it is to share security information between two parties, a client and a server. It also ensures the authenticity of the data. JWT is a token based stateless authentication mechanism. Basically the identity provided generates a token certifying user identity and resource server decodes and verifies the authenticity of the token using secret or public key.</p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;