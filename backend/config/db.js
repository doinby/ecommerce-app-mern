import mongoose from 'mongoose';

export default async function connectDB() {
	try {
		const conn = await mongoose.connect(process.env.DB_URI);
		console.log(`MongoDB Connected ${conn.connection.host}`);
	} catch (error) {
		console.log(`Error: ${error.message}`);
		process.exit(1);
	}
}
