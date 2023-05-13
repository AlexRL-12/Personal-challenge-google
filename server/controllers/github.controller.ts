import { Request, Response } from 'express';
import axios from 'axios';

export const getPopularRepos = async (_req: Request, res: Response) => {
  try {
    const response = await axios.get('https://api.github.com/users/google/repos', {
      params: {
        sort: 'stars',
        direction: 'desc',
        per_page: 10,
      },
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Something went wrong' });
  }
};
