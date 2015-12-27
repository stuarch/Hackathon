'use strict';

import {Router} from 'express';
import * as controller from './user.controller';
import * as auth from '../../auth/auth.service';

var router = new Router();

router.get('/', auth.hasRole('admin'), controller.index);
router.delete('/:id', auth.hasRole('admin'), controller.destroy);
router.post('/:id/events', auth.isAuthenticated(), controller.createEvent);
router.put('/:id/events', auth.isAuthenticated(), controller.updateEvent);
router.delete('/:id/events', auth.hasRole('admin'), controller.destroyEvent);
router.get('/:id/events', auth.isAuthenticated(), controller.getEvents);
router.get('/:id/events/:eventId', auth.isAuthenticated(), controller.getEventById);
router.get('/me', auth.isAuthenticated(), controller.me);
router.put('/:id/password', auth.isAuthenticated(), controller.updateSetting);
router.get('/:id', auth.isAuthenticated(), controller.show);
router.post('/', controller.create);

export default router;
