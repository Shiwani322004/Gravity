import { 
  TrendingUp, 
  Target, 
  Zap,
  Users,
  Globe,
  BarChart3,
  Mail,
  FileText,
  Megaphone,
  Database,
  Lightbulb,
  Rocket,
  Phone,
  MessageSquare,
  CheckCircle,
  Star
} from 'lucide-react';

export const headlines = [
  {
    title: "AI-Powered B2B Marketing Automation",
    subtitle: "Automate lead generation, email campaigns, and CRM integration for 3x faster growth",
  },
  {
    title: "Automate Your Sales Pipeline",
    subtitle: "Smart lead scoring and routing that converts prospects into customers automatically",
  },
  {
    title: "Scale Your B2B Lead Generation",
    subtitle: "Generate qualified leads 24/7 with intelligent automation workflows",
  },
  {
    title: "Integrate All Your Marketing Tools",
    subtitle: "Connect HubSpot, Salesforce, and 50+ platforms in one unified automation system",
  }
];

export const services = [
  {
    icon: TrendingUp,
    title: "B2B Lead Generation Automation",
    description: "AI-powered lead generation that identifies, scores, and routes qualified prospects automatically to your sales team",
    link: "/services/lead-generation",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
  },
  {
    icon: Mail,
    title: "Email Marketing Automation",
    description: "Automated email sequences with personalization, A/B testing, and advanced analytics to nurture leads through your sales funnel",
    link: "/services/email-marketing",
    image: "https://images.unsplash.com/photo-1498049794561-7780e7231661?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
  },
  {
    icon: FileText,
    title: "Content Syndication Platform",
    description: "Distribute your content across premium B2B networks with automated tracking and lead capture integration",
    link: "/services/content-syndication",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
  },
  {
    icon: Target,
    title: "Account-Based Marketing Automation",
    description: "Personalized multi-channel campaigns targeting high-value accounts with automated workflows and CRM synchronization",
    link: "/services/account-based-marketing",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
  }
];

export const categories = [
  {
    title: "Phone Systems",
    description: "Cloud-based communication solutions",
    icon: Phone,
    link: "/categories/phone-system",
    subcategories: ["VoIP", "Unified Communications", "Call Center"],
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
  },
  {
    title: "CRM Systems",
    description: "Customer relationship management platforms",
    icon: Users,
    link: "/categories/crm-system",
    subcategories: ["Sales CRM", "Marketing Automation", "Analytics"],
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
  },
  {
    title: "Business Intelligence",
    description: "Data analytics and reporting tools",
    icon: BarChart3,
    link: "/categories/business-intelligence",
    subcategories: ["Analytics", "Reporting", "Dashboards"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
  },
  {
    title: "GPS Fleet Management",
    description: "Customer service solutions",
    icon: MessageSquare,
    link: "/categories/GPS-fleet-management-software",
    subcategories: ["Omnichannel", "AI Support", "Workforce Management"],
    image: "https://images.unsplash.com/photo-1565688534245-05d6b5be184a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
  },
  
  
];

export const stats = [
  { number: "500+", label: "B2B Companies Automated", icon: Users },
  { number: "3x", label: "Faster Lead Conversion", icon: Star },
  { number: "50M+", label: "Qualified Leads Generated", icon: Target },
  { number: "50+", label: "CRM Integrations", icon: Globe }
];