import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <div className="text-center bg-white/10 backdrop-blur-md p-10 rounded-2xl shadow-2xl">
        <h1 className="text-4xl font-bold text-white mb-4">
          🎨 Tailwind + Vite
        </h1>
        <p className="text-lg text-white/90">
          If you can see this colorful gradient — Tailwind is working! 🚀
        </p>
      </div>
    </div>
  );
}

export default App;
