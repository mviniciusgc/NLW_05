import { Request, Response } from 'express';
import { SettingsService } from '../services/SettingsService'

class SettingsControllers {

    async create(request: Request, response: Response): Promise<Response> {

        const { chat, username } = request.body;

        const settingsService = new SettingsService();

        try {

            const settings = await settingsService.create({ chat, username });

            response.json(settings);
        } catch (e) {
            return response.status(400).json({
                message: e.message
            })
        }
    }

    async findByUserName(request: Request, response: Response) {
        const { username } = request.params;

        const settingsService = new SettingsService();

        const settings = await settingsService.findByUserName(username);

        return response.json(settings);

    }
    async update(request: Request, response: Response) {
        const { username } = request.params;
        const { chat } = request.body;

        const settingsService = new SettingsService();

        const settings = await settingsService.update(username, chat);

        return response.json(settings);

    }

}

export { SettingsControllers }