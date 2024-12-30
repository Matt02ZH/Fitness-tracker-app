import db from "$lib/db";

/** @type {import('./$types').PageServerLoad} */
export async function load() {
  try {
    const strengthWorkouts = await db.getStrengthWorkouts();
    return { strengthWorkouts };
  } catch (error) {
    console.error("Error loading strength workouts:", error);
    return {
      status: 500,
      error: new Error("Failed to load strength workouts."),
    };
  }
}
