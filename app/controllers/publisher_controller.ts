import { PublisherService } from "#services/publisher/PublisherService";
import { inject } from "@adonisjs/core";
import { HttpContext } from "@adonisjs/core/http";

@inject()
export default class PublisherController {
    constructor(protected publisher: PublisherService) { }
    async create({ request }: HttpContext) {
        const publisher = request.body();
        this.publisher.create(publisher)
    }
}