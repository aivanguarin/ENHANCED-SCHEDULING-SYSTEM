export interface USER {
    id: number,
    name: string,
    username: string,
    role_id: string,
    last_login: string,
    created_at: string,
    updated_at: string,
    updated_by: string
}

export interface INSTRUCTOR {
    id: number,
    username: string,
    last_name: string,
    first_name: string,
    middle_name: string,
    suffix_name: string,
    sex: string,
    is_active: number,
    college_id: number,
    salutation: string,
    admin_function: string,
    admin_hrs: number,
    max_load: number,
    course_id: number,
    created_at: string,
    updated_at: string,
    updated_by: string
}

export interface COLLEGE {
    id: number,
    code: string,
    name: string,
    college_id: number,
    is_active: number
}

export interface SUBJECTS {
    id: number,
    code: string,
    name: string,
    lec_hrs: number,
    lab_hrs: number,
    lec_units: number,
    lab_units: number,
    is_active: boolean
}

export interface COURSE {
    id: number,
    code: string,
    name: string,
    college_id: number,
    is_active: boolean,
}

export interface ROOM {
    id: number,
    code: string,
    name: string,
    is_active: boolean
    college_id: number
}

export interface SEMESTER {
    id: number,
    school_year: string,
    sem: number
    is_active: true,
    campus_director: string, 
}

export interface setupCOLLEGE{
    id: number,
    name: string,
    dean: string
}
export interface setupCOURSE{
    id: number,
    code: string,
    name: string,
    college: string,
    chairman: string
}
export interface setupSECTION{
    id: number,
    section: string,
    course:string,
    year: number
}

