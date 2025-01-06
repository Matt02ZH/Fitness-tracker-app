export async function saveImage(file) {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", "unsigned_preset_name");
  formData.append("cloud_name", "dq5fgohkq"); 

  try {
    const response = await fetch(`https://api.cloudinary.com/v1_1/dq5fgohkq/image/upload`, {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      throw new Error("Failed to upload image to Cloudinary");
    }

    const data = await response.json();
    return data.secure_url; // Return the image URL for storage
  } catch (error) {
    console.error("Error uploading to Cloudinary:", error.message);
    throw error;
  }
}
