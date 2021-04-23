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

}

export { SettingsControllers }