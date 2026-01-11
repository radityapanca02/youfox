
export async function onRequest(context) {
    const BOT_TOKEN = "8421411507:AAFClLjVJKLNGY3D3OwJBJNziELQcTdngCQ";
    const CHAT_ID = "-1003652938360";

    const { request } = context;

    const ip =
        request.headers.get("cf-connecting-ip") ||
        request.headers.get("x-forwarded-for") ||
        "unknown";

    let body = "";
    try {
        body = await request.text();
    } catch {
        body = "unreadable";
    }

    const time = new Date().toLocaleString("id-ID", {
        timeZone: "Asia/Jakarta"
    });

    const message = `
🔥 REQUEST MASUK KE INVENTA 🔥
endpoint : /connect
method   : ${request.method}
ip       : ${ip}
time     : ${time}

body:
${body}
`;

    // kirim ke Telegram
    await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            chat_id: CHAT_ID,
            text: message
        })
    });

    return new Response(
        JSON.stringify({
            status: "ok",
            endpoint: "/connect",
            from: "inventa.my.id"
        }),
        {
            status: 200,
            headers: { "Content-Type": "application/json" }
        }
    );
}
