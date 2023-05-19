# Genie mobile

## Installation

### Dependencies

```bash
yarn
```

```bash
cd ios
pod install
```

### Run it

### ios

1. To run it open xcode, select simulator or your device, select team in Signing & Capabilities, and click start
2. Execute yarn ios command to run it on simulator

### android

Add file prod.jks into genie-mobile/android/app/prod.jks, replace keys with corresponding values

```gradle
        release {
            storeFile file(GENIE_UPLOAD_STORE_FILE)
            storePassword GENIE_UPLOAD_STORE_PASSWORD
            keyAlias GENIE_UPLOAD_KEY_ALIAS
            keyPassword GENIE_UPLOAD_STORE_PASSWORD
        }
```

To build you can use Android Studio, or execute the following commands, it's for development build

```bash
build:android:prod:debug
```

generate production APK

```bash
build:android:prod:release
```

generate production ABB bundle

```bash
build:android:prod:release-abb
```
