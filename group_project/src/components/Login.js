import React from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, googleProvider, firestore, signInWithPopup, doc, getDoc } from '../firebase';

const Login = () => {
  const navigate = useNavigate();

  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      console.log('User signed in: ', user); 

      const userRef = doc(firestore, "users", user.uid);
      const docSnap = await getDoc(userRef);
      if (!docSnap.exists()) {
        console.log('User not found in Firestore, redirecting to create profile'); 
        navigate('/create-profile');
      } else {
        console.log('User found in Firestore, redirecting to main'); 
        navigate('/main');
      }
    } catch (error) {
      console.error('Error signing in with Google: ', error);
    }
  };

  return (
    <div>
      <button onClick={signInWithGoogle}>Sign in with Google</button>
    </div>
  );
};

export default Login;
