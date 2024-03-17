//********** */
//* CSV Writer Refactor
//********** */

import { appendFileSync } from "fs";

export class CSVWriter<T> {
	//* If we create a new CSV writer and pass in payment as the type - Then keyof T inside an array means we can have an array of strings but the elements(strings inside the array) can only be keys of the object type specified above ^^
	constructor(private columns: (keyof T)[]) {
		this.csv = this.columns.join(" | ") + "\n";
	}

	private csv: string;

	save(filename: string): void {
		appendFileSync(filename, this.csv);
		this.csv = "\n";

		console.log("File saved to ", filename);
	}

	addRows(values: T[]): void {
		let rows = values.map((val) => this.formatRow(val));
		this.csv += rows.join(" \n ");
		console.log(this.csv);
	}

	private formatRow(value: T): string {
		//* columns will match up with the keys of the object - for each column(property) we are getting the value of that column and joining them with a line as seen in the join method below
		return this.columns.map((col) => value[col]).join(" | ");
	}
}
