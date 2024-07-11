"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StorageService = void 0;
class StorageService {
    constructor(storageRepository) {
        this.storageRepository = storageRepository;
    }
    async upload(file) {
        return this.storageRepository.upload(file);
    }
}
exports.StorageService = StorageService;
