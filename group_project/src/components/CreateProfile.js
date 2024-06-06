import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, firestore, doc, setDoc } from '../firebase';

const CreateProfile = () => {
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = auth.currentUser;
    if (user) {
      await setDoc(doc(firestore, "users", user.uid), {
        name,
        email: user.email,
      });
      console.log('User profile created in Firestore, redirecting to main'); 
      navigate('/main');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <button type="submit">Create Profile</button>
      </form>
    </div>
  );
};

export default CreateProfile;
