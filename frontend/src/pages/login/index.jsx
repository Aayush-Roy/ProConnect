// import { loginUser, registerUser } from '@/config/redux/action/authAction';
// import { emptyMessage } from '@/config/redux/reducer/authReducer';
// import UserLayout from '@/layout/UserLayout'
// import { useRouter } from 'next/router';
// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';

// const LoginComponent = () => {
//   const authState = useSelector((state) => state.auth);
//   const router = useRouter();
//   const dispatch = useDispatch();
//   const [isLogin, setIsLogin] = useState(true);
//   const[email,setEmailAddress] = useState("");
//   const[password,setPassword] = useState("");
//   const[username,setUsername] = useState("");
//   const[name,setName] = useState("")


//   useEffect(() => {
//     if (authState.loggedIn) router.push("/dashboard");
//   }, [authState.loggedIn]);

//   useEffect(()=>{
//   dispatch(emptyMessage());    
//   },[isLogin])
//   const handleRegister = (e) => {
//     e.preventDefault();
//     // TODO: handle login/signup logic
//     // console.log(isLogin ? "Logging in..." : "Signing up...");
//     console.log("registering")
//     dispatch((registerUser({username,email,password,name})))
//   };

//   const handleLogin =()=>{
//     console.log("login")
//     dispatch(loginUser({email,password}))
//   }
//   return (
//     <UserLayout>
      
//       <div className="flex justify-center items-center min-h-[80vh] bg-slate-50">
//        <p className={`${authState.isError ? "text-red-400" : "text-green-500"}`}>{authState.message}</p>

//         <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-8">
//           {/* Tabs */}
//           <div className="flex mb-6 border-b">
//             <button
//               onClick={() => setIsLogin(true)}
//               className={`w-1/2 py-2 font-semibold ${
//                 isLogin ? "border-b-2 border-blue-600 text-blue-600" : "text-slate-500"
//               }`}
//             >
//               Login
//             </button>
//             <button
//               onClick={() => setIsLogin(false)}
//               className={`w-1/2 py-2 font-semibold ${
//                 !isLogin ? "border-b-2 border-blue-600 text-blue-600" : "text-slate-500"
//               }`}
//             >
//               Sign Up
//             </button>
//           </div>

//           {/* Form */}
//           <form className="space-y-4" onSubmit={handleRegister}>
//             {!isLogin && (
//               <>
//                 <div>
//                   <label className="block text-sm font-medium text-slate-700">Full Name</label>
           
//                   <input
//                     onChange={(e)=>setName(e.target.value)}
//                     type="text"
//                     className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
//                     placeholder="John Doe"
//                     required
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium text-slate-700">Username</label>
//                   <input
//                     onChange={(e)=>setUsername(e.target.value)}
//                     type="text"
//                     className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
//                     placeholder="johndoe123"
//                     required
//                   />
//                 </div>
//               </>
//             )}
//             <div>
//               <label className="block text-sm font-medium text-slate-700">Email</label>
//               <input
//               onChange={(e)=>setEmailAddress(e.target.value)}
//                 type="email"
//                 className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
//                 placeholder="you@example.com"
//                 required
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-slate-700">Password</label>
//               <input
//                 onChange={(e)=>setPassword(e.target.value)}
//                 type="password"
//                 className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
//                 placeholder="********"
//                 required
//               />
//             </div>
            
            

//             <button
//               type="submit"
//               className="w-full py-2 rounded-md bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
//             >
//               {isLogin ? "Login" : "Sign Up"}
//             </button>
//           </form>

//           {/* Switch text */}
//           <p className="mt-4 text-center text-sm text-slate-600">
//             {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
//             <button
//               onClick={() => setIsLogin(!isLogin)}
//               className="text-blue-600 hover:underline"
//             >
//               {isLogin ? "Sign Up" : "Login"}
//             </button>
//           </p>
//         </div>
//       </div>
//     </UserLayout>
//   );
// };

// export default LoginComponent;
import { loginUser, registerUser } from '@/config/redux/action/authAction';
import { emptyMessage } from '@/config/redux/reducer/authReducer';
import UserLayout from '@/layout/UserLayout';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const LoginComponent = () => {
  const authState = useSelector((state) => state.auth);
  const router = useRouter();
  const dispatch = useDispatch();
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");

  useEffect(() => {
    if (authState.loggedIn) router.push("/dashboard");
  }, [authState.loggedIn]);

  useEffect(()=>{
    if(localStorage.getItem("token")){
      router.push("/dashboard")
    }
  })
  useEffect(() => {
  if (!isLogin && authState.message && !authState.isError) {
    // Registration was successful
    setIsLogin(true); // Switch to login tab
    dispatch(emptyMessage()); // Clear success message if needed
  }
}, [authState.message]);


  useEffect(() => {
    dispatch(emptyMessage()); 
  }, [isLogin]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      console.log("Logging in");
      dispatch(loginUser({ email, password }));
    } else {
      console.log("Registering");
      dispatch(registerUser({ username, email, password, name }));
    }
  };

  return (
    <UserLayout>
      <div className="flex justify-center items-center min-h-[80vh] bg-slate-50">
        <p className={`${authState.isError ? "text-red-400" : "text-green-500"}`}>
          {authState.message}
        </p>

        <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-8">
          {/* Tabs */}
          <div className="flex mb-6 border-b">
            <button
              onClick={() => setIsLogin(true)}
              className={`w-1/2 py-2 font-semibold ${
                isLogin ? "border-b-2 border-blue-600 text-blue-600" : "text-slate-500"
              }`}
            >
              Login
            </button>
            <button
              onClick={() => setIsLogin(false)}
              className={`w-1/2 py-2 font-semibold ${
                !isLogin ? "border-b-2 border-blue-600 text-blue-600" : "text-slate-500"
              }`}
            >
              Sign Up
            </button>
          </div>

          {/* Form */}
          <form className="space-y-4" onSubmit={handleSubmit}>
            {!isLogin && (
              <>
                <div>
                  <label className="block text-sm font-medium text-slate-700">Full Name</label>
                  <input
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700">Username</label>
                  <input
                    onChange={(e) => setUsername(e.target.value)}
                    type="text"
                    className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="johndoe123"
                    required
                  />
                </div>
              </>
            )}
            <div>
              <label className="block text-sm font-medium text-slate-700">Email</label>
              <input
                onChange={(e) => setEmailAddress(e.target.value)}
                type="email"
                className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="you@example.com"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700">Password</label>
              <input
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="********"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full py-2 rounded-md bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
            >
              {isLogin ? "Login" : "Sign Up"}
            </button>
          </form>

          {/* Switch text */}
          <p className="mt-4 text-center text-sm text-slate-600">
            {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="text-blue-600 hover:underline"
            >
              {isLogin ? "Sign Up" : "Login"}
            </button>
          </p>
        </div>
      </div>
    </UserLayout>
  );
};

export default LoginComponent;
// import { loginUser, registerUser } from '@/config/redux/action/authAction';
// import { emptyMessage } from '@/config/redux/reducer/authReducer';
// import UserLayout from '@/layout/UserLayout';
// import { useRouter } from 'next/router';
// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';

// const LoginComponent = () => {
//   const authState = useSelector((state) => state.auth);
//   const router = useRouter();
//   const dispatch = useDispatch();
//   const [isLogin, setIsLogin] = useState(true);
//   const [email, setEmailAddress] = useState("");
//   const [password, setPassword] = useState("");
//   const [username, setUsername] = useState("");
//   const [name, setName] = useState("");

//   // Redirect to dashboard if already logged in
//   useEffect(() => {
//     if (authState.loggedIn || localStorage.getItem("token")) {
//       router.push("/dashboard");
//     }
//   }, [authState.loggedIn]);

//   // Clear messages when switching tabs
//   useEffect(() => {
//     dispatch(emptyMessage());
//   }, [isLogin]);

//   // Switch to login tab after successful registration
//   useEffect(() => {
//     if (!isLogin && authState.message && !authState.isError) {
//       dispatch(emptyMessage()); // clear message first to avoid shake
//       setIsLogin(true); // then switch to login
//     }
//   }, [authState.message]);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (isLogin) {
//       dispatch(loginUser({ email, password }));
//     } else {
//       dispatch(registerUser({ username, email, password, name }));
//     }
//   };

//   return (
//     <UserLayout>
//       <div className="flex justify-center items-center min-h-[80vh] bg-slate-50">
//         <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-8">
//           {/* Tabs */}
//           <div className="flex mb-6 border-b">
//             <button
//               onClick={() => setIsLogin(true)}
//               className={`w-1/2 py-2 font-semibold ${
//                 isLogin ? "border-b-2 border-blue-600 text-blue-600" : "text-slate-500"
//               }`}
//             >
//               Login
//             </button>
//             <button
//               onClick={() => setIsLogin(false)}
//               className={`w-1/2 py-2 font-semibold ${
//                 !isLogin ? "border-b-2 border-blue-600 text-blue-600" : "text-slate-500"
//               }`}
//             >
//               Sign Up
//             </button>
//           </div>

//           {/* Message */}
//           {authState.message && (
//             <p
//               className={`mb-4 text-center ${
//                 authState.isError ? "text-red-400" : "text-green-500"
//               }`}
//             >
//               {authState.message}
//             </p>
//           )}

//           {/* Form */}
//           <form className="space-y-4" onSubmit={handleSubmit}>
//             {!isLogin && (
//               <>
//                 <div>
//                   <label className="block text-sm font-medium text-slate-700">Full Name</label>
//                   <input
//                     onChange={(e) => setName(e.target.value)}
//                     type="text"
//                     className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
//                     placeholder="John Doe"
//                     required
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium text-slate-700">Username</label>
//                   <input
//                     onChange={(e) => setUsername(e.target.value)}
//                     type="text"
//                     className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
//                     placeholder="johndoe123"
//                     required
//                   />
//                 </div>
//               </>
//             )}
//             <div>
//               <label className="block text-sm font-medium text-slate-700">Email</label>
//               <input
//                 onChange={(e) => setEmailAddress(e.target.value)}
//                 type="email"
//                 className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
//                 placeholder="you@example.com"
//                 required
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-slate-700">Password</label>
//               <input
//                 onChange={(e) => setPassword(e.target.value)}
//                 type="password"
//                 className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
//                 placeholder="********"
//                 required
//               />
//             </div>

//             <button
//               type="submit"
//               className="w-full py-2 rounded-md bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
//             >
//               {isLogin ? "Login" : "Sign Up"}
//             </button>
//           </form>

//           {/* Switch text */}
//           <p className="mt-4 text-center text-sm text-slate-600">
//             {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
//             <button
//               onClick={() => setIsLogin(!isLogin)}
//               className="text-blue-600 hover:underline"
//             >
//               {isLogin ? "Sign Up" : "Login"}
//             </button>
//           </p>
//         </div>
//       </div>
//     </UserLayout>
//   );
// };

// export default LoginComponent;
