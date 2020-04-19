export interface ICompanyEmpDetails {
    companyName: string;
    employeeDetails: IEmployeeDetails;
    projectDetails: IProjectDetails;
}

export interface IAddress {
    street: string,
    city: string,
    zipcode: string,
    county: string,
    country: string
}

export interface IEmployeeDetails {
    firstName: string;
    lastName: string;
    gender: string;
    age?: number;
    address: IAddress;
}

export interface IProjectDetails {
    projectName: string;
    tenure?: number;
    totalExp?: number;
    location: string;
    address: IAddress;
    verified: boolean;
}