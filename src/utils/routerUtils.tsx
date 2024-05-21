export const handleRouteChangeStart = () => {
  const spinner = document.getElementById('spinner');

  if (spinner) {
    spinner.style.display = 'block';
  }
};
export const handleRouteChangeComplete = () => {
  const spinner = document.getElementById('spinner');
  if (spinner) {
    spinner.style.display = 'none';
  }
};

export const loadPage = (ms?: number) => {
  handleRouteChangeStart();
  setTimeout(() => {
    handleRouteChangeComplete();
  }, ms || 500);
};
