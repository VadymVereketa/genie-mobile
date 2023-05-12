export const normalizeData = {
  email: (value: string) => {
    return value.trim().toLocaleLowerCase();
  },
};
