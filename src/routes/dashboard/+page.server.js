import { MongoClient } from 'mongodb';
import * as dotenv from 'dotenv';
import { redirect } from '@sveltejs/kit';

dotenv.config();

const client = new MongoClient(process.env.MONGO_URL);
const database = client.db('IC');
const icUsers = database.collection('ic_users');

const projection = {
	_id: 0,
}

export const load = async (event) => {
	const session = await event.locals.getSession();
	if(!session?.user) {
		throw redirect(302, "/?notSignedIn");
	}

	const foundUser = await icUsers.findOne({
		email: session.user.email
	}, {projection: projection})
	if(foundUser) {
		return {userFound: foundUser};
	} else {
		throw redirect(302, "/auth");
	}
}