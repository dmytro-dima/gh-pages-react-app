import { useState, useEffect } from "react";
import { projectStorage, db, timestamp } from "../../../../firebase";

const useStorage = (file, { images, setImages }) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);

  useEffect(() => {
    const storageRef = projectStorage.ref(file.name);
    const collectionRef = db.collection("images");

    storageRef.put(file).on(
      "state_changed",
      (snap) => setProgress((snap.bytesTransferred / snap.totalBytes) * 100),
      (err) => {
        setError(err);
      },
      async () => {
        const url = await storageRef.getDownloadURL();
        const createdAt = timestamp();
        await collectionRef.add({ url, createdAt });
        setImages("images", images.concat(url));
      }
    );
  }, [file]);

  return { progress, error };
};

export default useStorage;
