export function getRandomNumber(min, max) {
  return Math.random() * (max - min) + min;
}

export const generateDataChart1 = () => {
  return [
    { date: '2022-12-15', value: 0 },
    {
      date: '2022-12-16',
      value: getRandomNumber(0, 0.7)
    },
    {
      date: '2022-12-17',
      value: -getRandomNumber(0, 0.7)
    },
    {
      date: '2022-12-18',
      value: -getRandomNumber(0, 0.7)
    },
    {
      date: '2022-12-19',
      value: getRandomNumber(0, 0.7)
    },
    {
      date: '2022-12-22',
      value: -getRandomNumber(0, 0.7)
    },
    {
      date: '2022-12-23',
      value: getRandomNumber(0, 0.7)
    },
    {
      date: '2022-12-24',
      value: getRandomNumber(0, 0.7)
    },
    {
      date: '2022-12-25',
      value: getRandomNumber(0, 0.7)
    },
    {
      date: '2022-12-26',
      value: getRandomNumber(0, 0.7)
    },
    {
      date: '2022-12-29',
      value: getRandomNumber(0, 0.7)
    }
  ];
};

export const generateDataChart2 = () => {
  return [
    { date: '2022-12-15', value: 0 },
    {
      date: '2022-12-16',
      value: getRandomNumber(0, 0.9)
    },
    {
      date: '2022-12-17',
      value: getRandomNumber(0, 0.9)
    },
    {
      date: '2022-12-18',
      value: getRandomNumber(0, 0.9)
    },
    {
      date: '2022-12-19',
      value: getRandomNumber(0, 0.9)
    },
    {
      date: '2022-12-22',
      value: getRandomNumber(0, 0.9)
    },
    {
      date: '2022-12-23',
      value: getRandomNumber(0, 0.9)
    },
    {
      date: '2022-12-24',
      value: getRandomNumber(0, 0.9)
    },
    {
      date: '2022-12-25',
      value: getRandomNumber(0, 0.9)
    },
    {
      date: '2022-12-26',
      value: getRandomNumber(0, 0.9)
    },
    {
      date: '2022-12-29',
      value: getRandomNumber(0, 0.9)
    }
  ];
};

export const generateDataChart3 = () => {
  return [
    { date: '2022-12-15', value: 0 },
    {
      date: '2022-12-16',
      value: -getRandomNumber(0, 0.4)
    },
    {
      date: '2022-12-17',
      value: -getRandomNumber(0, 0.4)
    },
    {
      date: '2022-12-18',
      value: -getRandomNumber(0, 0.4)
    },
    {
      date: '2022-12-19',
      value: -getRandomNumber(0, 0.4)
    },
    {
      date: '2022-12-22',
      value: -getRandomNumber(0, 0.4)
    },
    {
      date: '2022-12-23',
      value: -getRandomNumber(0, 0.4)
    },
    {
      date: '2022-12-24',
      value: -getRandomNumber(0, 0.4)
    },
    {
      date: '2022-12-25',
      value: -getRandomNumber(0, 0.4)
    },
    {
      date: '2022-12-26',
      value: -getRandomNumber(0, 0.4)
    },
    {
      date: '2022-12-29',
      value: -getRandomNumber(0, 0.4)
    }
  ];
};
