import db from '../config/config-db';
import User from '../Dto/UserDto';
import gafa from '../Dto/gafasDto';
import Auth from '../Dto/UserAuthenticationDto';
import Pedido from '../Dto/pedidoDto';

class UserRepository {
    static async add(user: User){     
        const sql = 'INSERT INTO users ( name, lastName, email, password, sure) VALUES (?, ?, ?, ?, ?)';
        const values = [user.name, user.lastName,user.email, user.password, user.sure ];   
        return db.execute(sql, values);
    }

    static async logeo(auth: Auth){    
        console.log("hola");    
        const sql = 'SELECT * FROM users WHERE email = ?';
        const values = [auth.email];     
        return await db.execute(sql, values);           
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
    //registrar pedido
    static async registrarPedido(pedido: Pedido){
        try {
            
            const sql = 'INSERT INTO pedidos (id_user, id_prod, direccion_pedido, estado_pedi ) VALUES (?, ?, ?, ?)';
            const values = [pedido.id_user, pedido.id_prod, pedido.direccion_pedido, pedido.estado_pedi];

            const [result] = await db.execute(sql, values);

            
            if (result && ('affectedRows' in result) && result.affectedRows && result.affectedRows > 0){//affectedRows para ver cuantas filas fueron afectadas
                return true;
            } else {
                return false;
            }
        } catch (error) {
            console.error('Error al registrar el pedido de domicilio:', error);
            throw error;
        }
    }   

}


export default UserRepository;