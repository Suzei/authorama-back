import { AuthorService } from '#services/author/AuthorService';
import { createAuthorValidator, editAuthorValidator } from '#validators/author';
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
            return response.json(authors)
        }
        const authors = await this.author.all()
        return response.json(authors)
    }

    async index({ request, response }: HttpContext) {
        const id = request.param('id')
        const author = await this.author.index(id)

        return response.json(author)
    }

    async update({ request }: HttpContext) {
        const id = request.param('id')
        const author = request.body()
        const payload = await editAuthorValidator.validate(author)

        await this.author.update(id, payload!)
    }

    async delete({ request, response }: HttpContext) {
        const id = request.param('id')
        await this.author.delete(id)
        response.status(200).json({ message: 'Item excluído com sucesso.' })
    }
}