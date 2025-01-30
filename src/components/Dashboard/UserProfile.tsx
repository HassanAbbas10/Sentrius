import type React from "react";
import { useEffect, useState } from "react";
import { ChevronDown, LogOutIcon, Settings2Icon, User2 } from "lucide-react";
import { account } from "../../Appwrite/DbConn";
import { useNavigate } from "react-router-dom";
import { User } from "../../types/types";
import { UserProfileProps } from "../../types/types";

const UserProfile: React.FC<UserProfileProps> = ({ isExpanded }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true); 

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await account.deleteSession("current");
      console.log("User logged out successfully.");
      navigate("/login");
    } catch (error) {
      console.error("Logout failed:", error);
      alert("An error occurred during logout. Please try again.");
    }
  };

  useEffect(() => {
    const getUsers = async () => {
      try {
        const users: User = await account.get();
        setUser(users);
      } catch (error) {
        console.error("User data fetching failed", error);
        alert("Unable to fetch user data.");
      } finally {
        setLoading(false); // ✅ Stop loading after fetching data
      }
    };
    getUsers();
  }, []);

  return (
    <div className="relative p-4 border-t border-gray-700">
      <div className="flex items-center cursor-pointer" onClick={toggleMenu}>
        {loading ? (
          <p className="text-sm text-gray-400">Loading...</p> 
        ) : user ? (
          <>
            <img
              src={typeof user.avatar === "string" ? user.avatar : "/placeholder.svg?height=32&width=32"}
              alt="User Avatar"
              className="w-8 h-8 rounded-full"
            />
            {isExpanded && (
              <>
                <div className="ml-3">
                  <p className="text-sm font-medium">{user.name}</p>
                  <p className="text-xs text-gray-400">{user.email}</p>
                </div>
                <ChevronDown
                  className={`ml-auto w-5 h-5 text-gray-400 transition-transform duration-200 ${
                    isMenuOpen ? "transform rotate-180" : ""
                  }`}
                />
              </>
            )}
          </>
        ) : (
          <p className="text-sm text-gray-400">User not found</p> // ✅ Handle case when user is null
        )}
      </div>

      {isMenuOpen && isExpanded && user && (
        <div className="absolute bottom-full left-0 w-full bg-gray-800 rounded-t-lg shadow-lg overflow-hidden">
          <a href="/profile" className="flex items-center px-4 py-2 text-sm text-gray-300 hover:bg-gray-700">
            <User2 className="w-4 h-4 mr-2" />
            Profile
          </a>
          <a href="/settings" className="flex items-center px-4 py-2 text-sm text-gray-300 hover:bg-gray-700">
            <Settings2Icon className="w-4 h-4 mr-2" />
            Settings
          </a>
          <a onClick={handleLogout} className="flex items-center px-4 py-2 text-sm text-gray-300 hover:bg-gray-700">
            <LogOutIcon className="w-4 h-4 mr-2" />
            Logout
          </a>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
