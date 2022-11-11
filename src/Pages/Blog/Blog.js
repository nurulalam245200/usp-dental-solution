import React from "react";
import { Helmet } from "react-helmet-async";

const Blog = () => {
  return (
    <div>
      <Helmet>
        <title>Blog |{`Usp Dental`}</title>
      </Helmet>
      <div className="w-3/4 mx-auto p-5 rounded-lg bg-sky-200">
        <h1 className="text-5xl font-bold text-emerald-600 text center">
          Question Blog !!!
        </h1>
        <p className="text-2xl mt-5 mb-5 font-bold">Please Click on Question</p>
        <div className="collapse">
          <input type="checkbox" />
          <div className="collapse-title text-xl font-medium">
            Difference between SQL and NoSQL?
          </div>
          <div className="collapse-content">
            <p>
              SQL databases are vertically scalable, while NoSQL databases are
              horizontally scalable. SQL databases are table-based, while NoSQL
              databases are document, key-value, <br /> graph, or wide-column
              stores. SQL databases are better for multi-row transactions, while
              NoSQL is better for unstructured data like documents or JSON.{" "}
              <br /> As for speed, NoSQL is generally faster than SQL,
              especially for key-value storage in our experiment; On the other
              hand, <br /> NoSQL database may not fully support ACID
              transactions, which may result data inconsistency.
            </p>
          </div>
        </div>
        <div className="collapse">
          <input type="checkbox" />
          <div className="collapse-title text-xl font-medium">
            What is JWT, and how does it work?
          </div>
          <div className="collapse-content">
            <p>
              What is JWT (JSON Web Token)? JSON Web Token (JWT) is an open
              standard (RFC 7519) for securely transmitting information between
              parties as JSON object. It is compact, <br /> readable and
              digitally signed using a private key/ or a public key pair by the
              Identity Provider(IdP).Information Exchange: <br /> JWTs are a
              good way of securely transmitting information between parties
              because they can be signed, which means you can be sure that the
              senders are <br /> who they say they are. Additionally, the
              structure of a JWT allows you to verify that the content hasn't
              been tampered with.
            </p>
          </div>
        </div>
        <div className="collapse">
          <input type="checkbox" />
          <div className="collapse-title text-xl font-medium">
            What is the difference between javascript and NodeJS?
          </div>
          <div className="collapse-content">
            <p>
              JavaScript is a simple programming language that can be used with
              any browser that has the JavaScript Engine installed.It is
              basically used on the client-side. <br /> Node. js, on the other
              hand, is an interpreter or execution environment for the
              JavaScript programming language.It is mostly used on the
              server-side. <br /> Nodejs allows Javascript code to run outside
              the browser. Nodejs comes with a lot of modules and mostly used in
              web development. <br /> Javascript is a high-level programming
              language that uses the concept of Oops but it is based on
              prototype inheritance.
            </p>
          </div>
        </div>
        <div className="collapse">
          <input type="checkbox" />
          <div className="collapse-title text-xl font-medium">
            How does NodeJS handle multiple requests at the same time?
          </div>
          <div className="collapse-content">
            <p>
              NodeJS receives multiple client requests and places them into
              EventQueue. NodeJS is built with the concept of event-driven
              architecture. <br /> NodeJS has its own EventLoop which is an
              infinite loop that receives requests and processes them.NodeJS can
              process the request without I/O blocking <br /> then the event
              loop would itself process the request and sends the response back
              to the client by itself. But, <br />
              it is possible to process multiple requests parallelly using the
              NodeJS cluster module or worker_threads module.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
