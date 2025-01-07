import { saveImage } from "$lib/imageHandler.js";
import db from "$lib/db.js";

/** @type {import('./$types').Actions} */
export const actions = {
  create: async ({ request }) => {
    const formData = await request.formData();

    const newUser = {
      name: formData.get("name"),
      age: parseInt(formData.get("age"), 10),
      email: formData.get("email"),
      goal: formData.get("goal"),
    };

    const profilePicture = formData.get("profilePicture");
    if (profilePicture && profilePicture.size > 0) {
      try {
        newUser.profilePicture = await saveImage(profilePicture);
      } catch (error) {
        console.error("Error saving image:", error.message);
        return { success: false, error: "Image upload failed" };
      }
    }

    try {
      await db.createUser(newUser);
      return { success: true };
    } catch (error) {
      console.error("Error creating user:", error.message);
      return { success: false, error: "Failed to save user to database" };
    }
  },
};