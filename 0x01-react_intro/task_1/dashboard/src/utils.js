export const getFullYear = () => {
  return new Date().getFullYear();
};
export const getFooterCopy = () => {
  return `© ${getFullYear()} Holberton School main dashboard`;
};
