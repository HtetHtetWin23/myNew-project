exports.up = function(knex, Promise) {
    return Promise.all([
        knex.schema.createTable('contact', (t) => {
            t.increments();
            t.string('name').notNullable();
            t.string('email').notNullable().unique();
            t.string('phone_no').unique();
            t.string('description');
            t.longtext('subject')

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
        knex.schema.dropTable('contact')
    ])

};