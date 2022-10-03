import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut
} from "firebase/auth";

export const createUser = async (email, password) => {
  const auth = getAuth()
  let credentials = null
  try {
    credentials = await createUserWithEmailAndPassword(auth, email, password)
  } catch (error) {
    console.log(error.message)
  }
  return credentials
}

export const signInUser = async (email, password) => {
  const auth = getAuth()
  let credentials = null
  try {
    credentials = await signInWithEmailAndPassword(auth, email, password)
  } catch (error) {
    console.log(error.message)
  }
  return credentials
}

let firebaseUser = null

export const useFirebaseUser = () => firebaseUser

export const initUser = async () => {
  const auth = getAuth()
  firebaseUser.value = auth.currentUser
  
  onAuthStateChanged(auth, user => {
    if (user) {
      const uid = user.uid
      console.log(uid)
    }
    firebaseUser = user
  })
}

export const signOutUser = async () => {
  const auth = getAuth()
  const result = await signOut(auth)
  return result
}