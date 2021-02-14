'use strict';
require('dotenv').config();
const readline = require('readline');
const fs = require('fs');

module.exports.hello = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Go Serverless v1.0! Your function executed successfully!',
        input: event,
      },
      null,
      2
    ),
  };
};

// GET array of temperature objects for 10 days from csv file
module.exports.temperatures = async (event) => {
  try {
    const rl = readline.createInterface({
      input: fs.createReadStream(`${process.env.LOCAL_PATH}/src/sydney-temperatures.csv`, 'utf8'),
      crlfDelay: Infinity,
    });

    let result = [];

    const compile = async () => {
      for await (const line of rl) {
        const lineArray = line.split(',');
        let singleObj = {};
        const obj = lineArray.map((item, index) => {
          if (index === 0) {
            singleObj['date'] = item;
          } else if (index === 1) {
            singleObj['max'] = item;
          } else {
            singleObj['min'] = item;
          }
        });
        result.push(singleObj);
      }
    };

    await compile();
    result.shift();
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'OPTIONS,POST,GET',
      },
      body: JSON.stringify(result),
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ 'Error: ': err }),
    };
  }
};
