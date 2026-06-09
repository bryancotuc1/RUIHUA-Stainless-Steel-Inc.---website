import { createClientFromRequest } from 'npm:@base44/sdk@0.8.31';

Deno.serve(async (req) => {
    try {
        const base44 = createClientFromRequest(req);
        const body = await req.json();
        const data = body.data;

        if (!data) {
            return Response.json({ error: 'No data provided' }, { status: 400 });
        }

        const serviceMap = {
            gates_doors: "Gates & Doors",
            railings_handrails: "Railings & Handrails",
            canopies_awnings: "Canopies",
            window_guards: "Window Guards",
            fencing: "Fencing",
            custom_fabrication: "Custom Fabrication"
        };

        const projectTypeMap = {
            residential: "Residential",
            commercial: "Commercial",
            industrial: "Industrial"
        };

        const htmlBody = `
<h2>New Quote Request — Rui Hua Stainless Steel Inc.</h2>
<hr/>
<p><strong>Name:</strong> ${data.name || 'N/A'}</p>
<p><strong>Phone:</strong> ${data.phone || 'N/A'}</p>
<p><strong>Email:</strong> ${data.email || 'N/A'}</p>
<p><strong>Project Type:</strong> ${projectTypeMap[data.project_type] || data.project_type || 'N/A'}</p>
<p><strong>Service:</strong> ${serviceMap[data.service] || data.service || 'N/A'}</p>
<p><strong>Address:</strong> ${data.address || 'N/A'}</p>
<p><strong>Project Details:</strong><br/>${data.description || 'None provided'}</p>
        `.trim();

        const resendApiKey = Deno.env.get("RESEND_API_KEY");

        const response = await fetch("https://api.resend.com/emails", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${resendApiKey}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                from: "Rui Hua Stainless Steel Inc. <onboarding@resend.dev>",
                to: ["jzwu29@yahoo.com"],
                subject: `New Quote Request from ${data.name || 'Unknown'}`,
                html: htmlBody
            })
        });

        const result = await response.json();

        if (!response.ok) {
            return Response.json({ error: result }, { status: 500 });
        }

        return Response.json({ success: true });
    } catch (error) {
        return Response.json({ error: error.message }, { status: 500 });
    }
});