define(function () {

    var externals = {};

    externals.show = function (data) {

        var div = document.getElementById("box");
        var myHTML = "";

        Object.values(data.results).forEach(element => {
            console.log(element);
            var str = '<p id = "name">' + element.name + '</p>' + '<img src="' + element.image + '" alt=" ">';
            myHTML = myHTML.concat("", str);
        });
        
        div.innerHTML = myHTML;
    }


    return externals;
});