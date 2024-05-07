
class User {
    
    private _name: string;
    private _lastName: string;
    private _email: string;
    private _password: string;
    private _sure: string
    constructor(
        name: string, lastName: string, 
        email: string, password: string,
        sure:string
    ) {
        
        this._name = name;
        this._lastName = lastName;
        this._email = email;
        this._password = password;
        this._sure= sure;
    }
    
    get name(): string{
        return this._name
    }
    get lastName(): string{
        return this._lastName
    }
    get email(): string{
        return this._email
    }
    
    get password(): string{
        return this._password
    }
    get sure(): string{
        return this._sure
    }
    
    set name(name:string){
        this._name = name
    }
    set lastName(lastName:string){
        this._lastName = lastName
    }
    set email(email:string){
        this._email = email
    }
    set password(password:string){
        this._password = password
    }
    set sure(sure:string){
        this._sure = sure
    }

}

export default User;