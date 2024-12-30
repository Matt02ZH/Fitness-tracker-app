import db from "$lib/db";

/** @type {import('./$types').PageServerLoad} */
export async function load() {
  try {
    const users = await db.getUsers(); // Fetch all users from the database

    if (!users || users.length === 0) {
      return {
        status: 404,
        error: new Error("No users found"),
      };
    }

    return {
      users,
    };
  } catch (error) {
    console.error("Error in load function:", error.message);
    return {
      status: 500,
      error: new Error("Internal Server Error"),
    };
  }
}
