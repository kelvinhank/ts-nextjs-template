export const STATUS_CODE = {
  unauthorized: 401,
  forbidden: 403,
  tooManyRequests: 429,
  internalServerError: 500,
} as const;

export const REQUEST_METHOD = {
  get: 'GET',
  post: 'POST',
  put: 'PUT',
  patch: 'PATCH',
  delete: 'DELETE',
} as const;

export const CONTENT_TYPE = {
  appJson: 'application/json',
  textPlain: 'text/plain',
  unset: 'unset',
} as const;
