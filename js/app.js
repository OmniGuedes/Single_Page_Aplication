// Filename: js/app.js
require.config({

    // path to fetch all our modules from
    baseUrl: './js/app'
});

// set the main module as our application entry point
require(['main'], function() {
    console.log('All modules finished loading');
});