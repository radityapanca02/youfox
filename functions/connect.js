// Cloudflare Workers / Node.js Backend
// Fix for youfox.pages.dev

import crypto from 'crypto';

export default {
  async fetch(request) {
    // Only handle POST to /connect
    if (request.method !== 'POST' || !request.url.includes('/connect')) {
      return new Response('Not Found', { status: 404 });
    }

    try {
      // Parse form data
      const formData = await request.formData();
      const game = formData.get('game');
      const user_key = formData.get('user_key');
      const serial = formData.get('serial');

      console.log('Login Request:', { game, user_key, serial });

      // Secret key (same as in C++ code)
      const SECRET = 'Vm8Lk7Uj2JmsjCPVPVjrLa7zgfx3uz9E';

      // ⚠️ CRITICAL: Calculate token exactly like client expects
      // Format: BS-{user_key}-{serial}-{SECRET}
      const authString = `BS-${user_key}-${serial}-${SECRET}`;
      
      // Calculate MD5 hash
      const token = crypto.createHash('md5').update(authString).digest('hex');
      
      console.log('Auth String:', authString);
      console.log('Generated Token:', token);

      // Generate RNG timestamp
      const rng = Math.floor(Date.now() / 1000);

      // Response format matching original API
      const response = {
        status: true,
        data: {
          real: `BS-${user_key}-a8a41f00-dc22-31d0-a8fa-134684701cdc-${SECRET}`,
          token: token,  // ✅ This is now correct!
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
          rng: rng
        }
      };

      return new Response(JSON.stringify(response), {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        }
      });

    } catch (error) {
      console.error('Error:', error);
      return new Response(JSON.stringify({
        status: false,
        reason: 'Server error'
      }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      });
    }
  }
};

// ============================================
// For Express.js (Node.js) use this instead:
// ============================================
/*
const express = require('express');
const crypto = require('crypto');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/connect', (req, res) => {
  const { game, user_key, serial } = req.body;
  
  const SECRET = 'Vm8Lk7Uj2JmsjCPVPVjrLa7zgfx3uz9E';
  const authString = `BS-${user_key}-${serial}-${SECRET}`;
  const token = crypto.createHash('md5').update(authString).digest('hex');
  
  res.json({
    status: true,
    data: {
      real: `BS-${user_key}-a8a41f00-dc22-31d0-a8fa-134684701cdc-${SECRET}`,
      token: token,
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
      rng: Math.floor(Date.now() / 1000)
    }
  });
});

app.listen(3000, () => console.log('Server running on port 3000'));
*/
