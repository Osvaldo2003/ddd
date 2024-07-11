"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocalStorageRepository = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
class LocalStorageRepository {
    constructor() {
        this.storagePath = path_1.default.join(__dirname, '../../../uploads');
        if (!fs_1.default.existsSync(this.storagePath)) {
            fs_1.default.mkdirSync(this.storagePath, { recursive: true });
        }
    }
    async upload(file) {
        const filePath = path_1.default.join(this.storagePath, `${Date.now()}-${file.originalname}`);
        await fs_1.default.promises.writeFile(filePath, file.buffer);
        return filePath;
    }
}
exports.LocalStorageRepository = LocalStorageRepository;
