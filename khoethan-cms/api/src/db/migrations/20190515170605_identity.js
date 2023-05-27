exports.up = function(knex, Promise) {
    return Promise.all([
        knex.schema.createTable('user', (t) => {
            t.increments();
            t.string('user_name').notNullable().unique();
            t.timestamp('created_at').defaultTo(knex.fn.now());
            t.string('email').notNullable().unique();

            t.longtext('password_hash').notNullable();
            t.string('phone_no');
            t.string('nric');
            // Table Default Fields
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

        knex.schema.dropTable('user'),


    ]);
};