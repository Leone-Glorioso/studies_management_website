// import React, {useState} from 'react';
// import firebase from "firebase/compat";
//
// const LoginWindow = () => {
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');
//
//     const handleLogin = async () => {
//         try {
//             const userCredential = await firebase.auth().signInWithEmailAndPassword(username, password);
//             const user = userCredential.user;
//             console.log('Login successful:', user);
//             // Add your further logic after successful login
//         } catch (error) {
//             console.error('Login failed:', error.message);
//             // Handle login error here
//         }
//     };
//
//     return (
//         <div
//             style={{
//                 backgroundColor: 'beige',
//                 padding: '20px',
//                 width: '300px',
//                 margin: 'auto',
//                 marginTop: '100px',
//                 borderRadius: '10px',
//                 boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
//             }}
//         >
//             <h2>Login</h2>
//             <label>
//                 Username:
//                 <input
//                     type="text"
//                     value={username}
//                     onChange={(e) => setUsername(e.target.value)}
//                 />
//             </label>
//             <br />
//             <label>
//                 Password:
//                 <input
//                     type="password"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                 />
//             </label>
//             <br />
//             <button
//                 style={{
//                     backgroundColor: 'forestgreen',
//                     color: 'white',
//                     padding: '10px',
//                     borderRadius: '5px',
//                     cursor: 'pointer',
//                 }}
//                 onClick={handleLogin}
//             >
//                 Login
//             </button>
//         </div>
//     );
// };
//
// export default LoginWindow;