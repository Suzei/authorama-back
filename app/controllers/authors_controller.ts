import { AuthorService } from '#services/author/CreateAuthorService';
import { createAuthorValidator } from '#validators/author';
import { inject } from '@adonisjs/core';
import type { HttpContext } from '@adonisjs/core/http'

@inject()
export default class AuthorsController {
    constructor(protected author: AuthorService) { }
    async create({ request }: HttpContext) {
        const data = request.all()
        const payload = await createAuthorValidator.validate(data)

        this.author.create(payload)

    }

    async all({ request, response }: HttpContext) {
        if (request.qs()) {
            const authors = await this.author.all(request.qs())
            console.log(authors)
            return response.json(authors)
        }
        const authors = await this.author.all()
        return response.json(authors)
    }
}