import db from "$lib/db.js";
import { v2 as cloudinary } from "cloudinary";

// Cloudinary configuration
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

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
        const buffer = Buffer.from(await workoutImage.arrayBuffer());
        const result = await new Promise((resolve, reject) => {
          const stream = cloudinary.uploader.upload_stream(
            { resource_type: "image", folder: "fitness-tracker/workouts" },
            (error, uploadResult) => {
              if (error) {
                reject(`Cloudinary Upload Error: ${error.message}`);
              } else {
                resolve(uploadResult);
              }
            }
          );
          stream.end(buffer); // Stream the image buffer to Cloudinary
        });

        workoutImageUrl = result.secure_url; // Store Cloudinary's secure URL
      } catch (error) {
        console.error("Error uploading image:", error);
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
      return { success: false, error: "Failed to save workout to database" };
    }
  },
};
