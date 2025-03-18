import Author from '#models/author';
import { CreateAuthorService } from '#services/author/CreateAuthorService';
import { createAuthorValidator } from '#validators/author';
import { inject } from '@adonisjs/core';
import type { HttpContext } from '@adonisjs/core/http'

@inject()
export default class AuthorsController {
    constructor(protected author: CreateAuthorService) { }
    async create({ request }: HttpContext) {
        const data = request.all()
        const payload = await createAuthorValidator.validate(data)
        this.author.create(payload)

    }
}