import {
  Home,
  Users,
  ShoppingBasket,
  Store,
  DollarSign,
  MapPin,
  LineChart,
  Bell,
  Globe,
  Newspaper,
  MessageSquare,
  FolderDown,
  Shield,
  Settings,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Link } from "react-router-dom";

import CropWiseLogo from "./logo";

// Admin sidebar items.
const adminSidebarItems = [
  {
    title: "Overview",
    url: "/admin",
    icon: Home,
  },
  {
    title: "User Management",
    url: "user-management",
    icon: Users,
  },
  {
    title: "Crop Management",
    url: "crop-management",
    icon: ShoppingBasket,
  },
  {
    title: "Market Management",
    url: "market-management",
    icon: Store,
  },
  {
    title: "Price Management",
    url: "price-management",
    icon: DollarSign,
  },
  {
    title: "Geo & Map",
    url: "geo-map",
    icon: MapPin,
  },
  {
    title: "Analytics & Forecasts",
    url: "analytics-forecasts",
    icon: LineChart,
  },
  {
    title: "Alerts & Notifications",
    url: "alerts-notifications",
    icon: Bell,
  },
  {
    title: "Languages & Accessibility",
    url: "languages-accessibility",
    icon: Globe,
  },
  {
    title: "News & Insights",
    url: "news-insights",
    icon: Newspaper,
  },
  {
    title: "Community Moderation",
    url: "community-moderation",
    icon: MessageSquare,
  },
  {
    title: "Premium Access",
    url: "premium-access",
    icon: FolderDown,
  },
  {
    title: "System Security",
    url: "system-security",
    icon: Shield,
  },
  {
    title: "Settings",
    url: "settings",
    icon: Settings,
  },
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>
            <CropWiseLogo />
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="mt-6 ">
              {adminSidebarItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link to={item.url} className="flex items-center gap-3">
                      <item.icon className="w-5 h-5 stroke-[2.5] text-muted-foreground" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
