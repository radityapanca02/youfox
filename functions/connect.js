/*
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
*/
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
    timeZone: "Asia/Jakarta",
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
      text: message,
    }),
  });

  return new Response(
    JSON.stringify(
      {
        key: "NMIJ-HASE-RYMN-PJ55",
        game: "Mobile Legends",
        game_code: "MLBB",
        expires_at: "2026-01-09T18:00:22.000Z",
        expires_ts: 1767981622000,
        days_remaining: 1,
        hwid: "10fe44dd-665f-3b95-8b99-481c59526e4e",
        username: "xnish",
        mod_name: "MOD UCUP PELIT",
        floating_text: "#UCUP_PELIT_SAMPEKE_SILIT-SILIT",
        mod_status: "safe",
        features: [],
        dns_enabled: true,
        dns: {
          profile_id: "2db528",
          dns_tls: "2db528.dns.nextdns.io",
          dns_https: "https://dns.nextdns.io/2db528",
          ipv6_1: null,
          ipv6_2: null,
        },
        ts: 1767963340418,
      },
      null,
      2
    ),
    {
      status: 200,
      headers: { "Content-Type": "application/json" },
    }
  );
}


