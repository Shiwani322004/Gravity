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
    title: "Transform Your B2B Marketing",
    subtitle: "Data-driven strategies that deliver qualified leads and measurable ROI",
  },
  {
    title: "Connect With Decision Makers",
    subtitle: "Reach the right audience at the right time with precision targeting",
  },
  {
    title: "Accelerate Your Sales Cycle",
    subtitle: "Shorten time-to-close with intelligent demand generation",
  },
  {
    title: "Fuel Growth With Content",
    subtitle: "Strategic content that engages, educates, and converts",
  }
];

export const services = [
  {
    icon: TrendingUp,
    title: "Lead Generation",
    description: "Generate high-quality, sales-ready leads with our proven multi-channel approach",
    link: "/services/lead-generation",
    image: "/images/hh1.png"
  },
  {
    icon: FileText,
    title: "Content Syndication",
    description: "Amplify your content reach and engage decision-makers across premium networks",
    link: "/services/content-syndication",
    image: "/images/hh2.png"
  },
  {
    icon: Mail,
    title: "Email Marketing",
    description: "Targeted email campaigns that nurture prospects and drive conversions",
    link: "/services/email-marketing",
    image: "/images/hh3.png"
  },
  
  {
    icon: Target,
    title: "Account-Based Marketing",
    description: "Personalized campaigns targeting high-value accounts with precision",
    link: "/services/abm",
    image: "/images/hh4.png"
  }
];

export const categories = [
  {
    title: "Phone Systems",
    description: "Cloud-based communication solutions",
    icon: Phone,
    link: "/categories/phone-system",
    subcategories: ["VoIP", "Unified Communications", "Call Center"],
    image: "/images/s1.png"
  },
  {
    title: "CRM Systems",
    description: "Customer relationship management platforms",
    icon: Users,
    link: "/categories/crm-system",
    subcategories: ["Sales CRM", "Marketing Automation", "Analytics"],
    image: "/images/s2.png"
  },
  {
    title: "Business Intelligence",
    description: "Data analytics and reporting tools",
    icon: BarChart3,
    link: "/categories/business-intelligence",
    subcategories: ["Analytics", "Reporting", "Dashboards"],
    image: "/images/s3.png"
  },
  {
    title: "GPS Fleet Management",
    description: "Customer service solutions",
    icon: MessageSquare,
    link: "/categories/GPS-fleet-management-software",
    subcategories: ["Omnichannel", "AI Support", "Workforce Management"],
    image: "/images/s4.png"
  },
  
  
];

export const stats = [
  { number: "500+", label: "Enterprise Clients", icon: Users },
  { number: "95%", label: "Client Retention", icon: Star },
  { number: "50M+", label: "Leads Generated", icon: Target },
  { number: "40+", label: "Countries Served", icon: Globe }
];