/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import AuthorsController from '#controllers/authors_controller'
import router from '@adonisjs/core/services/router'


router.group(() => {
  router.post('/', [AuthorsController, 'create'])
  router.get('/', [AuthorsController, 'all'])
  router.get('/:id', [AuthorsController, 'index'])
  router.patch('/:id', [AuthorsController, 'update'])
}).prefix('/author')
