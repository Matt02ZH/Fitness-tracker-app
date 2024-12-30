import db from "$lib/db";

/** @type {import('./$types').PageServerLoad} */
export async function load() {
  try {
    const workouts = await db.getWorkouts();

    if (!workouts || workouts.length === 0) {
      return {
        status: 404,
        error: new Error("No workouts found"),
      };
    }

    return {
      workouts,
    };
  } catch (error) {
    console.error("Error in load function:", error.message);
    return {
      status: 500,
      error: new Error("Internal Server Error"),
    };
  }
}
