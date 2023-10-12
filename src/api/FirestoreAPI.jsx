import { addDoc, collection, onSnapshot } from "firebase/firestore";
import { firestore } from "../firebasConfig";
import { toast } from "react-toastify";

let dbRef = collection(firestore, "posts");

export const createPost = async (data) => {
  let dataObject = {
    post: data,
  };
  try {
    const response = await addDoc(dbRef, dataObject);
    toast.success("Post has been added succesfully");
    console.log("res", response);
  } catch (error) {
    toast.error("Post has not been added");
    console.error(error);
  }
};

export const getPosts = (setAllPosts) => {
  onSnapshot(dbRef, (response) => {
    setAllPosts(
      response?.docs?.map((docs) => {
        return { ...docs.data(), id: docs.id };
      })
    );
  });
};
