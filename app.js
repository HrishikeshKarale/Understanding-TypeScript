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
{
    function add(num1, num2, showresult, phrase) {
        if (showresult) {
            console.log(phrase, num1 + num2);
        }
        else {
            return num1 + num2;
        }
    }
    ;
    var num1 = 20, num2 = 8, printResult = true, resultPhrase = "The result is ";
    add(num1, num2, printResult, resultPhrase);
    /*
        Object
    */
    {
        //not recomended
        var person = {
            name: "Paddington",
            age: 23
        };
        console.log("Object", person.name);
        //recomended
        var person1 = {
            name: "Nick",
            age: 23
        };
        console.log("Object", person1.name);
    }
    /*
    Arrays
    */
    {
        var person3 = {
            name: "Nick",
            age: 23,
            hobbies: ["sports", "cooking"]
        };
        var favActivities = void 0;
        favActivities = ["swimming"];
        console.log("Arrys", person3.hobbies, favActivities);
        //allows explicit functions to run as it knows the type of varible
        for (var _i = 0, _a = person3.hobbies; _i < _a.length; _i++) {
            var hobby = _a[_i];
            console.log("Arrys", hobby.toUpperCase());
        }
    }
    /*
    Tuple fixed length, fixed type arrrays (does not exist in JS but does in some other programming languages)
    */
    {
        //ts assumes it as this and allows the following modifications which aere not acceptable
        var person4 = {
            name: "Nick",
            age: 23,
            hobbies: ["sports", "cooking"],
            role: [2, 'author']
        };
        person4.role.push("admin"); //still works but not ideal
        person4.role[1] = (1); //still works but not ideal
        console.log("Tuple", person4);
        //ts assumes it as this and allows the following modifications which aere not acceptable
        var person5 = {
            name: "Nick",
            age: 23,
            hobbies: ["sports", "cooking"],
            role: [2, 'author']
        };
        person5.role.push("admin"); //still works but not ideal as push works in tupleand can push any value
        // person5.role[1] = (1); //now throws an error
        console.log("Tuple", person5);
    }
    /*
    Enum exists in other programming languages but  not in JS
    */
    {
        var Roles = void 0;
        (function (Roles) {
            Roles[Roles["ADMIN"] = 0] = "ADMIN";
            Roles[Roles["READ_ONLY"] = 1] = "READ_ONLY";
            Roles[Roles["ATHOR"] = 2] = "ATHOR";
        })(Roles || (Roles = {}));
        ;
        var person6 = {
            name: "Nick",
            age: 23,
            hobbies: ["sports", "cooking"],
            role: Roles.ADMIN
        };
        console.log("Enum", person6);
        if (person6.role === Roles.AUTHOR) {
            console.log("Enum", "role is Author");
        }
        else if (person6.role === Roles.ADMIN) {
            console.log("Enum", "role is Author");
        }
        else if (person6.role === Roles.READ_ONLY) {
            console.log("Enum", "role is readOnly");
        }
    }
}
