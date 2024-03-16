"use strict";
class CSVWriter {
    constructor(columns) {
        this.columns = columns;
        this.csv = this.columns.join(", ") + '\n';
    }
    addRows(values) {
        let rows = values.map((val) => this.formatRow(val));
        this.csv += rows.join("\n");
        console.log(this.csv);
    }
    formatRow(p) {
        return this.columns.map((col) => p[col]).join(", ");
    }
}
const writer = new CSVWriter(["id", "amount", "to", "notes"]);
writer.addRows([
    { id: 1, amount: 50, to: "yoshi", notes: "design" },
    { id: 2, amount: 30, to: "mario", notes: "dev" },
]);
