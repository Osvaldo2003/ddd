"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.S3StorageRepository = void 0;
const aws_sdk_1 = __importDefault(require("aws-sdk"));
class S3StorageRepository {
    constructor() {
        const accessKeyId = process.env.AWS_ACCESS_KEY_ID;
        const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY;
        const sessionToken = process.env.AWS_SESSION_TOKEN;
        const region = process.env.AWS_REGION;
        if (!accessKeyId || !secretAccessKey || !region) {
            throw new Error('AWS credentials or region are not defined in .env');
        }
        this.s3 = new aws_sdk_1.default.S3({
            accessKeyId,
            secretAccessKey,
            sessionToken: sessionToken || undefined,
            region,
        });
    }
    async upload(file) {
        const bucketName = process.env.AWS_S3_BUCKET_NAME;
        if (!bucketName) {
            throw new Error('AWS S3 bucket name is not defined in .env');
        }
        const params = {
            Bucket: bucketName,
            Key: `${Date.now()}-${file.originalname}`,
            Body: file.buffer,
        };
        const result = await this.s3.upload(params).promise();
        return result.Location;
    }
}
exports.S3StorageRepository = S3StorageRepository;
