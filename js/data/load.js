const URL = `https://es.dump.academy/pixel-hunter/questions`;

const checkStatus = (response) => {
  if (response.ok) {
    return response;
  }

  throw new Error(`${response.status}: ${response.statusText}`);
};

const toJSON = (response) => response.json();

const loadImage = (url) => {
  return new Promise((onSuccess, onError) => {
    const img = new Image();
    img.src = url;

    img.onload = () => {
      onSuccess(url);
    };

    img.onError = (error) => {
      onError(error);
    };
  });
};

const loadQuestions = (data) => {
  const answers = [];

  data.forEach((it) => {
    return answers.push(...it.answers);
  });

  const images = answers.map((answer) => {
    return loadImage(answer.image.url);
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
    return window.fetch(URL)
      .then(checkStatus)
      .then(toJSON)
      .then(loadQuestions);
  }
}
