import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'authors'

  async up() {
    this.schema.table(this.tableName, (table) => {
      table.integer('publisher_id').unsigned().references('id').inTable('publishers')

    })
  }

  async down() {
    this.schema.table(this.tableName, (table) => {
      table.dropColumn('publisher_id')
    })
  }
}