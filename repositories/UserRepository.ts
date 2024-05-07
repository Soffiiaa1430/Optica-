import db from '../config/config-db';
import User from '../Dto/UserDto';
import gafa from '../Dto/gafasDto';
import Auth from '../Dto/UserAuthenticationDto';

class UserRepository {
    static async add(user: User){     
        const sql = 'INSERT INTO users ( name, lastName, email, password, sure) VALUES (?, ?, ?, ?, ?)';
        const values = [user.name, user.lastName,user.email, user.password, user.sure ];   
        return db.execute(sql, values);
    }

    static async logeo(auth: Auth){        
        const sql = 'SELECT * FROM users WHERE email = ?';
        const values = [auth.email];     
        return db.execute(sql, values);   
    }

    static async getAllgafas(): Promise<gafa[]> {
        try { 
            const sql = 'SELECT * FROM gafas ';
            const [rows] = await db.execute(sql);
    
            if (!Array.isArray(rows)) {
                throw new Error('Los datos de las gafas no son válidos');
            }
    
            const gafas: gafa[] = rows.map((row: any) => {
                return {
                    id: row.id,
                    modelo: row.modelo,
                    color: row.color,
                    precio: row.precio,
                };
            });
    
            return gafas;
        } catch (error) {
            console.error('Error al obtener todas las gafas:', error);
            throw error;
        }
    }
}

export default UserRepository;