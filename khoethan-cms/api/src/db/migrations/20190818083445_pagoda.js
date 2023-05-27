exports.up = function(knex, Promise) {
    return Promise.all([
        knex.schema.createTable('pagoda', (t) => {
            t.increments();
            t.string('pagoda_name').notNullable().unique();
            t.longtext('description').notNullable();
            t.string('image');
            t.integer('monastery_id').unsigned().notNullable();


            t.timestamp('created_at').defaultTo(knex.fn.now());
            t.string('created_by').notNullable();
            t.timestamp('updated_at').defaultTo(knex.fn.now());
            t.string('updated_by').notNullable();
            t.boolean('status').defaultTo(true);
            t.integer('version_no').defaultTo(1);
            t.decimal('sort_order_no').defaultTo(0);

            t.foreign('monastery_id').references('id').inTable('monastery').onDelete('CASCADE');
        })
    ])

};

exports.down = function(knex, Promise) {
    return Promise.all([
        knex.schema.dropTable('pagoda')
    ])

};