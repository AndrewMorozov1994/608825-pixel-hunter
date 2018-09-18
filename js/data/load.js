import resize from '../data/resize.js';

const URL = `https://es.dump.academy/pixel-hunter`;
const APP_ID = 20001084;

const checkStatus = (response) => {
  if (response.ok) {
    return response;
  }

  throw new Error(`${response.status}: ${response.statusText}`);
};

const toJSON = (response) => response.json();

const loadImage = (dataImage) => {
  return new Promise((onSuccess, onError) => {
    const image = new Image();
    image.src = dataImage.url;

    image.onload = () => {
      const imageSize = resize({width: dataImage.width, height: dataImage.height}, {width: image.width, height: image.height});

      dataImage.width = imageSize.width;
      dataImage.height = imageSize.height;

      onSuccess(dataImage);
    };

    image.onerror = () => {
      onError(`Картинка не загружена ${dataImage.url}`);
    };
  });
};

const loadQuestions = (data) => {
  const answers = [];

  data.forEach((it) => {
    return answers.push(...it.answers);
  });

  const images = answers.map((answer) => {
    return loadImage(answer.image);
  });

  return Promise.all(images)
    .then(() => {
      return Promise.resolve(data);
    })
    .catch((err) => {
      return err;
    });
};

export default class Loader {
  static loadData() {
    return window.fetch(`${URL}/questions`)
      .then(checkStatus)
      .then(toJSON)
      .then(loadQuestions);
  }

  static saveResults(data, name) {
    const requestSettings = {
      body: JSON.stringify(data),
      headers: {
        'Content-Type': `application/json`
      },
      method: `POST`
    };

    return window.fetch(`${URL}/stats/${APP_ID}-${name}`, requestSettings)
      .then(checkStatus);
  }

  static loadResults(name) {
    return window.fetch(`${URL}/stats/${APP_ID}-${name}`)
      .then(checkStatus)
      .then(toJSON);
  }
}
