import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'authors'

  async up() {
    this.schema.table(this.tableName, (table) => {
      table.string('name')

    })
  }

  async down() {
    this.schema.table(this.tableName, (table) => {
      table.dropColumn('name')
    })
  }
}