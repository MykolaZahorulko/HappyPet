import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const DOG_API_URL = import.meta.env.VITE_DOG_API_URL
const CAT_API_URL = import.meta.env.VITE_CAT_API_URL
const REQUEST_HEADER = import.meta.env.VITE_REQUEST_HEADER
const createPetApi = (reducerPath, baseUrl, tagType) => createApi({
  reducerPath: reducerPath,
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl,
    prepareHeaders: (headers) => {
      headers.set('x-api-key', REQUEST_HEADER)
      return headers;
    }
  }),
  tagTypes: [tagType],
  endpoints: (builder) => ({
    getBreeds: builder.query({
      query: () => '/',
    }),
  }),
})

export const dogApi = createPetApi('dogApi', DOG_API_URL, 'Dog')
export const catApi = createPetApi('catApi', CAT_API_URL, 'Cat')

export const { useGetBreedsQuery: useGetDogBreedsQuery } = dogApi
export const { useGetBreedsQuery: useGetCatBreedsQuery } = catApi

