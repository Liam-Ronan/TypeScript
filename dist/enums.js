"use strict";
//* Enums 101 //*
var Priority;
(function (Priority) {
    Priority[Priority["Lowest"] = 0] = "Lowest";
    Priority[Priority["low"] = 1] = "low";
    Priority[Priority["medium"] = 2] = "medium";
    Priority[Priority["high"] = 3] = "high";
    Priority[Priority["urgent"] = 4] = "urgent";
})(Priority || (Priority = {}));
function addTicket(details, priority) { }
