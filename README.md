# React Native Typescript Base

This is a base of an React Native project made with Typescript, cofigured with:

- [React Navigation](https://reactnavigation.org/)
- [Expo](https://expo.io/)
- [Axios](https://github.com/axios/axios)
- [ESLint](https://eslint.org)
- [Prettier](https://prettier.io/)

## 📝 Prerequisites

- [Yarn](https://yarnpkg.com/);
- [Java SE Development Kit](https://www.oracle.com/java/technologies/javase-jdk8-downloads.html)
- Android SDK installed and `ANDROID_HOME` defined for bash. [How to do it](https://www.decoide.org/react-native/docs/android-setup.html);
- [Linux configured for many watch folders](https://www.ibm.com/support/knowledgecenter/SSL85S_3.9.6/hsts_admin_aix/dita-watchfolder/hsts_admin_aix_linux_wf_config.html). Optional

## 🏁 Getting Started

Run in bash:

```bash
# Install dependencies
yarn install

# Keeps running Metro Bundler
yarn start
```

Connect to an Emulator, or connect a physical device, and run

```bash
yarn android
# or
yarn ios
```

## 🔧 Running the tests

Run in bash:

```bash
yarn test
```

### 🎈 Running coding style tests

Run in bash:

```bash
# Find coding style errors and report
yarn lint

# or

# Find coding style errors; try to fix, otherwise, report
yarn lint:fix
```
