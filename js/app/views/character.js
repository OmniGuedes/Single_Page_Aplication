define(function () {

    var externals = {};

    externals.show = function (resource) {
        console.log(resource.name);
        
        var div = document.getElementById("box");
        var myHTML = '<img src="' + resource.image + '" alt=" ">';
        div.innerHTML = myHTML;

    };

    return externals;
})