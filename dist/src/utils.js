"use strict";
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("react-native");
// import AsyncStorage from '@react-native-community/async-storage'
// import * as Keychain from 'react-native-keychain'
const SecureStore = require("expo-secure-store");
var PinResultStatus;
(function (PinResultStatus) {
    PinResultStatus["initial"] = "initial";
    PinResultStatus["success"] = "success";
    PinResultStatus["failure"] = "failure";
    PinResultStatus["locked"] = "locked";
})(PinResultStatus = exports.PinResultStatus || (exports.PinResultStatus = {}));
// export const hasPinCode = async (serviceName: string) => {
//   return await Keychain.getInternetCredentials(serviceName).then(res => {
//     return !!res && !!res.password
//   })
// }
// export const deletePinCode = async (serviceName: string) => {
//   return await Keychain.resetInternetCredentials(serviceName)
// }
exports.resetInternalStates = async (asyncStorageKeys) => {
    var e_1, _a;
    try {
        // return await AsyncStorage.multiRemove(asyncStorageKeys)
        for (var asyncStorageKeys_1 = __asyncValues(asyncStorageKeys), asyncStorageKeys_1_1; asyncStorageKeys_1_1 = await asyncStorageKeys_1.next(), !asyncStorageKeys_1_1.done;) {
            let key = asyncStorageKeys_1_1.value;
            await SecureStore.deleteItemAsync(key);
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (asyncStorageKeys_1_1 && !asyncStorageKeys_1_1.done && (_a = asyncStorageKeys_1.return)) await _a.call(asyncStorageKeys_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
};
exports.noBiometricsConfig = react_native_1.Platform.select({
    android: {
        // accessControl: Keychain.ACCESS_CONTROL.APPLICATION_PASSWORD,
        accessControl: "ApplicationPassword",
    },
    ios: {}
});
