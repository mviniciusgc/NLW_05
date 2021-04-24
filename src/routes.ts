import { Router } from "express"
import { SettingsControllers } from './controllers/SettingsController'
import { UsersController } from './controllers/UsersController'
import { MessagesController } from './controllers/MessagesController'

const routes = Router();

const settingsControllers = new SettingsControllers();
const usersController = new UsersController();
const messagesController = new MessagesController();

routes.post("/settings", settingsControllers.create);
routes.get("/settings/:username", settingsControllers.findByUserName);
routes.put("/settings/:username", settingsControllers.update);

routes.post("/users", usersController.create);

routes.post("/messages", messagesController.create);
routes.get("/messages/:id", messagesController.showByUser);

export { routes };