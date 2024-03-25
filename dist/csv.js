"use strict";
//******************* */
//* CSV Writer Refactor
//******************* */
Object.defineProperty(exports, "__esModule", { value: true });
exports.CSVWriter = void 0;
const fs_1 = require("fs");
class CSVWriter {
    //* If we create a new CSV writer and pass in payment as the type - Then keyof T inside an array means we can have an array of strings but the elements(strings inside the array) can only be keys of the object type specified above ^^
    constructor(columns) {
        this.columns = columns;
        this.csv = this.columns.join(",") + "\n";
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
    formatRow(value) {
        //* columns will match up with the keys of the object - for each column(property) we are getting the value of that column and joining them with a line as seen in the join method below
        return this.columns.map((col) => value[col]).join(",");
    }
}
exports.CSVWriter = CSVWriter;
