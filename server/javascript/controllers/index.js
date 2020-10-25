"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var spotify_1 = __importDefault(require("./spotify"));
// Initialize the router
var router = express_1.default.Router();
// Add the middleware endpoints to the router
router.get('/', function (req, res) {
    res.send('test api route');
});
router.use('/spotify', spotify_1.default);
exports.default = router;
