import { connectDB } from "@/lib/mongodb";
import User from "@/lib/models/contact.model";
import { NextResponse } from "next/server";

interface UserRequest {
  name: string;
  email: string;
  message: string;
}
export async function GET() {
  await connectDB();

  const users = await User.find().lean(); 
  return NextResponse.json(users);
}

export async function POST(request: Request) {
  try {
    await connectDB();

    const body: UserRequest = await request.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, message: "All fields are required" },
        { status: 400 }
      );
    }

    const user = await User.create({ name, email, message });

    return NextResponse.json({
      success: true,
      message: "User created successfully",
      user,
    });
  } catch (error) {
    console.error("❌ Error in POST /api/user:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}
