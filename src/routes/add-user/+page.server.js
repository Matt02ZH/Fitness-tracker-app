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
        const fileBuffer = Buffer.from(await profilePicture.arrayBuffer());

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
          newUser.profilePicture = result.secure_url; // Save the Cloudinary image URL
        } else {
          throw new Error(result.error?.message || "Image upload failed.");
        }
      } catch (error) {
        console.error("Error uploading image:", error.message);
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
