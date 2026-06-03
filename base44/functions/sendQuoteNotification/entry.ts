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

        const emailBody = `
New Quote Request Received
--------------------------

Name: ${data.name || 'N/A'}
Phone: ${data.phone || 'N/A'}
Email: ${data.email || 'N/A'}
Project Type: ${projectTypeMap[data.project_type] || data.project_type || 'N/A'}
Service: ${serviceMap[data.service] || data.service || 'N/A'}
Address: ${data.address || 'N/A'}

Project Details:
${data.description || 'None provided'}
        `.trim();

        await base44.asServiceRole.integrations.Core.SendEmail({
            to: "jzwu29@yahoo.com",
            subject: `New Quote Request from ${data.name || 'Unknown'}`,
            body: emailBody
        });

        return Response.json({ success: true });
    } catch (error) {
        return Response.json({ error: error.message }, { status: 500 });
    }
});