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
      { label: "About Us" },
      {
        label: "People Behind Smile",
        href: "/people",
        children: [
          { label: "Our People", href: "/people/board" },
          { label: "Mentors", href: "/people/advisors" },
          { label: "Leadership", href: "/people/leadership" },
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
    { label: "Health", href: "/work/health" },                      // was "Healthcare"
    { label: "Livelihood", href: "/work/livelihood" },
    { label: "Women Empowerment", href: "/work/women-empowerment" },
    { label: "Disaster Response", href: "/work/disaster-response" },
    { label: "Empowering Grassroots", href: "/work/grassroots" },

    // New nested submenu exactly like the reference
    {
      label: "Privileged Children",
      href: "/work/privileged-children",
      children: [
        { label: "Child For Child", href: "/work/privileged-children/child-for-child" },
        { label: "Siffy", href: "/work/privileged-children/siffy" },
      ],
    },
  ],
},

  {
  label: "CAMPAIGNS",
  href: "/campaigns",
  children: [
    { label: "Shiksha Na Ruke",      href: "/campaigns/shiksha-na-ruke" },
    { label: "Health Cannot Wait",   href: "/campaigns/health-cannot-wait" },
    { label: "She Can Fly",          href: "/campaigns/she-can-fly" },
    { label: "Swabhiman",            href: "/campaigns/swabhiman" },
    { label: "Tayyari Kal Ki",       href: "/campaigns/tayyari-kal-ki" },
    { label: "Disaster Response",    href: "/campaigns/disaster-response" },
  ],
},

  {
  label: "GET INVOLVED",
  href: "/get-involved",
  children: [
    { label: "Individual Support", href: "/get-involved/individual-support" },

    {
      label: "Corporate Partnerships",
      href: "/get-involved/corporate-partnerships",
      children: [
        { label: "Corporate Social Responsibility", href: "/get-involved/corporate-partnerships/corporate-social-responsibility" },
        { label: "Cause Marketing & Events",        href: "/get-involved/corporate-partnerships/cause-marketing-events" },
        { label: "Employee Engagement",             href: "/get-involved/corporate-partnerships/employee-engagement" },
        { label: "Payroll Giving",                  href: "/get-involved/corporate-partnerships/payroll-giving" },
      ],
    },

    { label: "School Partnerships",        href: "/get-involved/school-partnerships" },
    { label: "Volunteers & Internships",   href: "/get-involved/volunteers-internships" },
    { label: "Work With Us",               href: "/get-involved/work-with-us" },
  ],
},

  {
  label: "MEDIA CENTRE",
  href: "/media-centre",
  children: [
    { label: "Press Releases",          href: "/media-centre/press-releases" },
    { label: "Print/ online media",     href: "/media-centre/print-online-media" },
    { label: "Electronic Media",        href: "/media-centre/electronic-media" },
    { label: "Workshop & Events",       href: "/media-centre/workshop-events" },
    { label: "Eminent Personalities",   href: "/media-centre/eminent-personalities" },
  ],
},

  {
  label: "RESOURCE CENTER",
  href: "/resource-center",
  children: [
    { label: "The Smile Blog",   href: "/resource-center/smile-blog" },
    { label: "Newsletter",       href: "/resource-center/newsletter" },
    { label: "Annual Report",    href: "/resource-center/annual-report" },
    { label: "Films",            href: "/resource-center/films" },
    { label: "Stories Of Change",href: "/resource-center/stories-of-change" },
    {
      label: "Perspective",
      href: "/resource-center/perspective",
      children: [
        { label: "Child Rights", href: "/resource-center/perspective/child-rights" },
      ],
    },
  ],
},

  {
  label: "CONTACT US",
  href: "/contact-us",
  children: [
    { label: "Get in Touch", href: "/contact-us/get-in-touch" },
    { label: "FAQs",        href: "/contact-us/faqs" },
  ],
},

];
