
import { Request, Response } from 'express';
import axios from 'axios';
import { getPopularRepos } from '../controllers/github.controller'; // Replace with the correct path to your module

jest.mock('axios'); // Mock the axios library

describe('getPopularRepos', () => {
  let req: Partial<Request>;
  let res: Partial<Response>;

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

  it('should return popular repositories', async () => {
    const mockedResponse = {
      data: [{ name: 'repo1' }, { name: 'repo2' }],
    };

    (axios.get as jest.MockedFunction<typeof axios.get>).mockResolvedValueOnce(mockedResponse);

    await getPopularRepos(req as Request, res as Response);

    expect(res.json).toHaveBeenCalledWith(mockedResponse.data);
  });

  it('should handle errors', async () => {
    const mockedError = new Error('Request failed');

    (axios.get as jest.MockedFunction<typeof axios.get>).mockRejectedValueOnce(mockedError);

    await getPopularRepos(req as Request, res as Response);

    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({ error: 'Something went wrong' });
  });
});
