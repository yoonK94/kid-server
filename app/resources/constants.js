// app/resources/constants.js

'use strict';

const fullDayMilliseconds = 24 * 60 * 60 * 1000;
const emailRegex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/; // eslint-disable-line no-control-regex
const status = {
    active: 'ACTIVE',
    pending: 'PENDING',
    deleted: 'DELETED',
};
const amenities = {
    parking: 'PARKING',
    playground: 'PLAYGROUND',
    cafe: 'CAFE',
    daycare: 'DAYCARE',
};
const SettingTypes = {
    admin: 'ADMIN',
    email: 'EMAIL',
    password: 'PASSWORD',
    store: 'STORE',
    menu: 'MENU',
    product: 'PRODUCT',
    bankAccount: 'BANK_ACCOUNT',
};

exports.status = status;
exports.fullDayMilliseconds = fullDayMilliseconds;
exports.emailRegex = emailRegex;
exports.amenities = amenities;
exports.SettingTypes = SettingTypes;
