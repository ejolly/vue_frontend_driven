# Vue scaffold with bulma/buefy and fontawesome 5 icons

This repo serves as a reference for how to setup a simple [Vue](https://vuejs.org/) project with [Vue Router](https://router.vuejs.org/), [Bulma](https://bulma.io/documentation/), [Buefy](https://buefy.org/), and [FontAwesome](https://fontawesome.com/). 

Used as is, it should provide a good scaffold for front-end driven apps with client-side routing without the need for a backend. 

# Deploying

The fastest and easiest way to deploy this app (with or without a custom domain name) is via a static-hosting service. **Important**: make sure to setup proper redirection on the hosting service such that all routes redirect to `index.html`, otherwise refreshes and direct URL entries will fail! 

Below is how to deploy to [Netlify](https://www.netlify.com/) a fast and simple static website hosting platform. While it can build sites automatically from a github repository the steps below reproduce a manual setup and deploy.  

1. [Create a netlify account](https://app.netlify.com/signup)
2. Install the netlify command line tools `npm install -g netlify-cli`
3. Log into netlify via the command line `netlify login`
4. Create a file called `netlify.toml` and copy the contents from this repo into it
5. Deploy the site (first to test it) `netlify deploy`
6. If it looks good make it available for public consumption `netlify deploy --prod`

## Commands 

### Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

## Reproducible workflow  

1. Install vue cli if you dont have it already  
   
   `npm install -g @vue/cli`

2. Scaffold project with CLI. Options include: 
   babel and eslint+prettier plugins, node-sass preprocessor, router with history mode, use config files, lint on save.  
   
   See .vuerc in this repo for exact config "front-end-only-buefy"

   `vue create vue_frontend_driven`

3. Install buefy (bulma wrapped as Vue components + bulma css/sass classes)  
   `npm install buefy`

4. Setup the ability to customize/override default bulma class values (e.g. default colors, sizing, spacing, etc)  
   `touch assets/main.scss`  
   Add customizations to this file and import bulma and buefy at the *end* of the file (see file in this repo for more info)

5. Make Vue app aware of the file in 3)  
   Add `require("./assets/main.scss")` to `src/main.js`  
   Add `Vue.use(Buefy, { defaultIconPack: "fas" })` to `src/main.js` *before* creating the main Vue component

6. Get a CDN link to the fontawesome 5 js file from their website and add it to the `<head>` tag of `public/index.html`. Other options for adding icons include `npm i font-awesome` (but app size will become huge), or using `npm i vue-fontawesome` (smart app size based on imports, but now requires useing component syntax to add icons to code)

7. All regular bulma classes should work e.g. `class="columns"` plus buefy components should work e.g `<b-button @click="clickMe">Click Me</b-button>`, plus standard fontawesome icon tags should work e.g. `<span class="icon is-medium"><i class="fas fa-spinner fa-pulse"></i></span>`
```