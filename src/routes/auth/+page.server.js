import { MongoClient } from 'mongodb';
import * as dotenv from 'dotenv';
import { redirect } from '@sveltejs/kit';

dotenv.config();

const client = new MongoClient(process.env.MONGO_URL);
const database = client.db('IC');
const icUsers = database.collection('ic_users');

export const load = async (event) => {
	const session = await event.locals.getSession();
	console.log(session);
	if(!session?.user) {
		throw redirect(302, "/?notSignedIn");
	}

	const userFound = await icUsers.findOne({
		email: session.user.email
	});

	if(userFound) {
		throw redirect(302, "/dashboard");
	}
}

export const actions = {
	register: async (event) => {
		const session = await event.locals.getSession();

		if (!session?.user) {
			throw redirect(302, '/?notSignedIn');
		}

		const formData = await event.request.formData();
		const email = formData.get('learnerEmailId');
		const branch = formData.get('branch');
		const year = formData.get('year');

		if(!email || !branch || !year) {
			return { inputError: true }
		}

		let generatedCode;
		while (true) {
			generatedCode = Math.floor(100000 + Math.random() * 900000);
			const foundCode = await icUsers.findOne({ user_code: generatedCode });

			if (foundCode == null) {
				break;
			} else {
				continue;
			}
		}
		await icUsers.insertOne({
			email: session.user.email,
			learnerEmail: email,
			branch: branch,
			year: year,
			user_code: generatedCode,
		});

		throw redirect(302, '/dashboard');
	}
};