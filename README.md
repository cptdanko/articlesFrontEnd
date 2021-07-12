# Articles API Front end

Front end for Spring Boot based [Articles API] RESTful backend. At this stage, it only includes a React implementation of showing the data retrieved from the backend.

>p.s. Part of a tutorial on [My Day To-Do Blog], this is a REST API that exposes endpoints to create and retrieve articles. 
## Setup
To start the react front-end
1. Clone the repository
2. In the terminal navigate to the react directory ``` cd react```, run
```
npm install
````
3. If you see an error, create a .env file in the react directory with the following
```
SKIP_PREFLIGHT_CHECK=true 
```
4. Once done, then execute ```  npm start```

And that's all, a full client-side app to consume data from the Articles API is ready to display the articles.

To know more about the react app, navigate to the react directory in this repo. More details and a full-length blog post will be available soon at the [My Day To-Do Blog].

[Articles API]: https://github.com/cptdanko/articlesAPI
[My Day To-Do Blog]: https://mydaytodo.com/blog
