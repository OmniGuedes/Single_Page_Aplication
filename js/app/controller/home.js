define(['views/home', 'services/character', ], function (homeView, characterService) {

    var extenals = {};
    var internals = {};


    extenals.init = function () {
        characterService.get().then(function (data) {
            homeView.show(data);


        });


    };

    return extenals;
});