import { AuthorService } from '#services/author_service';
import { inject } from '@adonisjs/core';
import type { HttpContext } from '@adonisjs/core/http'

@inject()
export default class AuthorsController {

    @inject()
    create(context: HttpContext, authorService: AuthorService) {
        const { name, age, profile_pic, is_indie } = context.request.body()
        return authorService.create({ name, age, profile_pic, is_indie })
    }

    all() {
        const authorService = new AuthorService()

        return authorService.list()
    }
}