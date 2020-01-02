# aclaunch

[![Build Status](https://travis-ci.org/pinecat/aclaunch.svg?branch=master)](https://travis-ci.org/pinecat/aclaunch)

---

## Introduction
While I know I'm not the only one, it's still difficult for me to contain my excitement for the upcoming Animal Crossing: New Horizons.  As such, I built a very simple [React](https://reactjs.org) app which counts down the days, hours, minutes, and seconds until the release of ACNH on March 20, 2020.  Wallpaper comes courtesy of Mr_Pioupiou.

You can find the website here: [www.aclaunch.net](https://www.aclaunch.net).

## Building
If you're interested in building this website on your own, you can do so with `yarn`.  I recommend using `serve` to serve the production build.  See below:
```sh
$ git clone https://github.com/pinecat/aclaunch.git
$ cd aclaunch
$ yarn install
$ yarn build
$ yarn start
```
You may run the development version with the `yarn dev` command.  The `yarn start` command will launch a production version of the build (assuming you have built the app) using `serve`.  Check `package.json` if you are confused about the scripts.

## Contributing
If you're interested in contributing to the website, feel free to message me directly, or simply submit a pull request.