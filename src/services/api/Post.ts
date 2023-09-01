import { createApi } from '@reduxjs/toolkit/query/react';
import axios from 'axios';

const baseURL = process.env.NEXT_PUBLIC_SITE_HOST;

const axiosBaseQuery = axios.create({
  baseURL,
});

const baseQueryWithInterception = async (url: string) => {
  try {
    const response = await axiosBaseQuery(url);
    if (response.status >= 200 && response.status < 300) {
      return { data: response.data };
    }
    throw new Error(`Request failed with status ${response.status}`);
  } catch (error) {
    return { error };
  }
};

export const apiService = createApi({
  baseQuery: baseQueryWithInterception,
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => '/posts',
    }),
  }),
});

export const { useGetPostsQuery } = apiService;
