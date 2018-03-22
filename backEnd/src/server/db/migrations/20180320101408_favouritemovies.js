exports.up = (knex, Promise) => {
    return knex.schema.createTable('favouritemovies', (table) => {
      table.increments();
      table.text('overview').notNullable();
      table.string('poster_path').notNullable();
      table.string('release_date').notNullable();
      table.string('title').notNullable();
      table.decimal('vote_average').notNullable();
      table.decimal('popularity').notNullable();
    });
  };
  
  exports.down = (knex, Promise) => {
    return knex.schema.dropTable('favouritemovies');
  };
