export const findEmployees = () =>
  fetch('/employees')
    .then(response => response.json())
    .then(data => data);