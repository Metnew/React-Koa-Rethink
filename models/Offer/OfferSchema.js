import r from 'rethinkdbdash';
import colors from 'colors';

export default class Users {

    static async getAll(conn) {
        let items = await r.table('users').getAll().run(conn);
        return items;
    }

    static async get(query, conn) {
        console.log(`GET USER WITH ${query}`.bgCyan)
        let user = await r.table('users').get(query).run(conn)
        return user
    }

    static async add(data, conn) {
        console.log(`ADD User ${data.username}`.bgCyan)
        let user = await r.table('users').insert(data, {returnChanges: true}).run(conn)
        return user
    }

    static async delete(query, conn) {
        console.log(`Delete User ${query}`.bgCyan)
        let result = await r.table('users').get(query).delete().run(conn);
        return result;
    }

    static async update(data, conn) {
        console.log(`Update User ${data.username}`.bgCyan)
        let result = await r.table('users').get(data.id).update(data).run(conn);
        return result;
    }
}
