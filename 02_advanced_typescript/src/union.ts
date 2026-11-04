// Literal Type
export const union = () => {
    type Status = "Pending"

    const status: Status = "Pending" 

    console.log("The payment Status is: ", status)
}

// Basic Union
export const identity = () => {
    type Id = string | number
    const id : Id = 1011

    console.log("Your Payment Id is: ", id)
}

// Literal Union
export const roles = () => {
    type Role = "User" | "Admin"
    const  userRole : Role = "User"

    console.log("Hello,", userRole)
}

// Object Union
export const userIfno = () => {
    type ScienceStudent = {id: number, role: "Student", subjects: string[]}
    type ScienceTeacher = {id: number, role: "Teacher", depertment: string[]}

    type Profession = ScienceStudent | ScienceTeacher

    const profession : Profession = {id : 101, role : "Student", subjects: ["English", "ICT"]}

    console.log("Your ID is:", profession.id, "Subjects: ", profession.subjects[1])
}
