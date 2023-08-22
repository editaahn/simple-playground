export const submitEmployees = (body: { ids: number[]; }) =>
  fetch('/submit-employees', {
    method: 'post',
    body: JSON.stringify(body)
  })
  .then(response => {
    if (!response.ok) {
      throw response;
    } 
    return response;
  });