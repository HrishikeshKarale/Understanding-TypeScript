/*
running lite-srver
*/
// console.log("This is a ts file");


/*
adding types to simple functions
*/
// {
// function add(num1: number, num2: number): number {
// 	return num1 + num2;
// };

// const num1 = 20,
// 	num2 = 8;
// const result = add(num1, num2);

// console.log(result);
// }


/*
Types (Number, Boolean, String...)
*/
// {
// 	function add(num1: number, num2: number, showresult: boolean, phrase: string): number | void {
// 		if (showresult) {
// 			console.log(phrase, num1 + num2);
// 		} else {
// 			return num1 + num2;
// 		}
// 	};

// 	const num1 = 20,
// 		num2 = 8,
// 		printResult = true,
// 		resultPhrase = "The result is ";

// 	add(num1, num2, printResult, resultPhrase);

// 	/*
// 		Object
// 	*/
// 	{
// 		//not recomended
// 		const person: {
// 			name: string;
// 			age: number;
// 		} = {
// 			name: "Paddington",
// 			age: 23
// 		};
// 		console.log("Object", person.name);

// 		//recomended
// 		const person1 = {
// 			name: "Nick",
// 			age: 23
// 		};
// 		console.log("Object", person1.name);
// 	}

// 	/*
// 	Arrays
// 	*/
// 	{
// 		const person3 = {
// 			name: "Nick",
// 			age: 23,
// 			hobbies: ["sports", "cooking"]
// 		};
// 		let favActivities: string[];
// 		favActivities = ["swimming"];
// 		console.log("Arrys", person3.hobbies, favActivities);

// 		//allows explicit functions to run as it knows the type of varible
// 		for (const hobby of person3.hobbies) {
// 			console.log("Arrys", hobby.toUpperCase());
// 		}
// 	}

// 	/*
// 	Tuple fixed length, fixed type arrrays (does not exist in JS but does in some other programming languages)
// 	*/
// 	{
// 		//ts assumes it as this and allows the following modifications which aere not acceptable
// 		const person4: {
// 			name: string;
// 			age: number;
// 			hobbies: string[];
// 			role: (number | string)[]
// 		} = {
// 			name: "Nick",
// 			age: 23,
// 			hobbies: ["sports", "cooking"],
// 			role: [2, 'author']
// 		};
// 		person4.role.push("admin"); //still works but not ideal
// 		person4.role[1] = (1); //still works but not ideal
// 		console.log("Tuple", person4);


// 		//ts assumes it as this and allows the following modifications which aere not acceptable
// 		const person5: {
// 			name: string;
// 			age: number;
// 			hobbies: string[];
// 			role: [number, string] //tells ts that first element is a number and second is a string
// 		} = {
// 			name: "Nick",
// 			age: 23,
// 			hobbies: ["sports", "cooking"],
// 			role: [2, 'author']
// 		};
// 		person5.role.push("admin"); //still works but not ideal as push works in tupleand can push any value
// 		// person5.role[1] = (1); //now throws an error
// 		console.log("Tuple", person5)
// 	}

// 	/*
// 	Enum exists in other programming languages but  not in JS
// 	*/
// 	{
// 		// default enum
// 		enum Roles {
// 			ADMIN, READ_ONLY, AUTHOR
// 		}; //assigns 0, 1, 2 as keys to the enum
// 		const person6 = {
// 			name: "Nick",
// 			age: 23,
// 			hobbies: ["sports", "cooking"],
// 			role: Roles.ADMIN
// 		};
// 		console.log("Enum", person6)
// 		if (person6.role === Roles.AUTHOR) {
// 			console.log("Enum", "role is Author");
// 		} else if (person6.role === Roles.ADMIN) {
// 			console.log("Enum", "role is Admin");
// 		} else if (person6.role === Roles.READ_ONLY) {
// 			console.log("Enum", "role is readOnly");
// 		}


// 		// custom enum
// 		enum Roles1 {
// 			ADMIN = 5, READ_ONLY, AUTHOR
// 		}; //assigns 5, 6, 7 as keys to the enum
// 		const person7 = {
// 			name: "Nick",
// 			age: 23,
// 			hobbies: ["sports", "cooking"],
// 			role: Roles1.ADMIN
// 		};
// 		console.log("Enum", person7)
// 		if (person7.role === Roles1.AUTHOR) {
// 			console.log("Enum", "role is Author");
// 		} else if (person7.role === Roles1.ADMIN) {
// 			console.log("Enum", "role is Admin");
// 		} else if (person7.role === Roles1.READ_ONLY) {
// 			console.log("Enum", "role is readOnly");
// 		}

// 		// custom enum
// 		enum Roles2 {
// 			ADMIN = "Administrator",
// 			READ_ONLY = 6,
// 			AUTHOR = 100
// 		}; //assigns 5, 6, 7 as keys to the enum
// 		const person8 = {
// 			name: "Nick",
// 			age: 23,
// 			hobbies: ["sports", "cooking"],
// 			role: Roles2.ADMIN
// 		};
// 		console.log("Enum", person8)
// 		if (person8.role === Roles2.AUTHOR) {
// 			console.log("Enum", "role is Author");
// 		} else if (person8.role === Roles2.ADMIN) {
// 			console.log("Enum", "role is Admin");
// 		} else if (person8.role === Roles2.READ_ONLY) {
// 			console.log("Enum", "role is readOnly");
// 		}
// 	}

// 	/*
// 	Any is the most flexible as it does not tell ts anything and allow any type for the variable
// 	not recomended to use as its same to vanila js and does not do an ts checks
// 	*/
// }


/*
	Exploring union type
*/
// {
// 	//should work with numbers and strings
// 	function combnine(num1: number | string,
// 		num2: number | string,
// 		resultType: string): number | string {
// 		let result: number | string;
// 		//sometines runtime checks might be required when using union types as ts does not know about the exact type of input from the union
// 		if (typeof num1 === "number" && typeof num2 === "number") {
// 			result = num1 + num2;
// 		} else {
// 			result = num1.toString() + num2.toString();
// 		}

// 		if (resultType === "as-string") {
// 			return result.toString();
// 		} else {
// 			return +result;
// 		}
// 	};
// 	const combineAges = combnine("12", "23", "as-number");
// 	console.log("union type", combineAges);
// 	const combinestr = combnine(12, 23, "as-string");
// 	console.log("union type", combinestr);
// 	const combinestr2 = combnine("Amit", "23", "as-string");
// 	console.log("union type", combinestr2);

// 	//literal Strings
// 	//does not allow any other value other than as-number or as-string for resultType
// 	function combnine1(num1: number | string,
// 		num2: number | string,
// 		resultType: "as-number" | "as-string"): number | string {
// 		let result1: number | string;
// 		//sometines runtime checks might be required when using union types as ts does not know about the exact type of input from the union
// 		if (typeof num1 === "number" && typeof num2 === "number") {
// 			result1 = num1 + num2;
// 		} else {
// 			result1 = num1.toString() + num2.toString();
// 		}

// 		if (resultType === "as-string") {
// 			return result1.toString();
// 		} else {
// 			return +result1;
// 		}
// 	};
// 	const combineAges1 = combnine1("12", "23", "as-number");
// 	console.log("literal type", combineAges1);
// 	const combinestr3 = combnine1(12, 23, "as-string");
// 	console.log("literal type", combinestr3);
// 	const combinestr4 = combnine1("Amit", "23", "as-string");
// 	console.log("literal type", combinestr4);

// 	//type alias
// 	type Combinable = number | string
// 	function combnine2(num1: Combinable,
// 		num2: Combinable,
// 		resultType: "as-number" | "as-string"): Combinable {
// 		let result1: Combinable;
// 		//sometines runtime checks might be required when using union types as ts does not know about the exact type of input from the union
// 		if (typeof num1 === "number" && typeof num2 === "number") {
// 			result1 = num1 + num2;
// 		} else {
// 			result1 = num1.toString() + num2.toString();
// 		}

// 		if (resultType === "as-string") {
// 			return result1.toString();
// 		} else {
// 			return +result1;
// 		}
// 	};
// 	const combineAges2 = combnine2("12", "23", "as-number");
// 	console.log("alias type", combineAges2);
// 	const combinestr1 = combnine2(12, 23, "as-string");
// 	console.log("alias type", combinestr1);
// 	const combinestr5 = combnine2("Amit", "23", "as-string");
// 	console.log("alias type", combinestr5);
// }


/*
 Function type
*/
// {
// 	//declaring a variable as function and using it
// 	function add1(num1: number, num2: number): number {
// 		return num1 + num2;
// 	};
// 	function printResult(num: number): void {
// 		console.log("Result", num);
// 	}
// 	printResult1(add1(4, 2));
// 	let combineValues: Function;
// 	combineValues = add1;
// 	// combineValues = 5;// would have been possible if combineValue was not typecasted as a function and would have resulted in a run time error
// 	console.log("function Types", combineValues(2, 3));

// 	//declaring function types with a return type
// 	function add2(num1: number, num2: number): number {
// 		return num1 + num2;
// 	};
// 	function printResult1(num: number): void {
// 		console.log("Result", num);
// 	}
// 	printResult1(add2(4, 2));
// 	let combineValues1: (a: number, b: number) => number;
// 	combineValues1 = add2;
// 	// combineValues1 = 5;// thros error as a number cannot be assigned to a function type
// 	console.log("function Types", combineValues1(2, 3));


//function type and callback
// function add3(num1: number, num2: number): number {
// 	return num1 + num2;
// };
// function printResult2(num: number): void {
// 	console.log("Result", num);
// }
// function addAndHandle(num1: number, num2: number, callbackFunc: (num: number) => void) {
// 	const result = num1 + num2;
// 	callbackFunc(result);

// }
// printResult2(add3(4, 2));
// let combineValues2: (a: number, b: number) => number;
// combineValues2 = add3;
// // combineValues1 = 5;// thros error as a number cannot be assigned to a function type
// console.log("function callback", combineValues2(2, 3));

// addAndHandle(10, 20, num => { console.log(num); })
// }



/*
type Unknown
*/
// {
// 	let userInput: unknown,
// 		userName: string;

// 	userInput = 5;
// 	userInput = "max";
// 	// userName = userInput;//throws an error as unknown can be of any type
// 	if (typeof userInput === "string") {
// 		userName = userInput;
// 	}
// }

/*
never type
*/
// {
// 	//the below function never returns an error. It either crases the app or goes to catch
// 	//void is usually assumed as never in older code
// 	//newer code shoud use never if a code never returns anything
// 	function generateErr(message: string, code: number): never {
// 		throw { message: message, errorCode: code };
// 	}

// 	generateErr("unknown type of variable nice", 301);
// }




