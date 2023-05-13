"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const github_controller_1 = require("../controllers/github.controller"); // Replace with the correct path to your module
jest.mock('axios'); // Mock the axios library
describe('getPopularRepos', () => {
    let req;
    let res;
    beforeEach(() => {
        req = {};
        res = {
            json: jest.fn(),
            status: jest.fn().mockReturnThis(),
        };
    });
    afterEach(() => {
        jest.resetAllMocks();
    });
    it('should return popular repositories', () => __awaiter(void 0, void 0, void 0, function* () {
        const mockedResponse = {
            data: [{ name: 'repo1' }, { name: 'repo2' }],
        };
        axios_1.default.get.mockResolvedValueOnce(mockedResponse);
        yield (0, github_controller_1.getPopularRepos)(req, res);
        expect(res.json).toHaveBeenCalledWith(mockedResponse.data);
    }));
    it('should handle errors', () => __awaiter(void 0, void 0, void 0, function* () {
        const mockedError = new Error('Request failed');
        axios_1.default.get.mockRejectedValueOnce(mockedError);
        yield (0, github_controller_1.getPopularRepos)(req, res);
        expect(res.status).toHaveBeenCalledWith(500);
        expect(res.json).toHaveBeenCalledWith({ error: 'Something went wrong' });
    }));
});
//# sourceMappingURL=github.controller.test.js.map