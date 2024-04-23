class User {
    name: string;
    lastName: string;
    email: string;
    password: string;
    phoneNumber: string;
    sure: string;
    constructor(
        name: string, lastName: string, 
        email: string, password: string, 
        phoneNumber: string, sure: string
    ) {
        
        this.name = name;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.phoneNumber = phoneNumber;
        this.sure= sure;
    }
}

export default User;