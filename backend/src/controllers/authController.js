const User = require('../models/User');
const jwt = require('jsonwebtoken');

// ✅ REGISTER (manual user creation)
exports.register = async (req, res) => {
  try {
    const { name, email, role, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const user = await User.create({ name, email, role, password });

    res.status(201).json({
      message: 'User created',
      user,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ✅ LOGIN
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // 🔥 ADDED PASSWORD VALIDATION (ONLY THIS CHANGE)
    if (user.password !== password) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET
    );

    res.json({ token, user });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState(''); // ✅ added
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');

//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError('');
//     setLoading(true);

//     try {
//       const res = await axios.post('http://localhost:5000/api/auth/login', {
//         email,
//         password, // ✅ send password
//       });

//       // ✅ store token + user
//       localStorage.setItem('token', res.data.token);
//       localStorage.setItem('user', JSON.stringify(res.data.user));

//       // ✅ role-based redirect
//       if (res.data.user.role === 'admin') {
//         navigate('/admin-dashboard');
//       } else if (res.data.user.role === 'analyst') {
//         navigate('/analyst-dashboard');
//       } else {
//         navigate('/viewer-dashboard');
//       }
//     } catch (err) {
//       setError(err.response?.data?.message || 'Login failed');
//     }

//     setLoading(false);
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-r from-gray-100 to-gray-200 flex items-center justify-center px-4">
//       <div className="bg-white w-full max-w-md rounded-2xl shadow-xl p-8">
//         {/* Title */}
//         <div className="text-center mb-6">
//           <h1 className="text-xl font-semibold text-gray-800">
//             Zorvyn FinTech
//           </h1>
//           <p className="text-gray-500 text-sm">Login to Assignment Portal</p>
//         </div>

//         {/* Error */}
//         {error && (
//           <p className="text-red-500 text-sm text-center mb-2">{error}</p>
//         )}

//         {/* Form */}
//         <form className="space-y-4" onSubmit={handleSubmit}>
//           {/* Email */}
//           <div>
//             <label className="block text-sm text-gray-600 mb-1">Email</label>
//             <input
//               type="email"
//               placeholder="Enter your Email id ..."
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//               className="w-full px-4 py-2 border rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500"
//             />
//           </div>

//           {/* Password */}
//           <div>
//             <label className="block text-sm text-gray-600 mb-1">Password</label>
//             <input
//               type="password"
//               placeholder="Enter password"
//               value={password} // ✅ bind state
//               onChange={(e) => setPassword(e.target.value)}
//               required
//               className="w-full px-4 py-2 border rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500"
//             />
//           </div>

//           {/* Button */}
//           <button
//             type="submit"
//             disabled={loading}
//             className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
//           >
//             {loading ? 'Logging in...' : 'Sign In'}
//           </button>
//         </form>

//         <p className="text-center text-xs text-gray-400 mt-4">
//           Role-based access is active
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Login;
