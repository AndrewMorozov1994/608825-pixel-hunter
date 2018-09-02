import answersTypes from './answersTypes.js';

export const questionTypes = {
  TWO_IMG: `Угадайте для каждого изображения фото или рисунок?`,
  PHOTO_OR_PAINT: `Угадай, фото или рисунок?`,
  FIND_PAINT: `Найдите рисунок среди изображений?`
};

export const questions = [
  {
    type: `Угадайте для каждого изображения фото или рисунок?`,
    description: questionTypes.TWO_IMG,
    options: [
      {
        name: `question1`,
        type: `paint`,
        image: {
          url: `https://k42.kn3.net/CF42609C8.jpg`, // people
          title: `Option 1`,
          width: 468,
          height: 458
        }
      },
      {
        name: `question2`,
        type: `photo`,
        image: {
          url: `https://i.imgur.com/DiHM5Zb.jpg`, // animals
          title: `Option 2`,
          width: 468,
          height: 458
        }
      }
    ]
  },
  {
    description: questionTypes.PHOTO_OR_PAINT,
    type: `Угадай, фото или рисунок?`,
    option: {
      name: `question1`,
      type: `photo`,
      image: {
        url: `http://i.imgur.com/1KegWPz.jpg`, // people
        title: `Option 1`,
        width: 705,
        height: 455
      }
    }
  },
  {
    type: `Найдите рисунок среди изображений?`,
    description: questionTypes.FIND_PAINT,
    options: [
      {
        name: `question1`,
        type: `photo`,
        image: {
          url: `http://i.imgur.com/1KegWPz.jpg`, // people
          title: `Option 1`,
          width: 304,
          height: 455
        },
        isSelected: false
      },
      {
        name: `question2`,
        type: `paint`,
        image: {
          url: `https://k42.kn3.net/CF42609C8.jpg`,
          title: `Option 2`,
          width: 304,
          height: 455
        },
        isSelected: true
      },
      {
        name: `question3`,
        type: `photo`,
        image: {
          url: `http://i.imgur.com/1KegWPz.jpg`, // people
          title: `Option 1`,
          width: 304,
          height: 455
        },
        isSelected: false
      }
    ]
  },
  {
    type: `Угадайте для каждого изображения фото или рисунок?`,
    description: questionTypes.TWO_IMG,
    options: [
      {
        name: `question1`,
        type: `paint`,
        image: {
          url: `https://k42.kn3.net/CF42609C8.jpg`, // people
          title: `Option 1`,
          width: 468,
          height: 458
        }
      },
      {
        name: `question2`,
        type: `photo`,
        image: {
          url: `https://i.imgur.com/DiHM5Zb.jpg`, // animals
          title: `Option 2`,
          width: 468,
          height: 458
        }
      }
    ]
  },
  {
    description: questionTypes.PHOTO_OR_PAINT,
    type: `Угадай, фото или рисунок?`,
    option: {
      name: `question1`,
      type: `photo`,
      image: {
        url: `http://i.imgur.com/1KegWPz.jpg`, // people
        title: `Option 1`,
        width: 705,
        height: 455
      }
    }
  },
  {
    type: `Найдите рисунок среди изображений?`,
    description: questionTypes.FIND_PAINT,
    options: [
      {
        name: `question1`,
        type: `photo`,
        image: {
          url: `http://i.imgur.com/1KegWPz.jpg`, // people
          title: `Option 1`,
          width: 304,
          height: 455
        },
        isSelected: false
      },
      {
        name: `question2`,
        type: `paint`,
        image: {
          url: `https://k42.kn3.net/CF42609C8.jpg`,
          title: `Option 2`,
          width: 304,
          height: 455
        },
        isSelected: true
      },
      {
        name: `question3`,
        type: `photo`,
        image: {
          url: `http://i.imgur.com/1KegWPz.jpg`, // people
          title: `Option 1`,
          width: 304,
          height: 455
        },
        isSelected: false
      }
    ]
  },
  {
    description: questionTypes.PHOTO_OR_PAINT,
    type: `Угадай, фото или рисунок?`,
    option: {
      name: `question1`,
      type: `photo`,
      image: {
        url: `http://i.imgur.com/1KegWPz.jpg`, // people
        title: `Option 1`,
        width: 705,
        height: 455
      }
    }
  },
  {
    type: `Угадайте для каждого изображения фото или рисунок?`,
    description: questionTypes.TWO_IMG,
    options: [
      {
        name: `question1`,
        type: `paint`,
        image: {
          url: `https://k42.kn3.net/CF42609C8.jpg`, // people
          title: `Option 1`,
          width: 468,
          height: 458
        }
      },
      {
        name: `question2`,
        type: `photo`,
        image: {
          url: `https://i.imgur.com/DiHM5Zb.jpg`, // animals
          title: `Option 2`,
          width: 468,
          height: 458
        }
      }
    ]
  },
  {
    description: questionTypes.PHOTO_OR_PAINT,
    type: `Угадай, фото или рисунок?`,
    option: {
      name: `question1`,
      type: `photo`,
      image: {
        url: `http://i.imgur.com/1KegWPz.jpg`, // people
        title: `Option 1`,
        width: 705,
        height: 455
      }
    }
  },
  {
    type: `Найдите рисунок среди изображений?`,
    description: questionTypes.FIND_PAINT,
    options: [
      {
        name: `question1`,
        type: `photo`,
        image: {
          url: `http://i.imgur.com/1KegWPz.jpg`, // people
          title: `Option 1`,
          width: 304,
          height: 455
        },
        isSelected: false
      },
      {
        name: `question2`,
        type: `paint`,
        image: {
          url: `https://k42.kn3.net/CF42609C8.jpg`,
          title: `Option 2`,
          width: 304,
          height: 455
        },
        isSelected: true
      },
      {
        name: `question3`,
        type: `photo`,
        image: {
          url: `http://i.imgur.com/1KegWPz.jpg`, // people
          title: `Option 1`,
          width: 304,
          height: 455
        },
        isSelected: false
      }
    ]}
];

export const answersTextTypeInitial = [
  answersTypes.UNKNOWN,
  answersTypes.UNKNOWN,
  answersTypes.UNKNOWN,
  answersTypes.UNKNOWN,
  answersTypes.UNKNOWN,
  answersTypes.UNKNOWN,
  answersTypes.UNKNOWN,
  answersTypes.UNKNOWN,
  answersTypes.UNKNOWN,
  answersTypes.UNKNOWN
];
