export * from './sign';

export type ErrorResponse = {
  statusCode: number;
  message: string;
  error?: string;
};
