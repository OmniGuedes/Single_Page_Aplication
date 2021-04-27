define(['views/home', 'services/character'], function (characterView, characterService) {
    var internals = {};
    var externals = {};




    externals.init = function () {

        console.log("cenas")
        //characterService.get().then(function (data) {
          //  characterView.show(data);
        //});

    }


    return externals;
})