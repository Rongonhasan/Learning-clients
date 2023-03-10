import React from "react";

const Blog = () => {
  return (
    <div>
      <h1 className="text-2xl mb-4 "> Question Section</h1>
      <div
        tabIndex={0}
        className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
      >
        <div className="collapse-title text-xl font-medium">what is cors?</div>
        <div className="collapse-content">
          <p>
            Cross-origin resource sharing (CORS) is a browser mechanism which
            enables controlled access to resources located outside of a given
            domain. It extends and adds flexibility to the same-origin policy
            (SOP). However, it also provides potential for cross-domain attacks,
            if a website's CORS policy is poorly configured and implemented.
            CORS is not a protection against cross-origin attacks such as
            cross-site request forgery (CSRF).
          </p>
        </div>
      </div>

      <div
        tabIndex={0}
        className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
      >
        <div className="collapse-title text-xl font-medium">
          Why are you using firebase? What other options do you have to
          implement authentication?
        </div>
        <div className="collapse-content">
          <p>
            Use Google Analytics for Firebase to log events at every step of
            your onboarding flow, create funnels to see where users are dropping
            off, and use Remote Config to make changes to your app to see how it
            affects conversions. and Authentication is the process of
            determining whether someone or something is, in fact, who or what it
            says it is. Authentication technology provides access control for
            systems by checking to see if a user's credentials match the
            credentials in a database of authorized users or in a data
            authentication server.
          </p>
        </div>
      </div>

       <div 
        tabIndex={0}
        className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
      >
        <div className="collapse-title text-xl font-medium">
          How does the private route work?
        </div>
        <div className="collapse-content">
          <p>
            The private route component is similar to the public route, the only
            change is that redirect URL and authenticate condition. If the user
            is not authenticated he will be redirected to the login page and the
            user can only access the authenticated routes If he is authenticated
            (Logged in).
          </p>
        </div>
      </div>

      <div
        tabIndex={0}
        className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
      >
        <div className="collapse-title text-xl font-medium">
          What is Node? How does Node work?
        </div>
        <div className="collapse-content">
          <p>
            It is a used as
            backend service where javascript works on the server-side of the
            application. This way javascript is used on both frontend and
            backend. Node. js runs on chrome v8 engine which converts javascript
            code into machine code, it is highly scalable, lightweight, fast,
            and data-intensive. Working of Node
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
