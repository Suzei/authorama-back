import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column, hasOne } from '@adonisjs/lucid/orm'
import * as relations from '@adonisjs/lucid/types/relations';
import Publisher from './publisher.js';

export default class Author extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column()
  declare name: string;

  @column()
  declare avatar_url?: string;

  @column()
  declare indie: boolean;


  @column()
  declare cpf?: string;

  @column()
  declare age?: DateTime

  @column()
  declare publisher_id: number

  @belongsTo(() => Publisher)
  declare publisher: relations.BelongsTo<typeof Publisher>

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}

