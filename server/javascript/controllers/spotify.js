"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var querystring_1 = __importDefault(require("querystring"));
// Initialize the router
var router = express_1.default.Router();
router.get('/login', function (req, res) {
    console.log("I have ran");
    res.redirect('https://accounts.spotify.com/authorize?' +
        querystring_1.default.stringify({
            client_id: "a9d6d9b01fe040768d125261b8d2134c",
            response_type: 'code',
            redirect_uri: "/",
        }));
});
router.get('/test', function (req, res) {
    res.send("spoofy");
});
/*
Spotify auth tutorial:
https://developer.spotify.com/documentation/general/guides/authorization-guide/#authorization-code-flow
*/
exports.default = router;
