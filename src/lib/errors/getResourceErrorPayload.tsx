import getErrorCause from './getErrorCause';
import { ResourceError } from '../api/resources';

export default function getResourceErrorPayload<
  Payload = Record<string, unknown> | string
>(error: Error | undefined): ResourceError<Payload>['payload'] | undefined {
  const cause = getErrorCause(error);
  return cause && 'payload' in cause
    ? (cause.payload as ResourceError<Payload>['payload'])
    : undefined;
}
