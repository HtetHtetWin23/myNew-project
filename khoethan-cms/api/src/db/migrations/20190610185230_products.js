exports.up = function(knex, Promise) {
    return Promise.all([

        knex.schema.createTable('product', (t) => {
            t.increments();
            t.string('product_name').notNullable().unique();
            t.longtext('description').notNullable();
            t.integer('productType_id').unsigned().notNullable();
            t.string('image')
                //table default fields
            t.timestamp('created_at').defaultTo(knex.fn.now());
            t.string('created_by').notNullable();
            t.timestamp('updated_at').defaultTo(knex.fn.now());
            t.string('updated_by').notNullable();
            t.integer('version_no').defaultTo(1);
            t.boolean('status').defaultTo(true);
            t.decimal('sort_order_no').defaultTo(0);

            t.foreign('productType_id').references('id').inTable('product_type').onDelete('CASCADE');;
        })
    ]);

};

exports.down = function(knex, Promise) {
    return Promise.all([
        knex.schema.dropTable('product')

    ])

};