let r = require('rethinkdbdash')()
import colors from 'colors';

export default class Users {

    static async getAll() {
        console.debug(`GET ALL ITEMS FROM TABLE USERS`.bgCyan)
        let users = await r.table('users').getAll().run();
        return users;
    }

    static async get(query) {
        console.debug(`GET ITEM WITH ${query} FROM TABLE USERS`.bgCyan)
        let user = await r.table('users').get(query).run()
        return user
    }

    static async add(data) {
        console.debug(`ADD ITEM ${data} TO TABLE USERS`.bgCyan)
        let user = await r.table('users').insert(data, {returnChanges: true}).run()
        return user
    }

    static async delete(query) {
        console.debug(`DELETE ITEM ${query} FROM TABLE USERS`.bgCyan)
        let result = await r.table('users').get(query).delete().run();
        return result;
    }

    static async update(data) {
        console.debug(`UPDATE ITEM ${data} FROM TABLE USERS`.bgCyan)
        let result = await r.table('users').get(data.id).update(data).run();
        return result;
    }
}
