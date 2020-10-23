const defineAction = <T>(type: string) => (payload: T) => ({
  type,
  payload,
});

export default defineAction;
