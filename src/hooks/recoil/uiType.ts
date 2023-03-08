import { atom } from "recoil";

export const UiTypeStateKey = 'ui-type-state';

export const UiType = {
    CHAKRA: 'chakra',
    ANTD: 'antd',
}

export const UiTypeState = atom({
    key: UiTypeStateKey, // unique ID (with respect to other atoms/selectors)
    default: UiType.ANTD, // default value (aka initial value)
});