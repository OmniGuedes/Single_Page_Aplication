
require(['router', 'listeners'], function (router, listeners) {
    if (document.readyState) {
        console.log('dom is ready');
        router.init();
    }
});