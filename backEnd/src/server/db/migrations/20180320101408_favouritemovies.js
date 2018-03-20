exports.up = (knex, Promise) => {
    return knex.schema.createTable('favouritemovies', (table) => {
      table.increments();
      table.string('_id').notNullable().unique();
      table.string('overview').notNullable();
      table.string('poster_path').notNullable();
      table.string('release_date').notNullable();
      table.string('title').notNullable();
      table.integer('vote_average').notNullable();
      table.boolean('popularity').notNullable();
    });
  };
  
  exports.down = (knex, Promise) => {
    return knex.schema.dropTable('favouritemovies');
  };
