This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Getting Started

>**Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

## Step 3 Setup

### Obtain API Keys

You must add an API key for the Maps SDK to any app that uses the SDK.

Before you start using the Maps SDK, you need a project with a billing account and the Maps SDK (both for Android and iOS) enabled. Google requires you to have a valid billing account setup, although likely you will not be charged anything. See the [Should you use this plugin?](about/should-you-use-this-plugin.md) section for more information on pricing.

Extensive and detailed steps can be found here:

- [Android](https://developers.google.com/maps/documentation/android-sdk/get-api-key)
- [iOS](https://developers.google.com/maps/documentation/ios-sdk/get-api-key)

You should have two API keys by the end of this step. Let's proceed.

### Adding API keys to your App

#### Android

Please follow the [official Google guide](https://developers.google.com/maps/documentation/android-sdk/config#step_2_add_your_api_key_to_the_project). See "Step 2: Add your API key to the project". You can skip Step 1, since this plugin already takes care of that.

Alternatively, you can (**but really should not**) use the following quick and dirty way:

In your `AndroidManifest.xml` add the following lines:

```diff
<application>
...
+  <meta-data
+    android:name="com.google.android.geo.API_KEY"
+    android:value="YOUR_ANDROID_MAPS_API_KEY"/>
...
</application>
```

where `YOUR_ANDROID_MAPS_API_KEY` is the API key you aqcuired in the previous step.

Again: please **do not** use this alternative method for anything other than testing purposes, since you **will** leak your API Key.