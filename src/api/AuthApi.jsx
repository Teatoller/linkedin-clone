import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
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
    let response = createUserWithEmailAndPassword(
      authentication,
      email,
      password
    );
    return response;
  } catch (error) {
    return error;
  }
};

export const GoogleSignInAPI = () => {
  try {
    let googleProvider = new GoogleAuthProvider();
    let res = signInWithPopup(authentication, googleProvider);
    return res;
  } catch (err) {
    return err;
  }
};
