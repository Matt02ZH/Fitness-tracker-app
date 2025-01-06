import { v2 as cloudinary } from 'cloudinary';
import db from '$lib/db.js';

// Configure Cloudinary with environment variables
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

/** @type {import('./$types').Actions} */
export const actions = {
  create: async ({ request }) => {
    const formData = await request.formData();

    const newUser = {
      name: formData.get('name'),
      age: parseInt(formData.get('age'), 10),
      email: formData.get('email'),
      goal: formData.get('goal'),
    };

    const profilePicture = formData.get('profilePicture');

    // Upload the image to Cloudinary if provided
    if (profilePicture && profilePicture.size > 0) {
      try {
        const buffer = Buffer.from(await profilePicture.arrayBuffer());
        const result = await cloudinary.uploader.upload_stream(
          { resource_type: 'image', folder: 'fitness-tracker/users' },
          (error, uploadResult) => {
            if (error) throw new Error(`Cloudinary Upload Error: ${error.message}`);
            newUser.profilePicture = uploadResult.secure_url;
          }
        );
        result.end(buffer); // Stream the buffer
      } catch (error) {
        console.error('Error uploading image:', error.message);
        return { success: false, error: 'Image upload failed' };
      }
    }

    try {
      await db.createUser(newUser); // Save user in the database
      return { success: true };
    } catch (error) {
      console.error('Error creating user:', error.message);
      return { success: false, error: 'Failed to save user to database' };
    }
  },
};
