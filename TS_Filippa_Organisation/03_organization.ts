// @ts-ignore
import { expect, test } from "https://maxime-pigeon.github.io/t/test.js";

type cents = number;
type employer = { name: string; salary: cents };

function newEmployer(name: string, salary: cents): employer {
    return { name, salary };
}

const filippa = newEmployer("Filippa", 20);
const Max = newEmployer('Max', 22);
console.log(filippa);
console.log(Max)

// test("should create a new employer", () => {
//     const actual = newEmployer("a", 1);
//     const expected = { name: "a", salary: 1 };
//     expect(actual).toBe(expected);
// });

type employee = { name: string; salary: cents; employer: employer };

function newEmployee(
    name: string,
    salary: cents,
    employer: employer,
): employee {
    return { name, salary, employer };
}

//const camille = newEmployee("Camile", Max.salary, filippa)
let input = prompt('Quel est votre nom?') as string;
const nouveau = newEmployee(input, 22, filippa)
console.log(nouveau);

// test("should create a new employee", () => {
//     const e = newEmployer("b", 2);
//     const actual = newEmployee("a", 1, e);
//     const expected = { name: "a", salary: 1, employer: e };
//     expect(actual).toBe(expected);
// });

// function changeEmployer(employee: employee, employer: employer): employee {
//     return { name: employee.name, salary: employee.salary, employer: employer };
// }

// test("should change the employee's employer", () => {
//     const employerA = newEmployer("b", 2);
//     const employerB = newEmployer("c", 3);
//     const employee = newEmployee("a", 1, employerA);
//     const actual = changeEmployer(employee, employerB);
//     const expected = newEmployee("a", 1, employerB);
//     expect(actual).toBe(expected);
// });

// type salaried = { salary: cents };
// type org = salaried[];

// function avgSalary(o: org): number {
//     let sum = 0;
//     for (let salaried of o) {
//         sum += salaried.salary;
//     }
//     return sum / o.length;
// }

// test("should calculate the average salary of the organization", () => {
//     const actual = avgSalary([{ salary: 1 }, { salary: 3 }]);
//     const expected = 2;
//     expect(actual).toBe(expected);
// });
