exports.up = function(knex, Promise) {
    return Promise.all([
        knex.schema.createTable('position', (t) => {
            t.increments();
            t.string('name').notNullable().unique();
            t.text('description').notNullable();
            // Table Default Fields
            t.timestamp('created_at').defaultTo(knex.fn.now());
            t.string('created_by').notNullable();
            t.timestamp('updated_at').defaultTo(knex.fn.now());
            t.string('updated_by').notNullable();
            t.integer('version_no').defaultTo(1);
            t.boolean('status').defaultTo(true);
            t.decimal('sort_order_no').defaultTo(0);
        })

    ])

};

exports.down = function(knex, Promise) {
    return Promise.all([
        knex.schema.dropTable('position'),
    ]);

};