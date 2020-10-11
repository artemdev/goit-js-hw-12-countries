import { alert, error } from '@pnotify/core';

//notifications
export const PNotifyAlert = (number) => alert({
    text: ` ${number} countries found. Please, specify exact name`
});

export const PNotifyError = () => error({
text: "Country not found. Please try another name"
});