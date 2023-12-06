"use strict";
// union型
var unionData;
unionData = "Tokyo";
unionData = 100;
// unionData = true;
console.log(unionData, typeof unionData);
// any型 = JavaScript（動的型付けで決定）
var data;
data = 10;
data = "Hello";
data = true;
data = undefined;
data = null;
console.log(data, typeof data);