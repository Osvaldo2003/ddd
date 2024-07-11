"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StorageController = void 0;
class StorageController {
    constructor(storageService) {
        this.storageService = storageService;
        this.upload = async (req, res) => {
            if (!req.file) {
                return res.status(400).send('No file uploaded.');
            }
            try {
                const fileUrl = await this.storageService.upload(req.file);
                res.json({ fileUrl });
            }
            catch (error) {
                if (error instanceof Error) {
                    res.status(500).send(error.message);
                }
                else {
                    res.status(500).send('An unknown error occurred');
                }
            }
        };
    }
}
exports.StorageController = StorageController;
