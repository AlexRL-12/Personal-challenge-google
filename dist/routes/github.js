"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.githubRouter = void 0;
const express_1 = __importDefault(require("express"));
const github_1 = require("../controllers/github");
exports.githubRouter = express_1.default.Router();
exports.githubRouter.get('/repos', github_1.getPopularRepos);
//# sourceMappingURL=github.js.map