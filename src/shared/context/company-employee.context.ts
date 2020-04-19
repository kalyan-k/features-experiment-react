import { createContext, useState } from "react";
import { ICompanyEmpDetails } from "../interfaces/company-employee-details.interface";

const initialCompEmpContext: ICompanyEmpDetails = {
    companyName: "cdk",
    employeeDetails: {
        firstName: "kalyan",
        lastName: "k",
        age: 0,
        gender: "f",
        address: {
            street: "",
            city: "",
            zipcode: "",
            county: "",
            country: ""
        }
    },
    projectDetails: {
        projectName: "cvr",
        totalExp: 10,
        tenure: 5,
        location: "hyderabad",
        address: {
            street: "",
            city: "",
            zipcode: "",
            county: "",
            country: ""
        },
        verified: false
    }
}

const [companyEmpDetails, setCompanyEmpDetails] = useState(initialCompEmpContext);

export const CompEmpContext = createContext({ companyEmpDetails, setCompanyEmpDetails });