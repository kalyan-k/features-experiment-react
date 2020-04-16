import { createContext } from "react";
import { ICompanyEmpDetails } from "../interfaces/company-employee-details.interface";

const initionalCompEmpContext: ICompanyEmpDetails = {
    companyName: "cdk",
    employeeDetails: {
        firstName: "kalyan",
        lastName: "k",
        age: 0,
        gender: "f",
        address: "hyderabad"
    },
    projectDetails: {
        projectName: "cvr",
        totalExp: 10,
        tenure: 5,
        location: "hyderabad",
        address: "hyderabad"
    }
}

export const CompEmpContext = createContext(initionalCompEmpContext);