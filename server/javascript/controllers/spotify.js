"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var querystring_1 = __importDefault(require("querystring"));
var config_1 = __importDefault(require("../config"));
// Initialize the router
var router = express_1.default.Router();
router.get('/auth', function (req, res) {
    var url = 'https://accounts.spotify.com/authorize?' +
        querystring_1.default.stringify({
            client_id: config_1.default.client_id,
            response_type: 'code',
            redirect_uri: 'http://localhost:4200/',
        });
    res.send({ redirect: url });
});
router.get('/test', function (req, res) {
    res.send('spoofy');
});
/*
Spotify auth tutorial:
https://developer.spotify.com/documentation/general/guides/authorization-guide/#authorization-code-flow
*/
exports.default = router;
