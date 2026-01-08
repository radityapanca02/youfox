export async function onRequestPost(context) {
  const response = {
    status: true,
    data: {
      real: "BS-PBS-FREEMODSBSPREMIUM-a8a41f00-dc22-31d0-a8fa-134684701cdc-Vm8Lk7Uj2JmsjCPVPVjrLa7zgfx3uz9E",
      token: "214cfe75a5553cee870a8c1a63af0cd9",
      modname: "UnoShibai Hacks",
      mod_status: "Safe",
      credit: "Give Feedback else Keys off",
      ESP: true,
      Item: false,
      AIM: false,
      SilentAim: false,
      BulletTrack: false,
      Floating: false,
      Memory: false,
      Setting: false,
      EXP: "2026-01-11 02:46:55",
      device: "150",
      MOD_NAME: "UnoShibai Hacks",
      MOD_STATUS: "Safe",
      FLOTING_TEST: "Give Feedback else Keys off",
      BHATIA_EXP: "2026-01-11 02:46:55",
      BHATIA_SLOT: "150",
      rng: 1767870652
    }
  };

  return new Response(JSON.stringify(response), {
    headers: { "Content-Type": "application/json" }
  });
}

// Optional: kalau app pakai GET
export async function onRequestGet() {
  return new Response(JSON.stringify({
    status: true,
    msg: "Use POST"
  }), {
    headers: { "Content-Type": "application/json" }
  });
}
