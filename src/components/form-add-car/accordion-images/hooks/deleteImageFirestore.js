import { db } from "../../../../firebase";

export function deleteImage(imageId) {
  return db
    .collection("images")
    .doc(imageId)
    .delete()
    .then(() => imageId);
}
