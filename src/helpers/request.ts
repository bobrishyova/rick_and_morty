import { UrlProps } from './types';

export default async ({ url }: UrlProps) => {
  const result = await fetch(url);
  return result.json();
};
