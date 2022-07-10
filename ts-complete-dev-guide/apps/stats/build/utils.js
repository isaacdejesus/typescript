"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateStringToDate = void 0;
const dateStringToDate = (dateString) => {
    //ex 28/10/2018 becomes ['28', '10', '2019']
    const dateParts = dateString
        .split('/')
        .map((value) => {
        return parseInt(value);
    });
    return new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);
};
exports.dateStringToDate = dateStringToDate;
