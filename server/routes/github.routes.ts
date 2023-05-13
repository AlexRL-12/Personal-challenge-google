import express from 'express';
import { getPopularRepos } from '../controllers/github.controller';

export const githubRouter = express.Router();

githubRouter.get('/repos', getPopularRepos);
