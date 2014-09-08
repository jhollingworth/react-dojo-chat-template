#React Dojo Chart Template

Template application we will use as a starting point for the react dojo

##How do I?

* Install all dependencies ```make bootstrap```
* Run the application ```make start```

##Points of interest

* ``build/tasks`` Where all the grunt build tasks live
* ``build/tasks/browserify.js`` The browserify grunt task
* ``index.html`` The html rendered when you request any route
* ``lib/main.js`` The entry point for the client application
* ``lib/router.js`` Determines which page to render for client side routes
* ``lib/actions`` All the actions for both client & server
* ``lib/channelsSync.js`` Function that listens for any events from the server 
* ``lib/styles.less`` A less file (you can require in as many as you want, e.g. ``require('./foo.less')``)
* ``lib/components`` Where the react views live
