import React, { useState, useEffect } from "react";
import { Lock, Check, X, Shield, AlertTriangle, Eye, EyeOff } from "lucide-react";

const PasswordAnalysis: React.FC = () => {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [score, setScore] = useState(0);

  const calculateStrength = (pass: string) => {
    let score = 0;
    
    // Length check
    if (pass.length >= 8) score += 20;
    if (pass.length >= 12) score += 10;
    
    // Character variety checks
    if (/[A-Z]/.test(pass)) score += 20;
    if (/[a-z]/.test(pass)) score += 20;
    if (/[0-9]/.test(pass)) score += 15;
    if (/[^A-Za-z0-9]/.test(pass)) score += 15;
    
    return Math.min(score, 100);
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return "bg-green-500";
    if (score >= 60) return "bg-yellow-500";
    if (score >= 40) return "bg-orange-500";
    return "bg-red-500";
  };

  const getScoreText = (score: number) => {
    if (score >= 80) return "Very Strong";
    if (score >= 60) return "Strong";
    if (score >= 40) return "Moderate";
    return "Weak";
  };

  useEffect(() => {
    const newScore = calculateStrength(password);
    setScore(newScore);
  }, [password]);

  return (
    <div className="bg-gray-900 min-h-screen text-gray-100">
      <div className="flex-1 overflow-auto">
        <header className="flex h-16 items-center gap-4 border-b border-gray-700 px-6">   
          <h1 className="text-2xl font-semibold">Password Analysis</h1>
        </header>
        
        <main className="p-6 max-w-4xl mx-auto space-y-6">
          {/* Password Input Section */}
          <div className="bg-gray-800 p-6 rounded-lg">
            <div className="flex items-center justify-center mb-6">
              <Lock className="h-12 w-12 text-purple-400" />
            </div>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-gray-900 text-gray-100 px-4 py-3 rounded-lg pr-12 border border-gray-700 focus:border-purple-500 focus:outline-none"
                placeholder="Enter your password to analyze"
              />
              <button
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-300"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          {/* Strength Meter */}
          <div className="bg-gray-800 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Password Strength</h2>
            <div className="space-y-4">
              <div className="h-2 bg-gray-700 rounded-full">
                <div 
                  className={`h-full rounded-full transition-all duration-500 ${getScoreColor(score)}`}
                  style={{ width: `${score}%` }}
                ></div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-lg font-medium">{getScoreText(score)}</span>
                <span className="text-lg font-medium">{score}%</span>
              </div>
            </div>
          </div>

          {/* Requirements Checklist */}
          <div className="bg-gray-800 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Password Requirements</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { check: password.length >= 8, text: "At least 8 characters" },
                { check: /[A-Z]/.test(password), text: "Contains uppercase letter" },
                { check: /[a-z]/.test(password), text: "Contains lowercase letter" },
                { check: /[0-9]/.test(password), text: "Contains number" },
                { check: /[^A-Za-z0-9]/.test(password), text: "Contains special character" },
                { check: password.length >= 12, text: "12+ characters (recommended)" }
              ].map((requirement, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className={`rounded-full p-1 ${requirement.check ? 'bg-green-500/20 text-green-500' : 'bg-gray-700/20 text-gray-400'}`}>
                    {requirement.check ? <Check size={16} /> : <X size={16} />}
                  </div>
                  <span className={requirement.check ? 'text-gray-100' : 'text-gray-400'}>
                    {requirement.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Security Tips */}
          <div className="bg-gray-800 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Security Tips</h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Shield className="h-5 w-5 text-blue-400 mt-1" />
                <p className="text-gray-300">Avoid using personal information like birthdays or names</p>
              </div>
              <div className="flex items-start space-x-3">
                <Shield className="h-5 w-5 text-blue-400 mt-1" />
                <p className="text-gray-300">Use a unique password for each account</p>
              </div>
              <div className="flex items-start space-x-3">
                <Shield className="h-5 w-5 text-blue-400 mt-1" />
                <p className="text-gray-300">Consider using a password manager for secure storage</p>
              </div>
              <div className="flex items-start space-x-3">
                <AlertTriangle className="h-5 w-5 text-yellow-400 mt-1" />
                <p className="text-gray-300">Never share your password or store it in plain text</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default PasswordAnalysis;