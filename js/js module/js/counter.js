export const createCounter = (text,count) => {
  const p = document.createElement("p");
  p.innerHTML = `${text}<span id="totalCount">${count}<span>`;
  return p
};
