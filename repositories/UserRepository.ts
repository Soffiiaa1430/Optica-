import db from '../config/config-db';
import User from '../Dto/UserDto';

class UserRepository {

    static async add(user: User){
        const sql = 'INSERT INTO usuario ( name, lastName, email, password, phoneNumber,sure) VALUES (?,?, ?, ?, ?, ?)';
        const values = [user.name, user.lastName, user.email, user.password, user.phoneNumber, user.sure];
        return db.execute(sql, values);
    }
}


export default UserRepository;