// app/components/nav-data.ts
export type NavItem = {
  label: string;
  href?: string;
  children?: NavItem[];
};

export const NAV: NavItem[] = [
  {
    label: "ABOUT US",
    href: "/about",
    children: [
      { label: "About Us", href: "/about" },
      {
        label: "People Behind Smile",
        href: "/people",
        children: [
          { label: "Board of Directors", href: "/people/board" },
          { label: "Advisory Council", href: "/people/advisors" },
          { label: "Leadership Team", href: "/people/leadership" },
        ],
      },
      { label: "Reach & Presence", href: "/reach" },
      { label: "Civic Driven Change", href: "/cdc" },
      { label: "Smilestones", href: "/smilestones" },
      { label: "Good Governance", href: "/governance" },
    ],
  },
  {
    label: "OUR WORK",
    href: "/work",
    children: [
      { label: "Education", href: "/work/education" },
      { label: "Healthcare", href: "/work/healthcare" },
      { label: "Women Empowerment", href: "/work/women-empowerment" },
      { label: "Livelihood", href: "/work/livelihood" },
      { label: "Empowering Grassroots", href: "/work/grassroots" },
      { label: "Disaster Response", href: "/work/disaster-response" },
    ],
  },
  {
    label: "CAMPAIGNS",
    href: "/campaigns",
    children: [
      { label: "Tayyari Kal Ki", href: "/campaigns/tayyari-kal-ki" },
      { label: "Health Cannot Wait", href: "/campaigns/health-cannot-wait" },
      { label: "Shiksha Na Ruke", href: "/campaigns/shiksha-na-ruke" },
      { label: "She Can Fly", href: "/campaigns/she-can-fly" },
    ],
  },
  {
    label: "GET INVOLVED",
    href: "/get-involved",
    children: [
      { label: "Donate", href: "/donate" },
      { label: "Volunteer", href: "/volunteer" },
      { label: "Corporate Partnerships", href: "/corporate" },
    ],
  },
  {
    label: "MEDIA CENTRE",
    href: "/media",
    children: [
      { label: "Press Releases", href: "/media/press" },
      { label: "Gallery", href: "/media/gallery" },
      { label: "Publications", href: "/media/publications" },
    ],
  },
  {
    label: "RESOURCE CENTER",
    href: "/resources",
    children: [
      { label: "Annual Reports", href: "/resources/annual-reports" },
      { label: "Audited Statements", href: "/resources/audited" },
      { label: "Policies", href: "/resources/policies" },
    ],
  },
  { label: "CONTACT US", href: "/contact" },
];
