// import { connectDB } from "@/lib/connectDB"
// import { services } from "@/lib/services";
// import { NextResponse } from "next/server";

// export const GET = async () => {
//     const db =await connectDB()
//     const servicesCollection = db.collection('services')
//     try {
//         await servicesCollection.deleteMany();
//         const resp = await servicesCollection.insertMany(services);
//         return NextResponse.json({message : "Seeded Successfully"})
//     } catch (error) {
//         return NextResponse.json({message : "No Data Found"})
//     }
// }

import { connectDB } from "@/lib/connectDB";
import { services } from "@/lib/services";
import { NextResponse } from "next/server";

export const GET = async () => {
    try {
        const db = await connectDB();

        if (!db) {
            return NextResponse.json({ message: "Database connection failed" }, { status: 500 });
        }

        const servicesCollection = db.collection('services');

        if (!servicesCollection) {
            return NextResponse.json({ message: "Collection not found" }, { status: 404 });
        }

        // Delete all documents in the collection
        await servicesCollection.deleteMany();

        // Insert the seed data
        const resp = await servicesCollection.insertMany(services);

        return NextResponse.json({ message: "Seeded Successfully", insertedCount: resp.insertedCount });
    } catch (error) {
        console.error("Error seeding data:", error);
        return NextResponse.json({ message: "Failed to seed data", error }, { status: 500 });
    }
};
