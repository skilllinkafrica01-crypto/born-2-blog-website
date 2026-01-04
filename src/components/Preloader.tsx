import { useEffect, useState } from "react";
import logo from "@/assets/logo.jpg";

const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center transition-all duration-700 bg-background ${
        isLoading ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="relative">
        {/* Outer spinning ring */}
        <div className="absolute inset-0 -m-4 rounded-full border-4 border-muted border-t-primary animate-spin" />
        
        {/* Glow effect */}
        <div className="absolute inset-0 rounded-full bg-primary/20 blur-2xl animate-pulse-glow" />
        
        {/* Logo */}
        <div className="relative w-28 h-28 rounded-full overflow-hidden shadow-3d">
          <img
            src={logo}
            alt="Born to Blog"
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Loading text */}
        <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 whitespace-nowrap">
          <span className="text-sm font-medium text-muted-foreground tracking-wider">
            Loading...
          </span>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
