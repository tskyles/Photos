import { userService } from '../_services';

export function handleResponse(response) {
  return response.text()
    .then(text => {
      console.log(text)
      const data = text && JSON.parse(text);
      console.log(data);
      if (!response.ok) {
        if (response.status === 401) {
          userService.logout();
        }
        const error = (data && data.message) || response.statusText;
        return Promise.reject(error);
      }
      return data;
    })
}