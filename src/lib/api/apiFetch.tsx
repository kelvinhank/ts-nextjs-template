import axios from 'axios';
import Cookie from 'js-cookie';

import { LOGIN_COOKIE_KEY } from '@/utils';

import buildUrl from './buildUrl';
import type {
  ResourceName,
  ResourcePathParams,
  ResourceQueryParams,
} from './resources';

export interface FetchParams {
  method?: RequestInit['method'];
  headers?: Record<string, any>;
  signal?: RequestInit['signal'];
  body?: Record<string, unknown> | FormData;
  credentials?: RequestCredentials;
}
export interface Params<R extends ResourceName> {
  pathParams?: ResourcePathParams<R>;
  queryParams?: ResourceQueryParams<R>;
  fetchParams?: Pick<FetchParams, 'body' | 'method' | 'signal' | 'headers'>;
}

// <R extends ResourceName, SuccessType = unknown, ErrorType = unknown>(
//   resourceName: R,
//   { pathParams, fetchParams, queryParams }: Params<R> = {}
// )
export default function apiFetch<
  R extends ResourceName,
  SuccessType = unknown,
  ErrorType = unknown
>(
  resourceName: R,
  { pathParams, fetchParams, queryParams }: Params<R> = {},
  signal?: AbortSignal
): Promise<SuccessType | ErrorType> {
  const url = buildUrl(resourceName, pathParams, queryParams);
  const commonConfig = {
    withCredentials: true,
    headers: {
      'X-Requested-With': 'XMLHttpRequest',
      'Content-Type': 'application/json',
      ...(fetchParams?.headers || {}),
    },
  };
  // const CancelToken = axios.CancelToken;
  // const source = CancelToken.source();

  const promise = axios({
    url: url,
    method: fetchParams?.method,
    data: fetchParams?.body,
    ...commonConfig,
    // cancelToken: source?.token,
  });

  // signal?.addEventListener('abort', () => {
  //   source?.cancel('Query was cancelled by TanStack Query');
  // });
  return promise
    .then((res) => {
      return res?.data as SuccessType;
    })
    .catch(async (error) => {
      const originalRequest = error?.config;
      if (
        error?.response?.status === 401 &&
        (error.response?.data?.message === 'TOKEN_EXPIRED' ||
          error.response?.data?.error === 'unauthorized') &&
        !originalRequest?._retry
      ) {
        originalRequest._retry = true;
        const refreshUrl = new URL(
          '/api/v1/refresh',
          process.env.NEXT_PUBLIC_API_BASE_URL
        );
        const sessionUrl = new URL(
          '/api/v1/session',
          process.env.NEXT_PUBLIC_API_BASE_URL
        );

        return await axios
          .post(refreshUrl.href, null, commonConfig)
          .then(() => {
            return axios.request(originalRequest);
          })
          .catch((error) => {
            return axios.delete(sessionUrl.href, commonConfig);
          })
          .then(_cleanSession)
          .catch(_cleanSession);
      }

      throw error as ErrorType;
    }) as Promise<SuccessType | ErrorType>;
}
const _cleanSession = () => {
  try {
    Cookie.remove(LOGIN_COOKIE_KEY);
    // localStorage.clear()
    if (window.location.pathname?.includes('admin')) {
      window.location.href = '/admins/login';
    } else {
      window.location.href = '/';
    }
    // window.location.reload()
  } catch (error) {
    console.error('Error cleaning session:', error);
  }
};
