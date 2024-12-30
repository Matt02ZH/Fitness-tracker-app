import fs from "fs";
import path from "path";

export async function saveImage(file) {
  const fileName = `${Date.now()}-${file.name}`;
  const uploadPath = path.resolve("static/uploads", fileName);

  try {
    // Convert the file to a Buffer
    const fileBuffer = Buffer.from(await file.arrayBuffer());

    // Ensure the uploads directory exists
    fs.mkdirSync(path.dirname(uploadPath), { recursive: true });

    // Write the file synchronously
    fs.writeFileSync(uploadPath, fileBuffer);

    // Return the relative path to the saved image
    return `/uploads/${fileName}`;
  } catch (error) {
    console.error("Error saving image:", error.message);
    throw error; // Propagate the error to the calling function
  }
}
