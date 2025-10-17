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
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
  },
  {
    icon: FileText,
    title: "Content Syndication",
    description: "Amplify your content reach and engage decision-makers across premium networks",
    link: "/services/content-syndication",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
  },
  {
    icon: Mail,
    title: "Email Marketing",
    description: "Targeted email campaigns that nurture prospects and drive conversions",
    link: "/services/email-marketing",
    image: "https://images.unsplash.com/photo-1498049794561-7780e7231661?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
  },
  {
    icon: Database,
    title: "Database Management",
    description: "Clean, verified data that powers your marketing and sales success",
    link: "/services/database-management",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
  },
  {
    icon: Target,
    title: "Account-Based Marketing",
    description: "Personalized campaigns targeting high-value accounts with precision",
    link: "/services/abm",
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
    title: "Contact Center",
    description: "Customer service solutions",
    icon: MessageSquare,
    link: "/categories/contact-center",
    subcategories: ["Omnichannel", "AI Support", "Workforce Management"],
    image: "https://images.unsplash.com/photo-1565688534245-05d6b5be184a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
  }
];

export const stats = [
  { number: "500+", label: "Enterprise Clients", icon: Users },
  { number: "95%", label: "Client Retention", icon: Star },
  { number: "50M+", label: "Leads Generated", icon: Target },
  { number: "40+", label: "Countries Served", icon: Globe }
];