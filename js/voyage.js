"use strict";
var Sejour = /** @class */ (function () {
    function Sejour(_nom, _prix) {
        this._nom = _nom;
        this._prix = _prix;
    }
    Object.defineProperty(Sejour.prototype, "nom", {
        get: function () {
            return this._nom;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Sejour.prototype, "prix", {
        get: function () {
            return this._prix;
        },
        enumerable: true,
        configurable: true
    });
    return Sejour;
}());
var SejourService = /** @class */ (function () {
    function SejourService() {
        this._sejour = [new Sejour('Grenoble', 100),
            new Sejour('Lyon', 120), new Sejour('Toulouse', 110)];
    }
    SejourService.prototype.findByName = function (nom) {
        for (var _i = 0, _a = this._sejour; _i < _a.length; _i++) {
            var sej = _a[_i];
            if (sej.nom === nom) {
                return sej;
            }
        }
    };
    return SejourService;
}());
var sejourService = new SejourService();
console.log(sejourService.findByName('Lyon'));
