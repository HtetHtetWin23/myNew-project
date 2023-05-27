exports.up = function(knex, Promise) {
    return Promise.all([
        knex.schema.createTable('announcement', (t) => {
            t.increments();
            t.string('title').notNullable().unique();
            t.longtext('description').notNullable();
            t.text('summary').notNullable();

            //table default fields
            t.timestamp('created_at').defaultTo(knex.fn.now());
            t.string('created_by').notNullable();
            t.timestamp('updated_at').defaultTo(knex.fn.now());
            t.string('updated_by').notNullable();
            t.boolean('status').defaultTo(true);
            t.integer('version_no').defaultTo(1);
            t.decimal('sort_order_no').defaultTo(0);
        })
    ])


};

exports.down = function(knex, Promise) {
    return Promise.all([
        knex.schema.dropTable('announcement')
    ])
};