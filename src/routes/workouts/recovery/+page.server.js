import db from "$lib/db";

/** @type {import('./$types').PageServerLoad} */
export async function load() {
  try {
    const recoveryWorkouts = await db.getRecoveryWorkouts();
    return { recoveryWorkouts };
  } catch (error) {
    console.error("Error loading recovery workouts:", error);
    return {
      status: 500,
      error: new Error("Failed to load recovery workouts."),
    };
  }
}
