import db from "$lib/db.js";
import { saveImage } from "$lib/imageHandler.js";

/** @type {import('./$types').Actions} */
export const actions = {
  create: async ({ request }) => {
    const formData = await request.formData();

    const goal = formData.get("goal");
    const frequency = formData.get("frequency");
    const workoutImage = formData.get("workout-image");

    // Handle exercises
    const exercises = [
      {
        name: formData.get("exercise-name"),
        reps: parseInt(formData.get("exercise-reps"), 10),
        sets: parseInt(formData.get("exercise-sets"), 10),
        weight: parseFloat(formData.get("exercise-weight")) || 0,
      },
    ];

    if (!goal || !frequency || exercises.length === 0) {
      return { success: false, error: "Invalid form data" };
    }

    let workoutImageUrl = null;
    if (workoutImage && workoutImage.size > 0) {
      try {
        workoutImageUrl = await saveImage(workoutImage); // Save image
      } catch (err) {
        console.error("Error saving image:", err.message);
        return { success: false, error: "Image upload failed" };
      }
    }

    const newWorkout = {
      Goal: goal,
      Frequency: frequency,
      exercises,
      Image_url: workoutImageUrl,
    };

    try {
      await db.createWorkout(newWorkout); // Save to database
      return { success: true };
    } catch (error) {
      console.error("Error creating workout:", error.message);
      return { success: false };
    }
  },
};