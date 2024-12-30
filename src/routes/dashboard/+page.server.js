import { getUsersCount, getWorkoutsCount, getPopularGoals } from "$lib/db.js";

/** @type {import('./$types').PageServerLoad} */
export async function load() {
  try {
    const usersCount = await getUsersCount();
    const workoutsCount = await getWorkoutsCount();
    const popularGoals = await getPopularGoals();

    return {
      usersCount,
      workoutsCount,
      popularGoals,
    };
  } catch (error) {
    console.error("Error loading analytics data:", error.message);
    return {
      error: "Unable to load analytics data.",
    };
  }
}
