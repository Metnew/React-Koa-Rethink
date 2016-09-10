import r from 'rethinkdbdash';
import colors from 'colors';
r = r();

export default class Offer {

    static async getAll() {
        console.debug(`GET ALL ITEMS FROM TABLE OFFERS`.bgCyan)
        let items = await r.table('offers').getAll().run();
        return items;
    }

    static async get(query) {
        console.debug(`GET ITEM WITH ${query} FROM TABLE OFFERS`.bgCyan)
        let user = await r.table('offers').get(query).run()
        return user
    }

    static async add(data) {
        console.debug(`ADD ITEM ${data} TO TABLE OFFERS`.bgCyan)
        let user = await r.table('offers').insert(data, {returnChanges: true}).run()
        return user
    }

    static async delete(query) {
        console.debug(`DELETE ITEM ${query} FROM TABLE OFFERS`.bgCyan)
        let result = await r.table('offers').get(query).delete().run();
        return result;
    }

    static async update(data) {
        console.debug(`UPDATE ITEM ${data.username} FROM TABLE OFFERS`.bgCyan)
        let result = await r.table('offers').get(data.id).update(data).run();
        return result;
    }
}
