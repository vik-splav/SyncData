/** @type {import('next').NextConfig} */
const nextConfig = {
  images: { unoptimized: true },
  env: {
    GOOGLE_CLIENT_ID:
      "1085657127164-g6fnthi4totk0577s8lrbgaa12bia0qm.apps.googleusercontent.com",
    GOOGLE_CLIENT_SECRET: "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",
    AUTH_SECRET:'78zFZvyspgAIBXPKdA0AhFqcNWXX16/CEmBFOHU3iOg=',
    lemonkey:
      "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI5NGQ1OWNlZi1kYmI4LTRlYTUtYjE3OC1kMjU0MGZjZDY5MTkiLCJqdGkiOiIxZDM1NWNlMWQ5NzE2ODRkMjVjZWY5ZmNiYjY1MDI2NDliMDFkY2JjNTgyZGM0MDY1MWQ4N2Y4ZjFkNWJkZTA2N2JhMTQ0YjQ1ZjAwZWZjNiIsImlhdCI6MTcwMDY3MDE4My45MDQ2MDIsIm5iZiI6MTcwMDY3MDE4My45MDQ2MDUsImV4cCI6MjAxNjI4OTM4My44NzQ0NzcsInN1YiI6IjE0NTQzMTAiLCJzY29wZXMiOltdfQ.Lcsfv7QFWtlrlFcEEKP-l8f9nfn6a4TOK51CYWjXT6QlAn7_vFzorpQMpSx9aRXhco9yO6QinPDbOSiuJDeN4psQPuZL0EDhduRJVbHiM1ZwT_YQnkpJ_HbGIFrTLL9xDp4evUVO3oAYXOmG2dc-AUt2jQWCbsnX75VWbA3TFP7FSeCH472gkel5gpABeyhkJXq3CfNAg6_9wnR6npLBAxqxMOXfg72Qk7Fb6-61iovqhw7dCrKBcQsEnRzojSCiNPpf_3szq1bYYR0UBpLaGH9kQzcTRHxYyYHgfaKKf648_SmCco_7Twsu-Z4yn-_mNjqym2K5dYGu0Z11RUJK9vl9wKCB15S-KzcTwP8i5IeIOZQhPPObXij1PpDWIezOnjfDwUOwHqzDkJBxBea6Fi_mTPlMVNcMQ2dH8DUtsxmgMzOdh4hQdYx6m4YhIZeO4BYaxjr76BSIaXcND007aq2k2pXmC1o8u_vpV7aAIb7hCl8Kt4giWkdGQdStq1ke",
  },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  output:'export',
  
};

module.exports = nextConfig;
