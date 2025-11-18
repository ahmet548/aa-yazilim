const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();
const port = 5000;

// Gerekli middleware'ler
app.use(cors());
app.use(express.json());

app.post('/send-email', (req, res) => {
    const { name, email, subject, message } = req.body;

    // E-posta göndermek için Nodemailer'ı yapılandırın
    // DİKKAT: BU BİLGİLERİ DOĞRUDAN KODA YAZMAK GÜVENLİK AÇIĞI OLUŞTURUR.
    // BU BİLGİLERİ .env dosyası gibi güvenli bir yerde saklayın ve process.env ile erişin.
    // Örnek: user: process.env.EMAIL_USER
    // Güvenlik için Gmail'in "Uygulama Şifreleri" özelliğini kullanın.
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER, // .env dosyasından gelen e-posta
            pass: process.env.EMAIL_PASS  // .env dosyasından gelen uygulama şifresi
        }
    });

    // E-posta içeriğini ve alıcıyı belirleyin
    const mailOptions = {
        from: `"${name}" <${email}>`,
        to: 'info@xn--aayazlm-vfbb.com',
        subject: `Web Sitenizden Yeni Mesaj: ${subject}`,
        html: `
            <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 20px auto; border: 1px solid #ddd; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.05);">
                <div style="background-color: #f4f4f4; color: #ffffff; padding: 50px 25px; text-align: center;">
                    <img src="cid:logo" alt="AA Yazılım Logo" style="width: 60.5vw; height: auto;"/>
                </div>
                <div style="padding: 25px 30px; padding-top: 0px;">
                    <p style="font-size: 16px;">AA Yazılım'dan 1 yeni mesaj:</p>
                    <table style="width: 100%; border-collapse: collapse; margin: 25px 0;">
                        <tr style="border-bottom: 1px solid #eee;">
                            <td style="padding: 12px 0; font-weight: bold; color: #555; width: 120px; vertical-align: top;">Ad Soyad:</td>
                            <td style="padding: 12px 0;">${name}</td>
                        </tr>
                        <tr style="border-bottom: 1px solid #eee;">
                            <td style="padding: 12px 0; font-weight: bold; color: #555; vertical-align: top;">E-posta:</td>
                            <td style="padding: 12px 0;">${email}</td>
                        </tr>
                        <tr style="border-bottom: 1px solid #eee;">
                            <td style="padding: 12px 0; font-weight: bold; color: #555; vertical-align: top;">Konu:</td>
                            <td style="padding: 12px 0;">${subject}</td>
                        </tr>
                    </table>
                    <div style="margin-top: 20px;">
                        <h4 style="margin-bottom: 10px; color: #2c3e50; border-bottom: 2px solid #f0f0f0; padding-bottom: 5px;">Mesaj İçeriği:</h4>
                        <div style="background-color: #f9f9f9; border-left: 4px solid #A41018; padding: 15px; font-size: 15px; line-height: 1.7; color: #555;">
                            ${message.replace(/\n/g, '<br>')}
                        </div>
                    </div>
                </div>
                <div style="background-color: #f4f4f4; color: #888; text-align: center; padding: 15px; font-size: 12px;">
                    <p style="margin: 0;">Bu e-posta AA Yazılım web sitesi iletişim formu aracılığıyla gönderilmiştir.</p>
                </div>
            </div>
        `,
        attachments: [{
            filename: 'logo.png',
            path: path.join(__dirname, 'src', 'assets', 'logo.png'),
            cid: 'logo' // 'cid' değeri HTML'deki src ile eşleşmelidir
        }]
    };

    // E-postayı gönderin
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('E-posta gönderim hatası:', error);
            // Daha detaylı hata bilgisi loglayın
            if (error.response) {
                console.error('Hata Yanıtı:', error.response);
            }
            if (error.code === 'EAUTH') {
                console.error('Kimlik doğrulama hatası. Lütfen e-posta ve şifrenizi kontrol edin.');
            } else if (error.code === 'ECONNRESET') {
                console.error('Bağlantı sıfırlandı. Ağ bağlantınızı veya e-posta sunucusunun durumunu kontrol edin.');
            } else if (error.code === 'ENOENT') {
                console.error('Ek dosya bulunamadı. Dosya yolunu kontrol edin:', mailOptions.attachments[0].path);
            }
            
            return res.status(500).json({ message: 'E-posta gönderilirken bir sunucu hatası oluştu.' });
        }
        console.log('E-posta gönderildi: ' + info.response);
        res.status(200).json({ message: 'Mesajınız başarıyla gönderildi!' });
    });
});

app.listen(port, () => {
    console.log(`Sunucu http://localhost:${port} adresinde çalışıyor`);
});
