const moment = require('moment');
const fs = require('fs');
const path = require('path');
const { promisify } = require('util');
const writeFile = promisify(fs.writeFile);
const dataBasePath = path.join(__dirname, '..', '..', 'FiveDayDB');

const array = [
    {
        cod: '200',
        message: 0,
        cnt: 40,
        list: [
            {
                dt: 1581519600,
                main: {
                    temp: 275.82,
                    feels_like: 270.07,
                    temp_min: 275.18,
                    temp_max: 275.82,
                    pressure: 1005,
                    sea_level: 1005,
                    grnd_level: 988,
                    humidity: 85,
                    temp_kf: 0.64,
                },
                weather: [
                    {
                        id: 600,
                        main: 'Snow',
                        description: 'light snow',
                        icon: '13d',
                    },
                ],
                clouds: {
                    all: 100,
                },
                wind: {
                    speed: 5.47,
                    deg: 278,
                },
                snow: {
                    '3h': 0.13,
                },
                sys: {
                    pod: 'd',
                },
                dt_txt: '2020-02-12 15:00:00',
            },
            {
                dt: 1581530400,
                main: {
                    temp: 275.27,
                    feels_like: 269.51,
                    temp_min: 274.79,
                    temp_max: 275.27,
                    pressure: 1007,
                    sea_level: 1007,
                    grnd_level: 990,
                    humidity: 74,
                    temp_kf: 0.48,
                },
                weather: [
                    {
                        id: 804,
                        main: 'Clouds',
                        description: 'overcast clouds',
                        icon: '04n',
                    },
                ],
                clouds: {
                    all: 100,
                },
                wind: {
                    speed: 5,
                    deg: 277,
                },
                sys: {
                    pod: 'n',
                },
                dt_txt: '2020-02-12 18:00:00',
            },
            {
                dt: 1581541200,
                main: {
                    temp: 274.27,
                    feels_like: 268.35,
                    temp_min: 273.95,
                    temp_max: 274.27,
                    pressure: 1008,
                    sea_level: 1008,
                    grnd_level: 991,
                    humidity: 84,
                    temp_kf: 0.32,
                },
                weather: [
                    {
                        id: 804,
                        main: 'Clouds',
                        description: 'overcast clouds',
                        icon: '04n',
                    },
                ],
                clouds: {
                    all: 100,
                },
                wind: {
                    speed: 5.36,
                    deg: 279,
                },
                sys: {
                    pod: 'n',
                },
                dt_txt: '2020-02-12 21:00:00',
            },
            {
                dt: 1581552000,
                main: {
                    temp: 273.77,
                    feels_like: 268.27,
                    temp_min: 273.61,
                    temp_max: 273.77,
                    pressure: 1009,
                    sea_level: 1009,
                    grnd_level: 993,
                    humidity: 85,
                    temp_kf: 0.16,
                },
                weather: [
                    {
                        id: 804,
                        main: 'Clouds',
                        description: 'overcast clouds',
                        icon: '04n',
                    },
                ],
                clouds: {
                    all: 100,
                },
                wind: {
                    speed: 4.7,
                    deg: 279,
                },
                sys: {
                    pod: 'n',
                },
                dt_txt: '2020-02-13 00:00:00',
            },
            {
                dt: 1581562800,
                main: {
                    temp: 272.96,
                    feels_like: 267.61,
                    temp_min: 272.96,
                    temp_max: 272.96,
                    pressure: 1010,
                    sea_level: 1010,
                    grnd_level: 994,
                    humidity: 82,
                    temp_kf: 0,
                },
                weather: [
                    {
                        id: 803,
                        main: 'Clouds',
                        description: 'broken clouds',
                        icon: '04n',
                    },
                ],
                clouds: {
                    all: 51,
                },
                wind: {
                    speed: 4.26,
                    deg: 269,
                },
                sys: {
                    pod: 'n',
                },
                dt_txt: '2020-02-13 03:00:00',
            },
            {
                dt: 1581573600,
                main: {
                    temp: 273.14,
                    feels_like: 267.67,
                    temp_min: 273.14,
                    temp_max: 273.14,
                    pressure: 1012,
                    sea_level: 1012,
                    grnd_level: 995,
                    humidity: 88,
                    temp_kf: 0,
                },
                weather: [
                    {
                        id: 803,
                        main: 'Clouds',
                        description: 'broken clouds',
                        icon: '04d',
                    },
                ],
                clouds: {
                    all: 55,
                },
                wind: {
                    speed: 4.63,
                    deg: 266,
                },
                sys: {
                    pod: 'd',
                },
                dt_txt: '2020-02-13 06:00:00',
            },
            {
                dt: 1581584400,
                main: {
                    temp: 274.63,
                    feels_like: 268.85,
                    temp_min: 274.63,
                    temp_max: 274.63,
                    pressure: 1012,
                    sea_level: 1012,
                    grnd_level: 996,
                    humidity: 80,
                    temp_kf: 0,
                },
                weather: [
                    {
                        id: 804,
                        main: 'Clouds',
                        description: 'overcast clouds',
                        icon: '04d',
                    },
                ],
                clouds: {
                    all: 89,
                },
                wind: {
                    speed: 5.11,
                    deg: 280,
                },
                sys: {
                    pod: 'd',
                },
                dt_txt: '2020-02-13 09:00:00',
            },
            {
                dt: 1581595200,
                main: {
                    temp: 275.26,
                    feels_like: 269.83,
                    temp_min: 275.26,
                    temp_max: 275.26,
                    pressure: 1014,
                    sea_level: 1014,
                    grnd_level: 997,
                    humidity: 78,
                    temp_kf: 0,
                },
                weather: [
                    {
                        id: 804,
                        main: 'Clouds',
                        description: 'overcast clouds',
                        icon: '04d',
                    },
                ],
                clouds: {
                    all: 95,
                },
                wind: {
                    speed: 4.65,
                    deg: 286,
                },
                sys: {
                    pod: 'd',
                },
                dt_txt: '2020-02-13 12:00:00',
            },
            {
                dt: 1581606000,
                main: {
                    temp: 275.14,
                    feels_like: 269.72,
                    temp_min: 275.14,
                    temp_max: 275.14,
                    pressure: 1016,
                    sea_level: 1016,
                    grnd_level: 999,
                    humidity: 70,
                    temp_kf: 0,
                },
                weather: [
                    {
                        id: 804,
                        main: 'Clouds',
                        description: 'overcast clouds',
                        icon: '04d',
                    },
                ],
                clouds: {
                    all: 100,
                },
                wind: {
                    speed: 4.36,
                    deg: 279,
                },
                sys: {
                    pod: 'd',
                },
                dt_txt: '2020-02-13 15:00:00',
            },
            {
                dt: 1581616800,
                main: {
                    temp: 273.47,
                    feels_like: 268.63,
                    temp_min: 273.47,
                    temp_max: 273.47,
                    pressure: 1018,
                    sea_level: 1018,
                    grnd_level: 1001,
                    humidity: 75,
                    temp_kf: 0,
                },
                weather: [
                    {
                        id: 803,
                        main: 'Clouds',
                        description: 'broken clouds',
                        icon: '04n',
                    },
                ],
                clouds: {
                    all: 68,
                },
                wind: {
                    speed: 3.41,
                    deg: 269,
                },
                sys: {
                    pod: 'n',
                },
                dt_txt: '2020-02-13 18:00:00',
            },
            {
                dt: 1581627600,
                main: {
                    temp: 273.04,
                    feels_like: 268.85,
                    temp_min: 273.04,
                    temp_max: 273.04,
                    pressure: 1019,
                    sea_level: 1019,
                    grnd_level: 1002,
                    humidity: 81,
                    temp_kf: 0,
                },
                weather: [
                    {
                        id: 800,
                        main: 'Clear',
                        description: 'clear sky',
                        icon: '01n',
                    },
                ],
                clouds: {
                    all: 3,
                },
                wind: {
                    speed: 2.59,
                    deg: 256,
                },
                sys: {
                    pod: 'n',
                },
                dt_txt: '2020-02-13 21:00:00',
            },
            {
                dt: 1581638400,
                main: {
                    temp: 272.93,
                    feels_like: 268.44,
                    temp_min: 272.93,
                    temp_max: 272.93,
                    pressure: 1020,
                    sea_level: 1020,
                    grnd_level: 1003,
                    humidity: 77,
                    temp_kf: 0,
                },
                weather: [
                    {
                        id: 800,
                        main: 'Clear',
                        description: 'clear sky',
                        icon: '01n',
                    },
                ],
                clouds: {
                    all: 1,
                },
                wind: {
                    speed: 2.88,
                    deg: 230,
                },
                sys: {
                    pod: 'n',
                },
                dt_txt: '2020-02-14 00:00:00',
            },
            {
                dt: 1581649200,
                main: {
                    temp: 273.02,
                    feels_like: 268.77,
                    temp_min: 273.02,
                    temp_max: 273.02,
                    pressure: 1020,
                    sea_level: 1020,
                    grnd_level: 1003,
                    humidity: 77,
                    temp_kf: 0,
                },
                weather: [
                    {
                        id: 803,
                        main: 'Clouds',
                        description: 'broken clouds',
                        icon: '04n',
                    },
                ],
                clouds: {
                    all: 51,
                },
                wind: {
                    speed: 2.55,
                    deg: 196,
                },
                sys: {
                    pod: 'n',
                },
                dt_txt: '2020-02-14 03:00:00',
            },
            {
                dt: 1581660000,
                main: {
                    temp: 273.52,
                    feels_like: 268.38,
                    temp_min: 273.52,
                    temp_max: 273.52,
                    pressure: 1018,
                    sea_level: 1018,
                    grnd_level: 1002,
                    humidity: 73,
                    temp_kf: 0,
                },
                weather: [
                    {
                        id: 803,
                        main: 'Clouds',
                        description: 'broken clouds',
                        icon: '04d',
                    },
                ],
                clouds: {
                    all: 76,
                },
                wind: {
                    speed: 3.79,
                    deg: 168,
                },
                sys: {
                    pod: 'd',
                },
                dt_txt: '2020-02-14 06:00:00',
            },
            {
                dt: 1581670800,
                main: {
                    temp: 276.1,
                    feels_like: 269.67,
                    temp_min: 276.1,
                    temp_max: 276.1,
                    pressure: 1018,
                    sea_level: 1018,
                    grnd_level: 1001,
                    humidity: 57,
                    temp_kf: 0,
                },
                weather: [
                    {
                        id: 804,
                        main: 'Clouds',
                        description: 'overcast clouds',
                        icon: '04d',
                    },
                ],
                clouds: {
                    all: 100,
                },
                wind: {
                    speed: 5.5,
                    deg: 178,
                },
                sys: {
                    pod: 'd',
                },
                dt_txt: '2020-02-14 09:00:00',
            },
            {
                dt: 1581681600,
                main: {
                    temp: 276.63,
                    feels_like: 270.65,
                    temp_min: 276.63,
                    temp_max: 276.63,
                    pressure: 1016,
                    sea_level: 1016,
                    grnd_level: 1000,
                    humidity: 55,
                    temp_kf: 0,
                },
                weather: [
                    {
                        id: 804,
                        main: 'Clouds',
                        description: 'overcast clouds',
                        icon: '04d',
                    },
                ],
                clouds: {
                    all: 100,
                },
                wind: {
                    speed: 4.86,
                    deg: 160,
                },
                sys: {
                    pod: 'd',
                },
                dt_txt: '2020-02-14 12:00:00',
            },
            {
                dt: 1581692400,
                main: {
                    temp: 276.48,
                    feels_like: 270.4,
                    temp_min: 276.48,
                    temp_max: 276.48,
                    pressure: 1015,
                    sea_level: 1015,
                    grnd_level: 998,
                    humidity: 61,
                    temp_kf: 0,
                },
                weather: [
                    {
                        id: 804,
                        main: 'Clouds',
                        description: 'overcast clouds',
                        icon: '04d',
                    },
                ],
                clouds: {
                    all: 100,
                },
                wind: {
                    speed: 5.2,
                    deg: 154,
                },
                sys: {
                    pod: 'd',
                },
                dt_txt: '2020-02-14 15:00:00',
            },
            {
                dt: 1581703200,
                main: {
                    temp: 276.03,
                    feels_like: 270.37,
                    temp_min: 276.03,
                    temp_max: 276.03,
                    pressure: 1015,
                    sea_level: 1015,
                    grnd_level: 998,
                    humidity: 82,
                    temp_kf: 0,
                },
                weather: [
                    {
                        id: 500,
                        main: 'Rain',
                        description: 'light rain',
                        icon: '10n',
                    },
                ],
                clouds: {
                    all: 100,
                },
                wind: {
                    speed: 5.28,
                    deg: 174,
                },
                rain: {
                    '3h': 0.13,
                },
                sys: {
                    pod: 'n',
                },
                dt_txt: '2020-02-14 18:00:00',
            },
            {
                dt: 1581714000,
                main: {
                    temp: 275.49,
                    feels_like: 270.95,
                    temp_min: 275.49,
                    temp_max: 275.49,
                    pressure: 1014,
                    sea_level: 1014,
                    grnd_level: 997,
                    humidity: 97,
                    temp_kf: 0,
                },
                weather: [
                    {
                        id: 500,
                        main: 'Rain',
                        description: 'light rain',
                        icon: '10n',
                    },
                ],
                clouds: {
                    all: 100,
                },
                wind: {
                    speed: 4.07,
                    deg: 209,
                },
                rain: {
                    '3h': 1.31,
                },
                sys: {
                    pod: 'n',
                },
                dt_txt: '2020-02-14 21:00:00',
            },
            {
                dt: 1581724800,
                main: {
                    temp: 274.66,
                    feels_like: 270.91,
                    temp_min: 274.66,
                    temp_max: 274.66,
                    pressure: 1015,
                    sea_level: 1015,
                    grnd_level: 998,
                    humidity: 96,
                    temp_kf: 0,
                },
                weather: [
                    {
                        id: 600,
                        main: 'Snow',
                        description: 'light snow',
                        icon: '13n',
                    },
                ],
                clouds: {
                    all: 100,
                },
                wind: {
                    speed: 2.72,
                    deg: 264,
                },
                snow: {
                    '3h': 1.13,
                },
                sys: {
                    pod: 'n',
                },
                dt_txt: '2020-02-15 00:00:00',
            },
            {
                dt: 1581735600,
                main: {
                    temp: 274.34,
                    feels_like: 269.84,
                    temp_min: 274.34,
                    temp_max: 274.34,
                    pressure: 1016,
                    sea_level: 1016,
                    grnd_level: 1000,
                    humidity: 96,
                    temp_kf: 0,
                },
                weather: [
                    {
                        id: 600,
                        main: 'Snow',
                        description: 'light snow',
                        icon: '13n',
                    },
                ],
                clouds: {
                    all: 100,
                },
                wind: {
                    speed: 3.73,
                    deg: 310,
                },
                snow: {
                    '3h': 0.44,
                },
                sys: {
                    pod: 'n',
                },
                dt_txt: '2020-02-15 03:00:00',
            },
            {
                dt: 1581746400,
                main: {
                    temp: 273.96,
                    feels_like: 268.52,
                    temp_min: 273.96,
                    temp_max: 273.96,
                    pressure: 1019,
                    sea_level: 1019,
                    grnd_level: 1002,
                    humidity: 96,
                    temp_kf: 0,
                },
                weather: [
                    {
                        id: 600,
                        main: 'Snow',
                        description: 'light snow',
                        icon: '13d',
                    },
                ],
                clouds: {
                    all: 100,
                },
                wind: {
                    speed: 4.99,
                    deg: 322,
                },
                snow: {
                    '3h': 0.25,
                },
                sys: {
                    pod: 'd',
                },
                dt_txt: '2020-02-15 06:00:00',
            },
            {
                dt: 1581757200,
                main: {
                    temp: 274.78,
                    feels_like: 268.75,
                    temp_min: 274.78,
                    temp_max: 274.78,
                    pressure: 1021,
                    sea_level: 1021,
                    grnd_level: 1004,
                    humidity: 82,
                    temp_kf: 0,
                },
                weather: [
                    {
                        id: 600,
                        main: 'Snow',
                        description: 'light snow',
                        icon: '13d',
                    },
                ],
                clouds: {
                    all: 100,
                },
                wind: {
                    speed: 5.55,
                    deg: 336,
                },
                snow: {
                    '3h': 0.19,
                },
                sys: {
                    pod: 'd',
                },
                dt_txt: '2020-02-15 09:00:00',
            },
            {
                dt: 1581768000,
                main: {
                    temp: 274.9,
                    feels_like: 268.99,
                    temp_min: 274.9,
                    temp_max: 274.9,
                    pressure: 1022,
                    sea_level: 1022,
                    grnd_level: 1006,
                    humidity: 77,
                    temp_kf: 0,
                },
                weather: [
                    {
                        id: 804,
                        main: 'Clouds',
                        description: 'overcast clouds',
                        icon: '04d',
                    },
                ],
                clouds: {
                    all: 100,
                },
                wind: {
                    speed: 5.24,
                    deg: 339,
                },
                sys: {
                    pod: 'd',
                },
                dt_txt: '2020-02-15 12:00:00',
            },
            {
                dt: 1581778800,
                main: {
                    temp: 274.46,
                    feels_like: 269.07,
                    temp_min: 274.46,
                    temp_max: 274.46,
                    pressure: 1024,
                    sea_level: 1024,
                    grnd_level: 1007,
                    humidity: 80,
                    temp_kf: 0,
                },
                weather: [
                    {
                        id: 804,
                        main: 'Clouds',
                        description: 'overcast clouds',
                        icon: '04d',
                    },
                ],
                clouds: {
                    all: 100,
                },
                wind: {
                    speed: 4.51,
                    deg: 344,
                },
                sys: {
                    pod: 'd',
                },
                dt_txt: '2020-02-15 15:00:00',
            },
            {
                dt: 1581789600,
                main: {
                    temp: 274.44,
                    feels_like: 269.57,
                    temp_min: 274.44,
                    temp_max: 274.44,
                    pressure: 1026,
                    sea_level: 1026,
                    grnd_level: 1009,
                    humidity: 78,
                    temp_kf: 0,
                },
                weather: [
                    {
                        id: 804,
                        main: 'Clouds',
                        description: 'overcast clouds',
                        icon: '04n',
                    },
                ],
                clouds: {
                    all: 100,
                },
                wind: {
                    speed: 3.71,
                    deg: 350,
                },
                sys: {
                    pod: 'n',
                },
                dt_txt: '2020-02-15 18:00:00',
            },
            {
                dt: 1581800400,
                main: {
                    temp: 273.83,
                    feels_like: 269.85,
                    temp_min: 273.83,
                    temp_max: 273.83,
                    pressure: 1027,
                    sea_level: 1027,
                    grnd_level: 1010,
                    humidity: 81,
                    temp_kf: 0,
                },
                weather: [
                    {
                        id: 804,
                        main: 'Clouds',
                        description: 'overcast clouds',
                        icon: '04n',
                    },
                ],
                clouds: {
                    all: 100,
                },
                wind: {
                    speed: 2.42,
                    deg: 333,
                },
                sys: {
                    pod: 'n',
                },
                dt_txt: '2020-02-15 21:00:00',
            },
            {
                dt: 1581811200,
                main: {
                    temp: 272.81,
                    feels_like: 269.33,
                    temp_min: 272.81,
                    temp_max: 272.81,
                    pressure: 1028,
                    sea_level: 1028,
                    grnd_level: 1011,
                    humidity: 85,
                    temp_kf: 0,
                },
                weather: [
                    {
                        id: 804,
                        main: 'Clouds',
                        description: 'overcast clouds',
                        icon: '04n',
                    },
                ],
                clouds: {
                    all: 90,
                },
                wind: {
                    speed: 1.65,
                    deg: 322,
                },
                sys: {
                    pod: 'n',
                },
                dt_txt: '2020-02-16 00:00:00',
            },
            {
                dt: 1581822000,
                main: {
                    temp: 272.48,
                    feels_like: 269.23,
                    temp_min: 272.48,
                    temp_max: 272.48,
                    pressure: 1028,
                    sea_level: 1028,
                    grnd_level: 1011,
                    humidity: 86,
                    temp_kf: 0,
                },
                weather: [
                    {
                        id: 800,
                        main: 'Clear',
                        description: 'clear sky',
                        icon: '01n',
                    },
                ],
                clouds: {
                    all: 2,
                },
                wind: {
                    speed: 1.29,
                    deg: 276,
                },
                sys: {
                    pod: 'n',
                },
                dt_txt: '2020-02-16 03:00:00',
            },
            {
                dt: 1581832800,
                main: {
                    temp: 272.79,
                    feels_like: 269.51,
                    temp_min: 272.79,
                    temp_max: 272.79,
                    pressure: 1028,
                    sea_level: 1028,
                    grnd_level: 1011,
                    humidity: 83,
                    temp_kf: 0,
                },
                weather: [
                    {
                        id: 800,
                        main: 'Clear',
                        description: 'clear sky',
                        icon: '01d',
                    },
                ],
                clouds: {
                    all: 2,
                },
                wind: {
                    speed: 1.3,
                    deg: 200,
                },
                sys: {
                    pod: 'd',
                },
                dt_txt: '2020-02-16 06:00:00',
            },
            {
                dt: 1581843600,
                main: {
                    temp: 275.24,
                    feels_like: 270.64,
                    temp_min: 275.24,
                    temp_max: 275.24,
                    pressure: 1027,
                    sea_level: 1027,
                    grnd_level: 1010,
                    humidity: 69,
                    temp_kf: 0,
                },
                weather: [
                    {
                        id: 801,
                        main: 'Clouds',
                        description: 'few clouds',
                        icon: '02d',
                    },
                ],
                clouds: {
                    all: 21,
                },
                wind: {
                    speed: 3.17,
                    deg: 187,
                },
                sys: {
                    pod: 'd',
                },
                dt_txt: '2020-02-16 09:00:00',
            },
            {
                dt: 1581854400,
                main: {
                    temp: 276.83,
                    feels_like: 271.81,
                    temp_min: 276.83,
                    temp_max: 276.83,
                    pressure: 1026,
                    sea_level: 1026,
                    grnd_level: 1009,
                    humidity: 64,
                    temp_kf: 0,
                },
                weather: [
                    {
                        id: 803,
                        main: 'Clouds',
                        description: 'broken clouds',
                        icon: '04d',
                    },
                ],
                clouds: {
                    all: 59,
                },
                wind: {
                    speed: 3.85,
                    deg: 184,
                },
                sys: {
                    pod: 'd',
                },
                dt_txt: '2020-02-16 12:00:00',
            },
            {
                dt: 1581865200,
                main: {
                    temp: 275.97,
                    feels_like: 270.62,
                    temp_min: 275.97,
                    temp_max: 275.97,
                    pressure: 1024,
                    sea_level: 1024,
                    grnd_level: 1007,
                    humidity: 68,
                    temp_kf: 0,
                },
                weather: [
                    {
                        id: 802,
                        main: 'Clouds',
                        description: 'scattered clouds',
                        icon: '03d',
                    },
                ],
                clouds: {
                    all: 44,
                },
                wind: {
                    speed: 4.33,
                    deg: 180,
                },
                sys: {
                    pod: 'd',
                },
                dt_txt: '2020-02-16 15:00:00',
            },
            {
                dt: 1581876000,
                main: {
                    temp: 275.01,
                    feels_like: 268.65,
                    temp_min: 275.01,
                    temp_max: 275.01,
                    pressure: 1023,
                    sea_level: 1023,
                    grnd_level: 1006,
                    humidity: 72,
                    temp_kf: 0,
                },
                weather: [
                    {
                        id: 803,
                        main: 'Clouds',
                        description: 'broken clouds',
                        icon: '04n',
                    },
                ],
                clouds: {
                    all: 66,
                },
                wind: {
                    speed: 5.74,
                    deg: 178,
                },
                sys: {
                    pod: 'n',
                },
                dt_txt: '2020-02-16 18:00:00',
            },
            {
                dt: 1581886800,
                main: {
                    temp: 274.84,
                    feels_like: 268.31,
                    temp_min: 274.84,
                    temp_max: 274.84,
                    pressure: 1021,
                    sea_level: 1021,
                    grnd_level: 1005,
                    humidity: 71,
                    temp_kf: 0,
                },
                weather: [
                    {
                        id: 804,
                        main: 'Clouds',
                        description: 'overcast clouds',
                        icon: '04n',
                    },
                ],
                clouds: {
                    all: 100,
                },
                wind: {
                    speed: 5.92,
                    deg: 182,
                },
                sys: {
                    pod: 'n',
                },
                dt_txt: '2020-02-16 21:00:00',
            },
            {
                dt: 1581897600,
                main: {
                    temp: 275.02,
                    feels_like: 267.73,
                    temp_min: 275.02,
                    temp_max: 275.02,
                    pressure: 1019,
                    sea_level: 1019,
                    grnd_level: 1002,
                    humidity: 67,
                    temp_kf: 0,
                },
                weather: [
                    {
                        id: 804,
                        main: 'Clouds',
                        description: 'overcast clouds',
                        icon: '04n',
                    },
                ],
                clouds: {
                    all: 100,
                },
                wind: {
                    speed: 6.91,
                    deg: 186,
                },
                sys: {
                    pod: 'n',
                },
                dt_txt: '2020-02-17 00:00:00',
            },
            {
                dt: 1581908400,
                main: {
                    temp: 274.7,
                    feels_like: 267.58,
                    temp_min: 274.7,
                    temp_max: 274.7,
                    pressure: 1017,
                    sea_level: 1017,
                    grnd_level: 1000,
                    humidity: 71,
                    temp_kf: 0,
                },
                weather: [
                    {
                        id: 804,
                        main: 'Clouds',
                        description: 'overcast clouds',
                        icon: '04n',
                    },
                ],
                clouds: {
                    all: 100,
                },
                wind: {
                    speed: 6.74,
                    deg: 192,
                },
                sys: {
                    pod: 'n',
                },
                dt_txt: '2020-02-17 03:00:00',
            },
            {
                dt: 1581919200,
                main: {
                    temp: 274.77,
                    feels_like: 267.99,
                    temp_min: 274.77,
                    temp_max: 274.77,
                    pressure: 1016,
                    sea_level: 1016,
                    grnd_level: 999,
                    humidity: 77,
                    temp_kf: 0,
                },
                weather: [
                    {
                        id: 804,
                        main: 'Clouds',
                        description: 'overcast clouds',
                        icon: '04d',
                    },
                ],
                clouds: {
                    all: 100,
                },
                wind: {
                    speed: 6.46,
                    deg: 195,
                },
                sys: {
                    pod: 'd',
                },
                dt_txt: '2020-02-17 06:00:00',
            },
            {
                dt: 1581930000,
                main: {
                    temp: 276.31,
                    feels_like: 270.12,
                    temp_min: 276.31,
                    temp_max: 276.31,
                    pressure: 1015,
                    sea_level: 1015,
                    grnd_level: 998,
                    humidity: 73,
                    temp_kf: 0,
                },
                weather: [
                    {
                        id: 804,
                        main: 'Clouds',
                        description: 'overcast clouds',
                        icon: '04d',
                    },
                ],
                clouds: {
                    all: 100,
                },
                wind: {
                    speed: 5.76,
                    deg: 200,
                },
                sys: {
                    pod: 'd',
                },
                dt_txt: '2020-02-17 09:00:00',
            },
            {
                dt: 1581940800,
                main: {
                    temp: 278.16,
                    feels_like: 272.56,
                    temp_min: 278.16,
                    temp_max: 278.16,
                    pressure: 1014,
                    sea_level: 1014,
                    grnd_level: 997,
                    humidity: 70,
                    temp_kf: 0,
                },
                weather: [
                    {
                        id: 804,
                        main: 'Clouds',
                        description: 'overcast clouds',
                        icon: '04d',
                    },
                ],
                clouds: {
                    all: 100,
                },
                wind: {
                    speed: 5.16,
                    deg: 201,
                },
                sys: {
                    pod: 'd',
                },
                dt_txt: '2020-02-17 12:00:00',
            },
        ],
        city: {
            id: 703448,
            name: 'Kyiv',
            coord: {
                lat: 50.4333,
                lon: 30.5167,
            },
            country: 'UA',
            timezone: 7200,
            sunrise: 1581484580,
            sunset: 1581520090,
        },
    },
];
const weat = array[0].list;

const generateAllDaysOBJ = arr => {
    const weatherAllInfoObj = {};
    arr.reduce((acc, obj) => {
        if (acc !== moment(obj.dt_txt).format('ddd')) {
            acc = moment(obj.dt_txt).format('ddd');
            weatherAllInfoObj[`${acc}`] = [];
        }
        weatherAllInfoObj[`${acc}`].push(obj);
        return acc;
    }, 0);
    return weatherAllInfoObj;
};

const createWeatherDaysDB = async weatherArr => {
    const weatherObj = generateAllDaysOBJ(weatherArr);
    for (const day in weatherObj) {
        const fillePath = path.resolve(dataBasePath, `${day}.json`);
        const dayArr = JSON.stringify(weatherObj[day]);
        await writeFile(fillePath, dayArr);
    }
};

module.exports = createWeatherDaysDB;
