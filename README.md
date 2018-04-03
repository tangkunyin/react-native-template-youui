# The scaffold for react-native

> YouUI and MobX React Native Template

It's an experienced template for a new react native project with youui and mobx architecture.


## 1. Prepare

Install Dependencies:

1. NVM( ~> 0.33.8 )

   `$ brew update && brew install nvm`


1. NodeJS( ~> 8.10.0LTS )

   `$ nvm install v8.10.0`

2. yarn

    `$ npm install -g yarn`

3. rnpm

    `npm install -g rnpm`

On iOS platform, `Xcode` is needed.

On Android platfrom, `Android studio` or `Genymotion` is needed.

> Btw, if you are not familiar with iOS and Android and coding on Windows, `CRNA` may be more suitable for you.

After finish install dependencies, you can launch the template easily.

## 2. Install

> Replace `xxx` to your real project name.

1. `$ npm install -g react-native-cli`
2. `$ react-native init xxx --template youui`
3. `$ cd xxx`
4. `$ cat gitignore >> .gitignore && rm gitignore`

> Notice: The devDependencies can not be installed automatically so far (0.54.4). So you have to update it manually
> The more detail here is: https://github.com/facebook/react-native/pull/18164

At last, launch it to check.

iOS:

```bash
react-native run-ios
```

Android:

```bash
react-native run-android
```

Done.

You need start an iOS simulator or android simulator before running your app, see more: https://facebook.github.io/react-native/docs/getting-started.html


## 3. Some Advice

Question: **How to rename my project**

1. Update the name of `package.json`
2. Update the name of `index.ios.js` && `index.android.js`
3. `rm -rf ios && rm -rf android;`
4. `react-native upgrade`
5. `npm install`

Question: **How to change the package-manager default port**

1. Update the scripts of `package.json`
2. add `"postinstall": "./post_install.sh"`
3. npm install or yarn install

It's all


## 4. Other useful resources

1. [react layouts](https://facebook.github.io/react-native/docs/layout-props.html)
2. [mobx best practices in react-native](http://mobxjs.github.io/mobx/best/pitfalls.html)


## 5. Code style recommend

1. Use ES7
2. Four spaces instead of tab
3. ESLint Enable

## 6. Built with

[react-native-template-youui](https://github.com/tangkunyin/react-native-template-youui)

Thanks to [FaceBook](http://facebook.github.io/react-native/) and [80% team](https://www.80percent.io)


