-these are development notes that are intended for future personal references and public because it seems to motivate me - be warned of grammar errors - contact me through http://www.mikelseverson.com if you want me talk about this project. 

Let's get learning..

This project will serve as a boilerplate for my future node mongo and express API development. The progress will be documented as I progress through the api development course available on frontendmasters.

Below I am going to keep a development journal for this project in order to write a summary of the project, learning process, struggles, and whatever else comes up as I develop it. 

The API will be essentially a server database with authentication that front end applications will use to have data persistence. I would like to learn more about what features 

After completing this boilerplate, I plan on using it to make some much needed improvements to mikelseverson.com. Future project documentation will be available on there. Future tasks will be to create my own boilerplates for angular 1.X (optimized for future upgrade to 2.x), angular 2.x, and react. 

These projects will also be documented and will be used to get as solid of a grasp of the current state of web development so I can learn the tools I need to provide cutting edge technologies for future employers and clients. 

I've certainly have a lot to learn. I love programming, but I want to find what aspects of it bring me the motivation so it's time to analyze the backend and move to the front end, and it's time to start documenting the process. 

1/13 - Project planning and progress through frontendmasters API course

Project planning: First progress through frontendmasters and recreate the API it teaches making sure I fully understand how the components interact with each other. Then I'll create an API with mongoose db, authentication, unit testing, and a custom middleware, mixed in with techniques I learned at Prime Academy. 

1/14 - Today I implemented a config file to manage the port and manage authentication secrets. I also implemented the ability to use custom config files depending on the active process.node.NODE_ENV. This is defaulted to development, but has the ability to use different a custom config for other environments.

1/18 - Over the past few days I have been researching https and letsencrypts role. What I've learned is many developers implement a reverse proxy web server by having NGINX or Apache manage the interaction between client and server. There seems to be some benefits in load balancing and could simplify ssl encryption. SSL encryption was intended to be implement in the boilerplate to make it easier to utilize push notifications. What I've found is push notifications work on localhost without ssl, heroku seems to support ssl by default on subdomain.heroku.com. 

Push Notifications are going to be incredibly valuable in maintaining mobile engagement for web applications. For this reason I want to experiment using service workers. I hope it will be able to run on free heroku domains, otherwise I will be purchasing an ssl endpoint for mikelseverson.com

1/19 - Made small changes to make code more readable, and removed unnecessary parts. Tomorrow I would like to finish routing, implement route specific passport authentication. On the 21st I would like to implement Mongodb and practice working with presaves to store relevant information that would be helpful for projects used with this bootstraps. 

1/21 - built out more structure for the project, added seperate config files based on the enviroment that merge with the global config file. Improved api test route controller setup example. Added a router for front end. Tomorrow would like to add authentication to the API routes for data, and setup gulp to manage moving clientside development to the distribution side of the boilerplate.