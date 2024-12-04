
export interface ApiResponseModel{
    message: string,
    result: boolean,
    data: any
}

export interface IRole{
    roleId: number,
    role: string
}

export interface IDesignation{
    designationId: number,
    designation: string
}

export interface Employee{
    empName: string,
    empId : string,
    empCode : string,
    empEmailId : string,
    empDesignation :string,
    role : string
}
