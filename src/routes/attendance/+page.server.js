import { redirect } from '@sveltejs/kit';
import { MongoClient } from 'mongodb';
import * as dotenv from 'dotenv';

dotenv.config();

const client = new MongoClient(process.env.MONGO_URL);
const database = client.db('IC');
const icUsers = database.collection('ic_users');
const icAttendance = database.collection('ic_attendance');

const projection = {
	_id: 0
};

export const load = async (event) => {
	const session = await event.locals.getSession();
	if (!session?.user) {
		throw redirect(302, '/');
	}

	if (session.user.email !== 'neura.ai.club@gmail.com') {
		throw redirect(302, '/?unauthorised');
	}
};

export const actions = {
	lookup: async (event) => {
		const session = await event.locals.getSession();
		if (!session?.user) {
			throw redirect(302, '/');
		}
		const formData = await event.request.formData();
		const userCode = await formData.get('userCode');
		const foundUser = await icUsers.findOne({
			user_code: Number.parseInt(userCode)
		}, { projection: projection });
		if (!foundUser) {
			return { status: 'error', statement: 'Wrong Identifier Code' };
		} else {
			return { status: 'success', statement: 'User Found', user: foundUser };
		}
	},

	markAttendance: async (event) => {
		const session = await event.locals.getSession();
		if(!session?.user) {
			throw redirect(302, "/");
		}
		const formData = await event.request.formData();
		const eventType = await formData.get("eventType");
		const userCode = await formData.get('userCode');

		const foundUser = await icUsers.findOne({
			user_code: Number.parseInt(userCode),
		})

		const foundAttendance = await icAttendance.findOne({
			email: foundUser.email,
			event_type: eventType,
		})

		if(foundAttendance) {
			return {internalFormStatus: "error", statement: "Users attendance already marked"}
		}

		await icAttendance.insertOne({
			email: foundUser.email,
			event_type: eventType,
			timestamp: new Date().toLocaleString(undefined, {timeZone: 'Asia/Kolkata'}),
		})

		return {internalFormStatus: "success"}
	}
};