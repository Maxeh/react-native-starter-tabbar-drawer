# React-native-starter-tabbar-drawer
Support: Android / iOS

This starter package provides a simple and basic structure for a react-native app. It includes and/or extends the following packages:

* [NativeBase](https://github.com/GeekyAnts/NativeBase)
* [Navigation](https://github.com/react-community/react-navigation)
* [Ripple Effect](https://github.com/n4kz/react-native-material-ripple)
* [Tabs](https://github.com/aksonov/react-native-tabs)
* [i18n](https://github.com/AlexanderZaytsev/react-native-i18n) 

And that's how it looks like in the emulator:

![alt text](https://raw.githubusercontent.com/Maxeh/markdown/master/react-native-starter-tabbar-drawer/demo.gif)

If you want to create your own app with only the code from this repo, then follow these steps:

1) `react-native init YourAppName`
2) `cd ./YourAppName`
3) Copy the following files to your own project:
    - `src` folder from this repo
    - `index.android.js` and `index.ios.js` from this repo
    - `package.json` from this repo
4) Execute `npm install`
5) Execute `react-native link`
6) Run `react-native run-android` (you might have to run this twice on first startup)