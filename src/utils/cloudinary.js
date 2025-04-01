import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({
  cloud_name: process.env.CLOUDANARY_CLOUD_NAME,
  api_key: process.env.CLOUDANARY_API_KEY,
  api_secret: process.env.CLOUDANARY_API_SECRET,
});

const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return null;
    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });
    // file has successfully uploaded to cloudinary
    console.log("File uploaded successfully", response.url);
    return response;
  } catch (error) {
    fs.unLinkSync(localFilePath); // remove the locally saved temporary files as the upload operation got failed
    return null;
  }
};

export { uploadOnCloudinary };
