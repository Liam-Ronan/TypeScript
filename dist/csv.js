"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
class CSVWriter {
    constructor(columns) {
        this.columns = columns;
        this.csv = this.columns.join(" | ") + "\n";
    }
    save(filename) {
        (0, fs_1.appendFileSync)(filename, this.csv);
        this.csv = "\n";
        console.log("File saved to ", filename);
    }
    addRows(values) {
        let rows = values.map((val) => this.formatRow(val));
        this.csv += rows.join(" \n ");
        console.log(this.csv);
    }
    formatRow(p) {
        return this.columns.map((col) => p[col]).join(" | ");
    }
}
const writer = new CSVWriter(["id", "amount", "to", "notes"]);
writer.addRows([
    { id: 1, amount: 50, to: "Yoshi", notes: "design" },
    { id: 2, amount: 92, to: "Mario", notes: "develop" },
    { id: 3, amount: 88, to: "Peach", notes: "Figma" },
    { id: 4, amount: 10, to: "Koopa", notes: "Jira" },
    { id: 5, amount: 23, to: "Bowser", notes: "QA" },
]);
writer.save("./data/payments.csv");
