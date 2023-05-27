exports.up = function(knex, Promise) {
    return Promise.all([
        knex.schema.createTable('clinic_staff', (t) => {
            t.increments();
            t.string('name').notNullable().unique();
            t.longtext('description').notNullable();
            t.string('phone_no').notNullable();
            t.integer('position_id').unsigned().notNullable();
            t.string('image')
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
        knex.schema.dropTable('clinic_staff')
    ])

};