export interface ICompanyEmpDetails {
    companyName: string;
    employeeDetails: IEmployeeDetails;
    projectDetails: IProjectDetails;
}

export interface IEmployeeDetails {
    firstName: string;
    lastName: string;
    gender: string;
    age: number;
    address: string;
}

export interface IProjectDetails {
    projectName: string;
    tenure: number;
    totalExp: number;
    location: string;
    address: string;
}