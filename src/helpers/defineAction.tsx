export default (type: string) => (payload: object) => ({
  type,
  payload,
});
