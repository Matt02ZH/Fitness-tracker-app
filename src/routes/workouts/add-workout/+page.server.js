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
        const fileBuffer = Buffer.from(await workoutImage.arrayBuffer());

        // Use Cloudinary unsigned upload endpoint
        const uploadPreset = "unsigned_preset_name"; // Replace with your actual preset name
        const cloudName = "dq5fgohkq"; // Your Cloudinary cloud name
        const response = await fetch(
          `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
          {
            method: "POST",
            body: new FormData().append("file", new Blob([fileBuffer])).append("upload_preset", uploadPreset),
          }
        );

        const result = await response.json();

        if (result.secure_url) {
          workoutImageUrl = result.secure_url; // Save the Cloudinary image URL
        } else {
          throw new Error(result.error?.message || "Image upload failed.");
        }
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
