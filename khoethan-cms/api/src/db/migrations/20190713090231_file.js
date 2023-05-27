exports.up = function(knex, Promise) {
    return Promise.all([
            knex.schema.createTable('file', (t) => {
                t.increments();
                t.string('name').notNullable().unique();
                t.string('type').notNullable();
                t.string('other_id').notNullable();
            })
        ]

    )

};

exports.down = function(knex, Promise) {
    return Promise.all([
        knex.schema.dropTable('file')
    ])

};