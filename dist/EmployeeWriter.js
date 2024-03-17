"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const csv_1 = require("./csv");
const employeeWriter = new csv_1.CSVWriter([
    "id",
    "name",
    "role",
    "salary",
]);
employeeWriter.addRows([
    { id: 1, name: "evan", role: "web dev", salary: 60000 },
    { id: 2, name: "james", role: "design", salary: 80000 },
    { id: 3, name: "damien", role: "director", salary: 40000 },
]);
employeeWriter.save("data/employees.csv");
