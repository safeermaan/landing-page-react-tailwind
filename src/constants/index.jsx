import { LayoutDashboard } from "lucide-react";
import { Handshake } from "lucide-react";
import { Brush } from "lucide-react";
import { Settings2 } from "lucide-react";
import { RotateCcw } from "lucide-react";
import { ChartColumnStacked } from "lucide-react";
 


import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";

export const navItems = [
  { label: "Features", href: "#" },
  { label: "Workflow", href: "#" },
  { label: "Pricing", href: "#" },
  { label: "Testimonials", href: "#" },
];

export const testimonials = [
  {
    user: "John Doe",
    company: "Stellar Solutions",
    image: user1,
    text: "Building our website with this platform was the best decision we made. It gave us a professional online presence that helped grow our client base significantly.",
  },
  {
    user: "Jane Smith",
    company: "Blue Horizon Technologies",
    image: user2,
    text: "Having a website made managing my business so much easier. The platform's features allowed me to focus on what really matters—serving my customers.",
  },
  {
    user: "David Johnson",
    company: "Quantum Innovations",
    image: user3,
    text: "The modern and unique designs of this platform helped us stand out against our competitors. Our site looks great and has brought in more customers than we expected.",
  },
  {
    user: "Ronee Brown",
    company: "Fusion Dynamics",
    image: user4,
    text: "Thanks to the fast and secure site we built, we’ve seen a significant increase in both traffic and sales. The platform made it easy to create a reliable, professional site.",
  },
  {
    user: "Michael Wilson",
    company: "Visionary Creations",
    image: user5,
    text: "Launching our website through this platform was seamless. It not only looks great but also loads quickly, giving our users a flawless experience.",
  },
  {
    user: "Emily Davis",
    company: "Synergy Systems",
    image: user6,
    text: "The platform allowed us to create a secure and scalable website that supports our growing business. We’re extremely happy with the results!",
  },
];


export const features = [
  {
    icon: <LayoutDashboard />,
    text: "Intuitive Dashboard",
    description:
      "Manage your business effortlessly with a user-friendly, drag-and-drop dashboard that simplifies tasks and optimizes workflows.",
  },
  {
    icon: <Brush />,
    text: "Cross-Platform Accessibility",
    description:
      "Grow your business with a platform that works seamlessly across devices, from mobile to desktop, ensuring accessibility anytime, anywhere.",
  },
  {
    icon: <Settings2 />,
    text: "Customizable Templates",
    description:
      "Get started quickly with customizable templates designed for various industries, helping you scale faster with minimal setup time.",
  },
  {
    icon: <RotateCcw />,
    text: "Real-Time Updates",
    description:
      "Monitor and make real-time updates to your business processes, allowing for instant adjustments and optimization.",
  },
  {
    icon: <Handshake />,
    text: "Team Collaboration",
    description:
      "Collaborate with your team in real-time, streamlining project management, communication, and idea-sharing to drive success.",
  },
  {
    icon: <ChartColumnStacked />,
    text: "Advanced Analytics",
    description:
      "Leverage data-driven insights from an integrated analytics dashboard to track performance, user behavior, and growth trends.",
  },
];


export const checklistItems = [
  {
    title: "Effortless Business Setup",
    description:
      "Quickly launch your online presence with easy-to-use tools that streamline setup and management.",
  },
  {
    title: "Automate Your Workflows",
    description:
      "Boost efficiency by automating everyday tasks, so you can focus on growing your business.",
  },
  {
    title: "Leverage Data for Growth",
    description:
      "Harness the power of analytics to make smarter decisions that scale your business faster.",
  },
  {
    title: "Engage Customers Easily",
    description:
      "Keep your audience engaged with real-time updates and promotions, boosting customer loyalty.",
  },
];


export const pricingOptions = [
  {
    title: "Starter",
    price: "$0",
    features: [
      "Basic Tools for Small Teams",
      "5 GB Cloud Storage",
      "Email Support",
      "Access to Free Resources",
    ],
  },
  {
    title: "Pro",
    price: "$10",
    features: [
      "Advanced Tools",
      "50 GB Cloud Storage",
      "Priority Support",
      "In-depth Analytics",
    ],
  },
  {
    title: "Business Plus",
    price: "$200",
    features: [
      "Unlimited Users & Features",
      "Unlimited Cloud Storage",
      "Dedicated Support Team",
      "Custom Solutions for Scaling",
    ],
  },
];


export const resourcesLinks = [
  { href: "#", text: "Get Started" },
  { href: "#", text: "Business Resources" },
  { href: "#", text: "Growth Tutorials" },
  { href: "#", text: "Integration Guide" },
  { href: "#", text: "Support Center" },
];


export const platformLinks = [
  { href: "#", text: "How It Works" },
  { href: "#", text: "Pricing & Plans" },
  { href: "#", text: "Small Business Solutions" },
  { href: "#", text: "Download App" },
  { href: "#", text: "Platform Updates" },
];


export const communityLinks = [
  { href: "#", text: "Business Events" },
  { href: "#", text: "Entrepreneur Meetups" },
  { href: "#", text: "Workshops & Training" },
  { href: "#", text: "Small Biz Webinars" },
  { href: "#", text: "Career Opportunities" },
];
