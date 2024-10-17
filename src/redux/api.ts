import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const TOKEN = '6b2a6b4c-51c4-4beb-94b8-250d12d023b1';
const BASE_URL = 'https://zdkhiu5mp5dwa.elma365.ru/pub/v1/app/test_sreda/test_task/list';

export const commonApi = createApi({
	tagTypes: ['API'],
	reducerPath: 'commonApi',
	baseQuery: fetchBaseQuery({
		baseUrl: BASE_URL,
		headers: { Authorization: `Bearer ${TOKEN}` },
	}),
	endpoints: (build) => ({
		addApi: build.mutation({
			query: (body) => ({
				url: '',
				method: 'POST',
				body,
			}),
			invalidatesTags: ['API'],
		}),
	}),
});

export const { useAddApiMutation } = commonApi;
