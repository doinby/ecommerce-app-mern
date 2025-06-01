import mongoose from 'mongoose';

export default async function connectDB() {
	try {
		const conn = await mongoose.connect(process.env.DB_URI);
		console.log(`connected to host: ${conn.connection.host}`);
		console.log(`current db name: ${conn.connection.name}`);
	} catch (error) {
		console.log(`Error: ${error.message}`);
		process.exit(1);
	}
}
