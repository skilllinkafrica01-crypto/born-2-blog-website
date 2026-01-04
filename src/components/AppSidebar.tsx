import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Home,
  Download,
  Newspaper,
  Users,
  Briefcase,
  Mail,
  Info,
  Settings,
  HelpCircle,
  Shield,
  FileText,
  Heart,
  Menu,
  X,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/ThemeToggle";
import logo from "@/assets/logo.jpg";

const navItems = [
  { title: "Home", url: "/", icon: Home },
  { title: "Download App", url: "/download", icon: Download },
  { title: "Blog", url: "/blog", icon: Newspaper },
  { title: "About Us", url: "/about", icon: Info },
  { title: "Services", url: "/services", icon: Briefcase },
  { title: "Team", url: "/team", icon: Users },
  { title: "Contact", url: "/contact", icon: Mail },
  { title: "Support", url: "/support", icon: HelpCircle },
  { title: "Privacy Policy", url: "/privacy", icon: Shield },
  { title: "Terms of Service", url: "/terms", icon: FileText },
  { title: "Donate", url: "/donate", icon: Heart },
  { title: "Settings", url: "/settings", icon: Settings },
];

export function AppSidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Mobile Toggle Button - Right Side */}
      <button
        onClick={toggleSidebar}
        className="fixed top-4 right-4 z-[70] p-2 rounded-lg bg-card border border-border shadow-lg lg:hidden"
        aria-label="Toggle sidebar"
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-[55] lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed top-0 left-0 h-full w-72 bg-sidebar border-r border-sidebar-border z-[60] transition-transform duration-300",
          "lg:translate-x-0",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="p-6 border-b border-sidebar-border">
            <Link to="/" className="flex items-center gap-3" onClick={() => setIsOpen(false)}>
              <img
                src={logo}
                alt="Born to Blog Logo"
                className="h-12 w-12 rounded-full object-cover"
              />
              <div>
                <span className="font-heading font-bold text-xl text-gradient">
                  B2B
                </span>
                <p className="text-xs text-sidebar-foreground/60">Born to Blog</p>
              </div>
            </Link>
          </div>

          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto py-4">
            <ul className="space-y-1 px-3">
              {navItems.map((item) => {
                const isActive = location.pathname === item.url;
                return (
                  <li key={item.url}>
                    <Link
                      to={item.url}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        "flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-all duration-200",
                        isActive
                          ? "bg-sidebar-primary text-sidebar-primary-foreground shadow-lg"
                          : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                      )}
                    >
                      <item.icon className="h-5 w-5" />
                      <span>{item.title}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Footer */}
          <div className="p-4 border-t border-sidebar-border">
            <div className="flex items-center justify-between">
              <span className="text-sm text-sidebar-foreground/60">Theme</span>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
