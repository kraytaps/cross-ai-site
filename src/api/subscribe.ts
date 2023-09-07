import mailchimp from "@mailchimp/mailchimp_marketing";

mailchimp.setConfig({
	apiKey: process.env.MAILCHIMP_API_KEY,
	server: process.env.MAILCHIMP_API_SERVER, // e.g. us1
});

export default async function subscribe(req: any, res: any) {
	const { firstName, lastName, companyName, phoneNumber, email } = req.body;

	if (!firstName || !lastName || !companyName || !phoneNumber || !email) {
		return res.status(400).json({ error: "Missing fields!" });
	}

	try {
		await mailchimp.lists.addListMember(
			process.env.MAILCHIMP_AUDIENCE_ID!,
			{
				email_address: email,
				status: "subscribed",
			}
		);

		return res.status(201).json({ error: "" });
	} catch (error: any) {
		return res
			.status(500)
			.json({ error: error.message || error.toString() });
	}
}
