import multiparty from 'multiparty';
import { PutObjectCommand, S3Client } from '@aws-sdk/client-s3';
import fs from 'fs';
import mime from 'mime-types';
import { mongooseConnect } from '@/lib/mongoose';
import { isAdminRequest } from './auth/[...nextauth]';

export default async function handle(req, res) {
    await mongooseConnect();
    await isAdminRequest(req, res);


    const form = new multiparty.Form();
    const { fields, files } = await new Promise((resolve, reject) => {
        form.parse(req, (err, fields, files) => {
            if (err) reject(err);
            resolve({ fields, files });

        });
    });
    console.log('length:', files.file.length);

    const client = new S3Client({
        region: 'eu-north-1',
        credentials: {
            accessKeyId: process.env.S3_ACCESS_KEY,
            secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
        }
    });
    const links = [];

    for (const file of files.file) {
        const ext = file.originalFilename.split('.').pop();
        const newfileName = Date.now() + 'img' + '.' + ext;
        //console.log({ ext, file });
        await client.send(new PutObjectCommand({
            Bucket: process.env.S3_BUCKET_NAME,
            Key: newfileName,
            Body: fs.readFileSync(file.path),
            ACL: 'public-read',
            ContentType: mime.lookup(file.path),

        }));
        const link = `https://${process.env.S3_BUCKET_NAME}.s3.amazonaws.com/${newfileName}`;
        links.push(link);
    }
    return res.json({ links });
}

export const config = {
    api: { bodyParser: false },
};