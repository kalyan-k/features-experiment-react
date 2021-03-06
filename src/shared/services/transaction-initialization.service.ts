import { ICompanyEmpDetails } from "../interfaces/company-employee-details.interface";

const initializeTrans = (): ICompanyEmpDetails => {
    return {
        companyName: "",
        employeeDetails: {
            firstName: "",
            lastName: "",
            age: 0,
            gender: "",
            address: {
                street: "",
                city: "",
                zipcode: "",
                county: "",
                country: ""
            }
        },
        projectDetails: {
            projectName: "",
            totalExp: 0,
            tenure: 0,
            location: "",
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
}

const getTrans = (): ICompanyEmpDetails => {
    return {
        companyName: "CDK",
        employeeDetails: {
            firstName: "Kalyan",
            lastName: "K",
            age: 30,
            gender: "m",
            address: {
                street: "1100 Town and Country",
                city: "Orange",
                zipcode: "23423",
                county: "Orange",
                country: "USA"
            }
        },
        projectDetails: {
            projectName: "CVR",
            totalExp: 10,
            tenure: 5,
            location: "Hyderabad",
            address: {
                street: "Raheja Mind Space",
                city: "Hyderabad",
                zipcode: "500081",
                county: "Hyderabad",
                country: "India"
            },
            verified: true
        }
    }
}

const TransactionService = {
    initializeTrans,
    getTrans
}

export default TransactionService;