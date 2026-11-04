// Literal Type
export const union = () => {
    const status = "Pending";
    console.log("The payment Status is: ", status);
};
// Basic Union
export const identity = () => {
    const id = 1011;
    console.log("Your Payment Id is: ", id);
};
// Literal Union
export const roles = () => {
    const userRole = "User";
    console.log("Hello,", userRole);
};
// Object Union
export const userIfno = () => {
    const profession = { id: 101, role: "Student", subjects: ["English", "ICT"] };
    console.log("Your ID is:", profession.id, "Subjects: ", profession.subjects[1]);
};
