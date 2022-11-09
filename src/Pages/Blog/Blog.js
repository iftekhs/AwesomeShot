import React from 'react';
import useTitle from '../../Hooks/useTitle';

const Blog = () => {
  const blogs = [
    {
      _id: 1,
      question: 'Difference between SQL and NoSQL?',
      answer:
        'SQL is the programming language used to interface with relational databases. (Relational databases model data as records in rows and tables with logical links between them). NoSQL is a class of DBMs that are non-relational and generally do not use SQL. SQL- These databases have fixed or static or predefined schema These databases are not suited for hierarchical data storage. These databases are best suited for complex queries Vertically Scalable Follows ACID property Nosql - Non-relational or distributed database system, These databases are best suited for hierarchical data storage, These databases are not so good for complex queries, Horizontally scalable, Follows CAP(consistency, availability, partition tolerance)',
    },
    {
      _id: 2,
      question: 'What is JWT, and how does it work?',
      answer:
        "JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed.Authentication server verifies the credentials and issues a jwt signed using either a secret salt or a private key. User's Client uses the JWT to access protected resources by passing the JWT in HTTP Authorization header. Resource server then verifies the authenticity of the token using the secret salt/ public key.",
    },
    {
      _id: 3,
      question: 'What is the difference between javascript and NodeJS?',
      answer:
        'JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node. js, on the other hand, is an interpreter or execution environment for the JavaScript programming language. Javascript is a programming language that is used for writing scripts on the website, NodeJS is a Javascript runtime environment, Javascript can only be run in the browsers, We can run Javascript outside the browser with the help of NodeJS, It is basically used on the client-side, It is mostly used on the server-side,',
    },

    {
      _id: 4,
      question: 'How does NodeJS handle multiple requests at the same time?',
      answer:
        'NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. EventLoop is the listener for the EventQueue.',
    },
  ];

  useTitle('Blog');

  return (
    <section className="py-8 px-2">
      <div className="container mx-auto">
        {blogs.map((blog) => (
          <div
            key={blog._id}
            className="block mb-10 p-6 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
              {blog.question}
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">{blog.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;
