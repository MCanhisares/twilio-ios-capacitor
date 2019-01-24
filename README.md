# twilio-ios-capacitor

[![npm](https://img.shields.io/npm/v/twilio-ios-capacitor.svg)](https://www.npmjs.com/package/twilio-ios-capacitor)
[![npm](https://img.shields.io/npm/dt/twilio-ios-capacitor.svg?label=npm%20downloads)](https://www.npmjs.com/package/twilio-ios-capacitor)

This plugin is used to make video calls using Twilio video platform (https://github.com/twilio/) on iOS using Capacitor. Since the current implementation of Ionic/PWA apps on iOS run on top of WKWebView, and as of today (24/01/2019), Apple does not support WebRTC on WKWebView, the only way to work with Twilio Video on this platform is to build it natively.

## Notice
This plugin is currently under active development.

## Installation
* `npm i twilio-ios-capacitor`

## Usage
This plugin uses version 2.6 of the TwilioVideo iOS Library

```ts
import 'twilio-ios-capacitor';
import { Storage, Plugins } from '@capacitor/core';

Plugins.TwilioIosCapacitor.joinTwilioRoom({ roomName: roomName, accessToken: accessToken})
```

## Api


| Method                                               | Default | Type                      | Description                 |
| ---------------------------------------------------- | ------- | ------------------------- | --------------------------- |
| joinTwilioRoom(options: { roomName: string, accessToken: string }) |         | `Promise<void>` | Used to join a room with the provided accessToken |
