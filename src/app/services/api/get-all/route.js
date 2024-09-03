// import { connectDB } from "@/lib/connectDB"
// import { NextResponse } from "next/server";

// export const GET = async () => {
//     const db =await connectDB()
//     const servicesCollection = db.collection('services')
//     try {
//         const services = await servicesCollection.find().toArray();
//         return NextResponse.json({services})
//     } catch (error) {
//         console.log(error);
//         return NextResponse.json({message : "No Data Found", error})
//     }
// }

import { connectDB } from "@/lib/connectDB";
import { NextResponse } from "next/server";

export const GET = async () => {
    try {
        const db = await connectDB();

        if (!db) {
            return NextResponse.json({ message: "Database connection failed" }, { status: 500 });
        }

        const servicesCollection = db.collection('services');

        // Check if collection exists
        if (!servicesCollection) {
            return NextResponse.json({ message: "Collection not found" }, { status: 404 });
        }

        const services = await servicesCollection.find().toArray();
        return NextResponse.json({ services });
    } catch (error) {
        console.error("Error fetching services:", error);
        return NextResponse.json({ message: "No Data Found", error }, { status: 500 });
    }
};
