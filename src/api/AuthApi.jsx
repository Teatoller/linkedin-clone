import { signInWithEmailAndPassword } from "firebase/auth";
import { authentication } from "../firebasConfig";

export const LoginApi = (email, password) => {
  try {
    let response = signInWithEmailAndPassword(authentication, email, password);
    return response;
  } catch (error) {
    return error;
  }
};
