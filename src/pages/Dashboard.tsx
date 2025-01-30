import React from "react";
import { Shield, Trophy, Lock, Brain, Target, Activity } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { useNavigate } from "react-router-dom";



const learningProgress = [
  { name: 'Mon', value: 30 },
  { name: 'Tue', value: 45 },
  { name: 'Wed', value: 65 },
  { name: 'Thu', value: 75 },
  { name: 'Fri', value: 85 },
  { name: 'Sat', value: 90 },
  { name: 'Sun', value: 95 }
];

const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-gray-900 min-h-screen text-gray-100">
      <div className="flex-1 overflow-auto">
        <header className="flex h-16 items-center gap-4 border-b border-gray-700 px-6">   
          <h1 className="text-2xl font-semibold">Welcome to Sentrius</h1>
        </header>
        
        <main className="p-6 space-y-6">
       
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
           
            <div className="bg-gray-800 p-6 rounded-lg flex flex-col items-center text-center cursor-pointer hover:bg-gray-700 transition-colors">
              <Shield className="h-12 w-12 text-blue-400 mb-4" />
              <h2 className="text-xl font-semibold mb-2">Security Scan</h2>
              <p className="text-gray-400 mb-4">Run security scan</p>
              <button
              onClick={()=>{navigate('./pass-analysis')}}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg w-full">
                Start Scan
              </button>
            </div>

           
            <div className="bg-gray-800 p-6 rounded-lg flex flex-col items-center text-center cursor-pointer hover:bg-gray-700 transition-colors">
              <Lock className="h-12 w-12 text-purple-400 mb-4" />
              <h2 className="text-xl font-semibold mb-2">Password Analysis</h2>
              <p className="text-gray-400 mb-4">Check password strength</p>
              <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg w-full">
                Analyze Password
              </button>
            </div>

          
            <div className="bg-gray-800 p-6 rounded-lg flex flex-col items-center text-center cursor-pointer hover:bg-gray-700 transition-colors">
              <Trophy className="h-12 w-12 text-yellow-400 mb-4" />
              <h2 className="text-xl font-semibold mb-2">Learning Arena</h2>
              <p className="text-gray-400 mb-4">Learn through games</p>
              <button className="bg-yellow-600 hover:bg-yellow-700 text-white px-6 py-2 rounded-lg w-full">
                Start Learning
              </button>
            </div>

     
            <div className="bg-gray-800 p-6 rounded-lg">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold">Your Progress</h3>
                <Target className="h-6 w-6 text-green-400" />
              </div>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Learning Progress</span>
                    <span>75%</span>
                  </div>
                  <div className="h-2 bg-gray-700 rounded">
                    <div className="h-full bg-green-500 rounded" style={{ width: '75%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Security Score</span>
                    <span>85%</span>
                  </div>
                  <div className="h-2 bg-gray-700 rounded">
                    <div className="h-full bg-blue-500 rounded" style={{ width: '85%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Activity & Learning Progress */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Learning Progress Chart */}
            <div className="bg-gray-800 p-6 rounded-lg">
              <h2 className="text-xl font-semibold mb-4">Learning Progress</h2>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={learningProgress}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <XAxis dataKey="name" stroke="#9CA3AF" />
                    <YAxis stroke="#9CA3AF" />
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#1F2937', border: 'none' }}
                      labelStyle={{ color: '#9CA3AF' }}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="value" 
                      stroke="#60A5FA" 
                      strokeWidth={2}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-gray-800 p-6 rounded-lg">
              <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
              <div className="space-y-4">
                {[
                  { title: "Password Analysis Completed", time: "2 hours ago", desc: "Strong password detected" },
                  { title: "Security Scan", time: "Yesterday", desc: "No vulnerabilities found" },
                  { title: "Learning Achievement", time: "2 days ago", desc: "Completed Module 3" }
                ].map((activity, index) => (
                  <div key={index} className="flex items-center space-x-4 border-b border-gray-700 pb-4 last:border-0">
                    <div className="w-8 h-8 rounded-full bg-blue-900 flex items-center justify-center">
                      <Activity className="h-4 w-4 text-blue-400" />
                    </div>
                    <div>
                      <p className="font-medium">{activity.title}</p>
                      <p className="text-sm text-gray-400">{activity.desc}</p>
                      <p className="text-xs text-gray-500">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;