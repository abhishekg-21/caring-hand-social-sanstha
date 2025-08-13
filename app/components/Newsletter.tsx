export default function Newsletter() {
  return (
    <section id="donate" className="py-12 md:py-16 bg-white">
      <div className="container-page">
        <div className="card p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-xl font-bold">Subscribe to our Newsletter</h3>
            <p className="text-brand-gray text-sm">Get updates on programmes, stories and impact.</p>
          </div>
          <form className="flex w-full md:w-auto gap-2">
            <input
              type="email"
              placeholder="Your email"
              className="w-full md:w-72 border rounded-full px-4 py-2 outline-none"
            />
            <button className="px-5 py-2 rounded-full bg-brand-green text-white font-semibold">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
