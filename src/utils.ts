import { Platform } from "react-native";
import * as SecureStore from "expo-secure-store";

export enum PinResultStatus {
  initial = "initial",
  success = "success",
  failure = "failure",
  locked = "locked"
}

export const resetInternalStates = async (asyncStorageKeys: string[]) => {
  for await (const key of asyncStorageKeys) {
    await SecureStore.deleteItemAsync(key);
  }
};

export const noBiometricsConfig = Platform.select({
  android: {
    accessControl: "ApplicationPassword"
  },
  ios: {}
});
