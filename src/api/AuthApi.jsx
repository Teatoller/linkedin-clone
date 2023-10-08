import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { authentication } from "../firebasConfig";

export const LoginApi = (email, password) => {
  try {
    let response = signInWithEmailAndPassword(authentication, email, password);
    return response;
  } catch (error) {
    return error;
  }
};

export const RegisterApi = (email, password) => {
    try {
      let response = createUserWithEmailAndPassword(authentication, email, password);
      return response;
    } catch (error) {
      return error;
    }
  };