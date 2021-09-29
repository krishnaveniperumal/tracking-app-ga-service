const { google } = require("googleapis");

async function getAnalyticsData() {
  const scopes = "https://www.googleapis.com/auth/analytics.readonly";
  const jwt = new google.auth.JWT(
    process.env.CLIENT_EMAIL,
    null,
    process.env.PRIVATE_KEY,
    scopes
  );
  const view_id = "XXXXX";
  const response = await jwt.authorize();
  const result = await google.analytics("v3").data.ga.get({
    auth: jwt,
    ids: "ga:" + view_id,
    "start-date": "30daysAgo",
    "end-date": "today",
    metrics: "ga:pageviews",
  });
  console.log(result);
}

module.export = getAnalyticsData();
