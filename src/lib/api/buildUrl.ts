import { compile } from 'path-to-regexp';
import {
  RESOURCES,
  ResourceQueryParams,
  type ApiResource,
  type ResourceName,
  type ResourcePathParams,
  ResourceBody,
} from './resources';

export default function buildUrl<R extends ResourceName>(
  resourceName: R,
  pathParams?: ResourcePathParams<R>,
  queryParams?: ResourceQueryParams<R>
): string {
  const resource: ApiResource = RESOURCES[resourceName];
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

  const compiledPath = compile(`${resource.path}`)(pathParams || {});

  const url = new URL(compiledPath, baseUrl);
  queryParams &&
    Object.entries(queryParams).forEach(([key, value]) => {
      // there are some pagination params that can be null or false for the next page
      value !== undefined &&
        value !== '' &&
        url.searchParams.append(key, String(value));
    });

  return `${url.href}`;
}
