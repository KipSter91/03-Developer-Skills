// Remember, we're gonna use strict mode in all scripts now!
"use strict";

const temperatureData = [17, 21, 23, 15];

const printForecast = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];

    console.log(
      `...${arr[i]} Celsius degree in ${
        temperatureData.indexOf(arr[i]) + 1
      } days...`
    );
  }
};

printForecast(temperatureData);
