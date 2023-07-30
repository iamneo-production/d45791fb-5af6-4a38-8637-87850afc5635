export const idUpdater: (collection: any) => number = (collection) => {
  return (
    collection
      .map((event: any) => +event.id)
      .reduce((cur: number, next: number) => (cur > next ? cur : next)) + 1
  );
};
