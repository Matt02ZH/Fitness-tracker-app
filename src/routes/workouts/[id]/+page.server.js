import db from "$lib/db";

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
  try {
    const { id } = params; // Extract the ID from the URL

    // Log the ID for debugging
    console.log("Received ID:", id);

    // Fetch workout using the updated `getWorkout` function
    const workout = await db.getWorkout(id);

    if (!workout) {
      console.error(`Workout not found for ID: ${id}`);
      return {
        status: 404,
        error: new Error("Workout not found"),
      };
    }

    return {
      workout,
    };
  } catch (error) {
    console.error("Error in load function:", error.message);
    return {
      status: 500,
      error: new Error("Internal Server Error"),
    };
  }
}
