import r from 'rethinkdb';
import assert from 'assert';
import colors from 'colors';
import _ from 'lodash';

export default async function DbBoot(config) {
    let rethinkdb = config.rethinkdb.connect;
    let connection = await r.connect(rethinkdb, (err, conn) => {
        connection = conn
        assert.ok(!err, 'Cannot connect to RETHINKDB'.bgRed)
        r.dbList().contains(rethinkdb.db).do(function(containsDb) {
            return r.branch(
                containsDb, {
                    created: 0
                },
                r.dbCreate(rethinkdb.db)
            );
        }).run(conn, function(err) {
            assert.ok(!err, 'DB not run'.yellow.trap);
            r.db(rethinkdb.db).tableList().run(conn, (err, extables) => {
                assert.ok(!err, 'Cannot get RETHINKDB tables'.bgRed);
                console.log(`DB ${rethinkdb.db} is running! with tables= ${extables}`.bgYellow.underline);

                let notCreatedTables = _.difference(config.rethinkdb.tables, extables);
                if (!_.isEmpty(notCreatedTables)) {
                    console.log('Some tables not implemented in DB!'.bgRed)
                    notCreatedTables.map((x) => {
                        r.tableCreate(x).run(conn, (err, result) => {
                            assert.ok(!err, 'Some tables already exist?!')
                            console.log(`TABLE ${x} implemented`)
                        })
                    })
                }
            })
        });
    })
    return connection;
}
