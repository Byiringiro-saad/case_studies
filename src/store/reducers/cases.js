import { createSlice } from "@reduxjs/toolkit";

//images
import pla_1 from "../../assets/pla_1.png";
import pla_2 from "../../assets/pla_2.png";
import pla_3 from "../../assets/pla_3.png";
import maxxLogo from "../../assets/maxx.png";

import pla_4 from "../../assets/pla_4.png";
import pla_5 from "../../assets/pla_5.png";
import untapLogo from "../../assets/untap.png";

import pla_6 from "../../assets/pla_6.png";
import fictionlyLogo from "../../assets/fictionly.png";

const casesSlice = createSlice({
  name: "cases",
  initialState: {
    cases: [
      {
        id: 0,
        company: "maxx",
        type: "Financial Services",
        title: "Digital strategy and implementation for a health tech startup",
        logo: maxxLogo,
        location: "India",
        website: "https://maxxhealthcare.com/",
        background:
          "A health and wellness startup providing holistic wellness programs was looking for a partner to develop and implement digital strategy.",
        problems: [
          "No digital infrastructure",
          "Zero presence in social media",
          "Aligning with brand strategy of family wellness",
          "Limited marketing budget",
        ],
        solutions: [
          "Developed a digital strategy plan for next 3 years",
          "Digital infrastructure setup (Website upgrade, chatbot implementation, Performance optimization, SEO audit and Optimization and Social media setup)",
          "Branding and awareness campaigns, Follower campaigns",
          "Lead generation, ORM, Minimal Viable Campaign",
          "Growth hacking and influencer marketing",
        ],
        challenges: [
          "Pandemic impact",
          "Competitive environment",
          "Limited marketing budget",
        ],
        platforms: [pla_1, pla_2, pla_3],
        results: [
          "Increase in overall visibility of brand online",
          "Engagement with prospective audience on website and other digital channels",
          "Acquired 1000+ new customers in First 6 months (20% more) as per the plan within planned budget",
        ],
      },
      {
        id: 1,
        company: "untap",
        type: "Financial Services",
        title: "Product concept definition and roadmap for a HR tech startup",
        logo: untapLogo,
        location: "Australia",
        website: "https://untap.com.au/",
        background:
          "A HR tech startup engaged us for preparing new product concept and roadmap leveraging the power of AI and video",
        problems: [
          "Define product concept",
          "Come up with a well researched and thought out product roadmap",
        ],
        solutions: [
          "Performed market research and came up with a Product strategy",
          "Define product concept and roadmap",
          "Create UX of the proposed mobile app",
        ],
        challenges: [
          "Bring order to the chaos in the thought process",
          "Vision of the product not clear",
        ],
        platforms: [pla_4, pla_5],
        results: [
          "Product strategy",
          "Minimal viable product concept",
          "Product roadmap",
        ],
      },
      {
        id: 2,
        company: "Fictionly",
        type: "Financial Services",
        title:
          "Product concept definition and roadmap for a content tech startup",
        logo: fictionlyLogo,
        location: "Australia",
        website: "https://fictionly.com/",
        background:
          "A content tech startup engaged us for preparing new product concept and roadmap in the space digital storytelling marketplace",
        problems: [
          "Define and develop product concept",
          "Come up with a well researched and thought out product roadmap",
        ],
        solutions: [
          "Performed market research and came up with a Product strategy",
          "Define product concept and roadmap",
        ],
        challenges: [
          "Vision of the product not clear",
          "target was unorganizaed user base",
        ],
        platforms: [pla_6, pla_5],
        results: [
          "Product strategy",
          "Minimal viable product concept",
          "Product roadmap",
        ],
      },
    ],
  },
  reducers: {},
});

export default casesSlice.reducer;
