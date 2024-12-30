import db from "$lib/db";
import { ObjectId } from "mongodb";

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
  try {
    const { id } = params; // Extract the ID from the URL

    // Handle both string and ObjectId formats for _id
    const queryId = ObjectId.isValid(id) ? new ObjectId(id) : id;

    const user = await db.getUser(queryId);

    if (!user) {
      return {
        status: 404,
        error: new Error("User not found"),
      };
    }

    return {
      user,
    };
  } catch (error) {
    console.error("Error in load function:", error.message);
    return {
      status: 500,
      error: new Error("Internal Server Error"),
    };
  }
}
