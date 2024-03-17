import { CSVWriter } from "./csv";

interface Payment {
	id: number;
	amount: number;
	to: string;
	notes: string;
}

//* Everything that is passed in here has to be a key of the Payment Object
const paymentWriter = new CSVWriter<Payment>(["id", "amount", "to", "notes"]);

paymentWriter.addRows([
	{ id: 1, amount: 50, to: "Yoshi", notes: "design" },
	{ id: 2, amount: 92, to: "Mario", notes: "develop" },
	{ id: 3, amount: 88, to: "Peach", notes: "Figma" },
	{ id: 4, amount: 10, to: "Koopa", notes: "Jira" },
	{ id: 5, amount: 23, to: "Bowser", notes: "QA" },
]);

paymentWriter.save("./data/payment.csv");
