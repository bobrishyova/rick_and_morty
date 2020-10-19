export default (name: string) => ({
  FETCH: `FETCH_${name}`,
  SUCCESS: `SUCCESS_${name}`,
  ERROR: `ERROR_${name}`,
});
