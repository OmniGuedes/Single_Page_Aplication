define(function () {

    let internals = {};
    let externals = {};

    internals.api = "https://rickandmortyapi.com/api/character";

    internals.parseResponse = function (response) {

        if (!response.ok) {
            throw new Error('invalid response');
        }

        return response.json();
    }

    internals.get = function (data) {
        return data;
    };

    externals.get = function (value) {
        var url;

        if(value){
            url = internals.api + "/" + value;
        }

        return fetch(internals.api)
            .then(internals.parseResponse)
            .then(internals.get);
    };


    return externals;

})