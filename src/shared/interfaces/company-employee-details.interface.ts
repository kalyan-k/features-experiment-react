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
    age?: number | null;
    address: IAddress;
}

export interface IProjectDetails {
    projectName: string;
    tenure?: number | null;
    totalExp?: number | null;
    location: string;
    address: IAddress;
    verified: boolean;
}