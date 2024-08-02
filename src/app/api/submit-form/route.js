import nodemailer from 'nodemailer';

export const POST = async (req, res) => {
    try {
        const body = await req.json().catch(err => {
            throw new Error('Invalid JSON');
        });

        const { name, number, message } = body;

        const transporter = nodemailer.createTransport({
            port: 465,
            host: 'smtp.gmail.com',
            secure: false, 
            auth: {
                user: process.env.EMAIL_USER, 
                pass: process.env.EMAIL_PASS, 
            },
        });

        const mailOptions = {
            from: process.env.EMAIL_USER, // Sender address
            to: "ashihbk205@gmail.com", // List of receivers
            subject: 'New Form Submission', // Subject line
            text: `Name: ${name}\nNumber: ${number}\nMessage: ${message}`, // Plain text body
        };

        await transporter.sendMail(mailOptions);
        return new Response(JSON.stringify({ message: 'Form submitted and email sent successfully!' }), {
            status: 200,
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*', // CORS header
            },
        });
    } catch (error) {
        console.error('Error sending email:', error);
        return new Response(JSON.stringify({ message: 'Failed to send email', error: error.message }), {
            status: 500,
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*', // CORS header
            },
        });
    }
};

export const GET = (req, res) => {
    return new Response(JSON.stringify({ message: 'Method not allowed' }), {
        status: 405,
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*', // CORS header
        },
    });
};
