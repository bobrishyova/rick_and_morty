export default (arrayUrl: Array<string>) => {
  if (arrayUrl.length === 0) {
    return [];
  }
  return arrayUrl.map((url) => {
    const splittedUrl = url.split('/');
    return splittedUrl[splittedUrl.length - 1];
  });
};
