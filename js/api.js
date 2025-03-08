const SERVER = 'https://28.javascript.htmlacademy.pro/kekstagram';

const Route = {
  GET_DATA: '/data',
  SEND_DATA: '/',
};

const ErrorText = {
  GET_DATA: 'Не удалось получить данные с сервера. Попробуйте обновить страницу',
  SEND_DATA: 'He удалось отправить форму. Попробуйте ещё раз',
};

const load = (route, errorText, method = 'GET', body = null) => {
  fetch(`${SERVER}${route}`, {method, body})
    .then((response) => {
      if (!response.ok) {
        throw new Error(errorText);
      }
      return response.json();
    })
    .catch(() => {
      throw new Error(errorText);
    });
};

const getData = () => load(Route.GET_DATA, ErrorText.GET_DATA);

const sendData = (data) => load(Route.SEND_DATA, ErrorText.SEND_DATA, 'POST', data);

export {getData, sendData, SERVER, ErrorText};
