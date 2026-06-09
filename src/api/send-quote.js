/* eslint-disable no-undef */
export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const data = req.body;

  if (!data || !data.name || !data.phone) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  const serviceMap = {
    gates_doors: "Gates & Doors",
    railings_handrails: "Railings & Handrails",
    canopies_awnings: "Canopies",
    window_guards: "Window Guards",
    fencing: "Fencing",
    custom_fabrication: "Custom Fabrication",
  };

  const projectTypeMap = {
    residential: "Residential",
    commercial: "Commercial",
    industrial: "Industrial",
  };

  const htmlBody = `
<h2 style="color:#1a1a1a;">New Quote Request — Rui Hua Stainless Steel Inc.</h2>
<hr style="border:1px solid #ddd;"/>
<table style="font-family:monospace;font-size:14px;border-collapse:collapse;width:100%;">
  <tr><td style="padding:8px 0;font-weight:bold;width:160px;">Name:</td><td>${data.name || "N/A"}</td></tr>
  <tr><td style="padding:8px 0;font-weight:bold;">Phone:</td><td>${data.phone || "N/A"}</td></tr>
  <tr><td style="padding:8px 0;font-weight:bold;">Email:</td><td>${data.email || "N/A"}</td></tr>
  <tr><td style="padding:8px 0;font-weight:bold;">Project Type:</td><td>${projectTypeMap[data.project_type] || data.project_type || "N/A"}</td></tr>
  <tr><td style="padding:8px 0;font-weight:bold;">Service:</td><td>${serviceMap[data.service] || data.service || "N/A"}</td></tr>
  <tr><td style="padding:8px 0;font-weight:bold;">Address:</td><td>${data.address || "N/A"}</td></tr>
  <tr><td style="padding:8px 0;font-weight:bold;vertical-align:top;">Project Details:</td><td>${data.description || "None provided"}</td></tr>
</table>
  `.trim();

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "Rui Hua Stainless Steel Inc. <quotes@ruihuastainlesssteel.com>",
      to: ["jzwu29@yahoo.com"],
      subject: "New Quote Request - Rui Hua Stainless Steel",
      html: htmlBody,
    }),
  });

  const result = await response.json();

  if (!response.ok) {
    console.error("Resend error:", JSON.stringify(result));
    return res.status(500).json({ error: result.message || "Email delivery failed" });
  }

  return res.status(200).json({ success: true });
}