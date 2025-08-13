export default function Footer() {
  return (
    <footer id="contact" className="bg-[#111] text-gray-300">
      <div className="container-page py-10 grid md:grid-cols-4 gap-8 text-sm">
        <div>
          <div className="text-white font-semibold">About Us</div>
          <ul className="mt-3 space-y-2">
            <li>Who we are</li><li>Our work</li><li>Campaigns</li><li>Impact</li>
          </ul>
        </div>
        <div>
          <div className="text-white font-semibold">Our Work</div>
          <ul className="mt-3 space-y-2">
            <li>Education</li><li>Healthcare</li><li>Women Empowerment</li><li>Livelihood</li>
          </ul>
        </div>
        <div>
          <div className="text-white font-semibold">Get Involved</div>
          <ul className="mt-3 space-y-2">
            <li>Donate</li><li>Volunteer</li><li>Corporate Partnerships</li>
          </ul>
        </div>
        <div>
          <div className="text-white font-semibold">Resource Centre</div>
          <ul className="mt-3 space-y-2">
            <li>Annual Report</li><li>Media</li><li>Contact</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-page py-4 text-xs text-gray-400 flex items-center justify-between">
          <span>© {new Date().getFullYear()} Smile Foundation (Demo)</span>
          <div className="flex gap-3">
            <span>Privacy</span><span>Terms</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
