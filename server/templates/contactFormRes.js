
const contactUsEmail = (
    name, email, contact, message


) => {
    return `<!DOCTYPE html>
     <html>

        <head>
            <meta charset="UTF-8">
                <title>New Contact Request</title>
                <style>
                    body {
                        background - color: #f9f9f9;
                    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                    font-size: 16px;
                    color: #444444;
                    margin: 0;
                    padding: 20px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    min-height: 100vh;
        }

                    .container {
                        max - width: 600px;
                    background-color: #ffffff;
                    border-radius: 12px;
                    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
                    overflow: hidden;
        }

                    .header {
                        background - color: #FFD700; /* Golden color */
                    color: #333333;
                    padding: 30px;
                    text-align: center;
                    border-bottom: 5px solid #DAA520; /* Darker golden color */
        }

                    .logo {
                        max - width: 150px;
                    margin-bottom: 20px;
        }

                    .content {
                        padding: 30px;
                    text-align: left;
        }

                    .greeting {
                        font - size: 22px;
                    font-weight: bold;
                    color: #333333;
                    margin-bottom: 20px;
        }

                    .info-item {
                        margin - bottom: 15px;
                    color: #555555;
        }

                    .label {
                        font - weight: bold;
                    color: #FFA500; /* Orange color */
                    margin-right: 5px;
        }

                    .message-box {
                        padding: 15px;
                    border: 1px solid #e0e0e0;
                    border-radius: 8px;
                    background-color: #f8f8f8;
                    margin-top: 20px;
        }

                    .message-title {
                        font - weight: bold;
                    color: #333333;
                    margin-bottom: 10px;
        }

                    .footer {
                        background - color: #f2f2f2;
                    color: #777777;
                    padding: 20px;
                    text-align: center;
                    font-size: 14px;
                    border-top: 1px solid #e0e0e0;
        }

                    .footer a {
                        color: #FFA500;
                    text-decoration: none;
        }
                </style>

        </head>

        <body>
            <div class="container">
                <div class="header">
                    
                    <h1 style="margin: 0; font-size: 28px;">New Contact Request</h1>
                </div>
                <div class="content">
                    <p class="greeting">Dear <span style="font-weight: bold; color: #FFA500;">Admin</span>,</p>
                    <p class="info-item"><span class="label">Subject:</span> A new business-related inquiry has been received.</p>
                    <p class="info-item"><span class="label">Name:</span> ${name}</p>
                    <p class="info-item"><span class="label">Email:</span> ${email}</p>
                    <p class="info-item"><span class="label">Contact Number:</span> ${contact}</p>
                    <div class="message-box">
                        <p class="message-title">Message:</p>
                        <p>${message}</p>
                    </div>
                </div>
                <div class="footer">
                    <p>This is an automatically generated email. Please do not reply to it.</p>
                    <p>© 2025 <a href="http://localhost:5173" target="_blank">Jyotish Gyani</a>. All rights reserved.</p>
                </div>
            </div>
        </body>

    </html>
    `
}


module.exports = { contactUsEmail }