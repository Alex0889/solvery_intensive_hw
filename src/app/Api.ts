import {createException} from './createException';

export type SuccessResponse<T> = {
  readonly status: 'success';
  readonly result: T;
};

export type ErrorResponse = {
  readonly status: 'error';
  readonly errors: {
    readonly key: string;
  }
};

export class Api {
  public constructor(private readonly baseUrl: string) {
  }

  public async POST<T>(url: string, payload?: Record<string, any>): Promise<T> {
    let body: string | undefined = undefined;

    if (payload) {
      body = JSON.stringify(payload);
    }

    const response = await fetch(`${this.baseUrl}/${url}`, {
      method: 'POST',
      body,
      headers: {
        'Content-Type': 'application/json'
      }});

    if (response.ok) {
      try {
        const rawResponse = await response.json() as (SuccessResponse<T> | ErrorResponse);

        if (rawResponse.status === 'success') {
          return rawResponse.result;
        } else {
          throw createException(rawResponse.errors.key);
        }
      } catch (_) {
        throw createException('E_UNABLE_TO_PARSE_JSON', `${this.baseUrl}/${url}`)
      }
    }

    throw createException('E_UNABLE_TO_REACH_SERVER', `${this.baseUrl}/${url}`)

  }
}