import vine from '@vinejs/vine'

export const createAuthorValidator = vine.compile(
    vine.object({
        name: vine.string().trim().minLength(5),
        cpf: vine.string().optional(),
        age: vine.date().nullable().optional(),
        avatar_url: vine.string().url().optional().nullable(),
        indie: vine.boolean(),
    })
)

export const editAuthorValidator = vine.compile(
    vine.object({
        name: vine.string().trim().minLength(6).optional(),
        cpf: vine.string().optional(),
        age: vine.date().nullable().optional(),
        avatar_url: vine.string().url().optional(),
        indie: vine.boolean().optional()
    }).optional()
)