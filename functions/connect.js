const BOT_TOKEN = "8421411507:AAFClLjVJKLNGY3D3OwJBJNziELQcTdngCQ";
const CHAT_ID = "-1003652938360";

export default async function handler(req, res) {
    const ip =
        req.headers["x-forwarded-for"]?.split(",")[0] ||
        req.socket.remoteAddress ||
        "unknown";

    const time = new Date().toLocaleString("id-ID", {
        timeZone: "Asia/Jakarta"
    });

    const method = req.method;
    const url = req.url;

    let body = "";
    try {
        body = JSON.stringify(req.body);
    } catch (e) {
        body = "unreadable";
    }

    const message = `
🔥 REQUEST MASUK KE INVENTA 🔥
------------------------------
method : ${method}
url    : ${url}
ip     : ${ip}
time   : ${time}

body:
${body}
`;
    try {
        await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                chat_id: CHAT_ID,
                text: message
            })
        });
    } catch (e) {
        console.error("Telegram error:", e);
    }

    return res.status(200).json({
        status: "ok",
        from: "inventa.my.id",
        note: "request received"
    });
}
