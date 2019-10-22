import nodemailer from 'nodemailer'

export default nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    secure: process.env.MAIL_SECURE,
    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASSWORD
    },
    tls: {
        rejectUnauthorized: process.env.MAIL_REJECT_UNAUTHORIZED
    }
});
