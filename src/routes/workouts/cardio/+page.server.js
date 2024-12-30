import db from "$lib/db";

/** @type {import('./$types').PageServerLoad} */
export async function load() {
  try {
    const cardioWorkouts = await db.getCardioWorkouts();
    return { cardioWorkouts };
  } catch (error) {
    console.error("Error loading cardio workouts:", error);
    return {
      status: 500,
      error: new Error("Failed to load cardio workouts."),
    };
  }
}
