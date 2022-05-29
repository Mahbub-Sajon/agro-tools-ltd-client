import React from 'react';

const Blog = () => {
    return (
        <div>
           <p>
               1. Question: How will you improve the performance of a React Application? <br />
               Answer: React js is efficient library through which we can develop a site perfectly. But there are some techniques through which we can make react better. At first we should use react router so we can prevent loading each time while changing a route. We should not use lazy loading image. We should import whatever is needed. Hooks making it easier for fetching data each time. we should organize components perfectly. 
               <br />

                2. Question: What are the different ways to manage a state in a React application? <br />
                Answer: There are some ways we can manage our states in a react application. We have four main types of states. Local state, global state, server state, url state. Local state is data we manage in one or another component. Global state is data we manage across multiple components.  Data that comes from an external server that must be integrated with our UI state. Data that exists on our URLs, including the pathname and query parameters.
                <br />
                3. Question: How does prototypical inheritance work?
                <br />
                Answer: When we need to add any methods and properties in javascript then we use prototypical inheritance features. It is a method by which an object can inherit the properties and methods of another object. <br />
                4. Question: You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name? <br />
                Answer: At first we need to loop that array using map method. then we need to send these data to a server to generate an api. after generating api we can show all data in the ui or as much as we want. we can then create a search bar on the ui. then set a condition to search a data by searching name from that api. after that we will be able to get the product. we can also set search option for price also. 
                <br />
                5. What is a unit test? Why should write unit tests?
                <br />
                Answer: When we need to test a software or site before launching we can make it into a testable parts of an application, called units, are individually and independently scrutinized. then we can normally text those smallest independent part to get the efficient result. unit test makes it easy for the developers to find glitch and bugs and solve perfectly. 
           </p>
        </div>
    );
};

export default Blog;