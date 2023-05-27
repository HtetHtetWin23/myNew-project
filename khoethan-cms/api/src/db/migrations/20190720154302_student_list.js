exports.up = function(knex, Promise) {
    return Promise.all([
        knex.schema.createTable('student_list', (t) => {
            t.increments();
            t.string('grade').notNullable().unique();
            t.string('teacher_name').notNullable();
            t.string('school_girl').notNullable();
            t.string('school_boy').notNullable();
            t.string('total_student').notNullable();

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
        knex.schema.dropTable('student_list')
    ])

};