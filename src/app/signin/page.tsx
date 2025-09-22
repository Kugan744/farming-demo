"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation'; // Import the router
import styles from './SignIn.module.css';
import Link from 'next/link';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter(); // Initialize the router

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // --- Authentication Logic (Placeholder) ---
    // In a real application, you would add your authentication logic here.
    // You would typically make an API call to your backend to verify
    // the user's credentials.
    
    console.log('Attempting to sign in with:', { email, password });

    // If authentication is successful, redirect to the dashboard.
    // For now, we will redirect directly on submit.
    router.push('/dashboard'); 
  };

  return (
    <div className={styles.container}>
      <div className={styles.formWrapper}>
        <h1 className={styles.title}>Welcome Back!</h1>
        <p className={styles.subtitle}>Sign in to manage your farm</p>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.inputGroup}>
            <label htmlFor="email" className={styles.label}>Email Address</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={styles.input}
              required
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="password" className={styles.label}>Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={styles.input}
              required
            />
          </div>
          <button type="submit" className={styles.button}>Sign In</button>
        </form>
        <p className={styles.signupPrompt}>
          Don't have an account? <Link href="/signup" className={styles.signupLink}>Sign Up</Link>
        </p>
      </div>
    </div>
  );
}