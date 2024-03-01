# Weather Forecast App

## Table of Contents

- [General Info](#general-information)
- [Built with](#built-with)
- [Other Plugins](#other-plugins)
- [Setup](#setup)
- [Other commands](#other-commands)
- [Room for Improvement](#room-for-improvement)

## General Information

- This is a simple but fully responsive project to fetch weather information from [OpenWeather](https://openweathermap.org/current) and display it on a web app
- It accumplish two tasks:
  - Users can search for a city and see the weather forecaset for it
  - Users can add and remove cities from a list and see the current weather data for all listedcities.
- This is an exercise to show skill in react, redux (redux toolkit), typescript

## Built with

- [VITE - V5.1.4](https://vitejs.dev/)
- [React - V18.2.0](https://react.dev/)
- [Redux - V9.1.0](https://redux.js.org/)
- [Redux toolkit - V9.1.0](https://redux-toolkit.js.org/)
- [Styled Components - 5.1.34](https://styled-components.com/)
- [typescript - 5.2.2](https://www.typescriptlang.org/)
- [eslint - 8.56.0](https://eslint.org/)

## Other Plugins

- [use-debounce - V10.O.O](https://www.npmjs.com/package/use-debounce)
- [react-icons-kit - V2.0.0](https://react-icons-kit.vercel.app/)
- [react-spinners-kit -V1.9.1 ](https://dmitrymorozoff.github.io/react-spinners-kit/)

## Setup

1. create and `.env` on the root of the project

```sh
VITE_API_KEY=<API-KEY>
```

2. Install the dependencies and devDependencies and start the server.

```sh
npm i
npm run dev
```

## Other commands

1. to build the project

```sh
npm run build
```

2. lint

```sh
npm run lint
```

3. preview

```sh
npm run preview
```

## Room for Improvement

This was a quick project build in no more than

Room for improvement:

- include tests (still doing it)
- Make all components completely reusable. Please see `Button` Component to get an idea of my ideal reusable components.
  - It is styled with styled components.
  - It can accept all button attributes.
  - It forces you to use the type attribute to ensure correct behavior.
  - It has extra variants to meet a project's needs (this should be extended).
- As done on the `App.tsx` page, all components should have separation of concerns. We can use custom hooks to achieve it.
