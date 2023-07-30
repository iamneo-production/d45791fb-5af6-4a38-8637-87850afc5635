export const idUpdater: (collection: any) => number = (collection) => {
  return (
    collection
      .map((event: any) => +event.id)
      .reduce((cur: number, next: number) => (cur > next ? cur : next)) + 1
  );
};

export const parseJwt = (token: string) => {
  const base64Url = token.split('.')[1];
  const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  const jsonPayload = decodeURIComponent(
    window
      .atob(base64)
      .split('')
      .map(function (c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
      })
      .join('')
  );

  return JSON.parse(jsonPayload);
};
