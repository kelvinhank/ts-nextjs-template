import { ArrayElement } from '@/type/Array';

export interface ApiResource {
  path: ResourcePath;
  endpoint?: string;
  basePath?: string;
  pathParams?: Array<string>;
  queryParams?: Array<string>;
  body?: Array<string>;
  needAuth?: boolean;
}

export const RESOURCES = {
  demo: {
    path: 'api/:path/serials/:path',
    pathParams: ['cardId' as const, 'serialNumber' as const],
    queryParams: ['page' as const, 'limit' as const],
  },
};

type ResourcePathMap = {
  [K in ResourceName]: (typeof RESOURCES)[K]['path'];
};
export type ResourcePath = ResourcePathMap[keyof ResourcePathMap];

export type ResourceErrorAccount<T> = ResourceError<{ errors: T }>;
export interface ResourceError<T = unknown> {
  payload?: T;
  status: Response['status'];
  statusText: Response['statusText'];
}

export type ResourceName = keyof typeof RESOURCES;

type ResourcePathParamName<Resource extends ResourceName> =
  (typeof RESOURCES)[Resource] extends { pathParams: Array<string> }
    ? ArrayElement<(typeof RESOURCES)[Resource]['pathParams']>
    : string;
export type ResourcePathParams<Resource extends ResourceName> =
  (typeof RESOURCES)[Resource] extends { pathParams: Array<string> }
    ? Record<ResourcePathParamName<Resource>, any>
    : never;

type ResourcePathQueryName<Resource extends ResourceName> =
  (typeof RESOURCES)[Resource] extends { queryParams: Array<string> }
    ? ArrayElement<(typeof RESOURCES)[Resource]['queryParams']>
    : string;
export type ResourceQueryParams<Resource extends ResourceName> =
  (typeof RESOURCES)[Resource] extends { queryParams: Array<string> }
    ? Record<ResourcePathQueryName<Resource>, any>
    : never;

type ResourceBodyName<Resource extends ResourceName> =
  (typeof RESOURCES)[Resource] extends { body: Array<string> }
    ? ArrayElement<(typeof RESOURCES)[Resource]['body']>
    : string;
export type ResourceBody<Resource extends ResourceName> =
  (typeof RESOURCES)[Resource] extends { body: Array<string> }
    ? Record<ResourceBodyName<Resource>, any>
    : never;
