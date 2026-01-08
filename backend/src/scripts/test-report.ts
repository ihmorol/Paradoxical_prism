// Hardcode env vars for testing since .env might be missing or ignored
process.env.DATABASE_URL = 'mongodb://localhost:27017/paradox_prism_test';
process.env.ENCRYPTION_KEY = 'super_secure_32_byte_key_example!';

import mongoose from 'mongoose';
import config from '../app/config';
import { ReportServices } from '../app/modules/report/report.service';
import { decrypt } from '../app/utils/encryption';


async function main() {
    try {
        // Mock DB connection if needed, or just rely on the service logic if it was mocked.
        // However, the service logic writes to DB. I should connect to a test DB or the real one. 
        // Since I don't want to mess up the real DB without permission, I will just call the encryption utils and simulate parts of the service or just run a dry run.
        // actually testing the REAL service flow is better.
        // I'll connect to the DB.

        await mongoose.connect(config.database_url as string);
        console.log('Connected to DB');

        const payload = {
            category: 'Corruption',
            locationContext: 'Headquarters',
            description: 'Something suspicious happened in the finance department.',
            externalLink: 'http://evidence.com',
        };

        console.log('Creating report with payload:', payload);

        const result = await ReportServices.createReportInDB(payload);

        console.log('Report Created:', result);

        // Verify encryption
        // We need to fetch the document from DB to get the encrypted payload (result only returns limited fields)
        const reportDoc = await mongoose.model('Report').findOne({ report_id: result.reportId });
        if (!reportDoc) throw new Error('Report not found in DB');

        console.log('Fetched Report from DB:', reportDoc.toObject());

        const decrypted = decrypt(reportDoc.encrypted_payload, reportDoc.encryption_iv);
        console.log('Decrypted Payload:', decrypted);
        const parsedDecrypted = JSON.parse(decrypted);

        if (parsedDecrypted.description === payload.description) {
            console.log('SUCCESS: Decrypted description matches!');
        } else {
            console.error('FAILURE: Decrypted description does NOT match!', parsedDecrypted.description, payload.description);
        }

    } catch (err) {
        console.error('Error:', err);
    } finally {
        await mongoose.disconnect();
    }
}

main();
