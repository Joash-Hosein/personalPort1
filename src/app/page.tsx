import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 py-8">
      <div className="max-w-4xl w-full space-y-8">
        {/* Hero Section */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold text-slate-800 dark:text-slate-100">
            Welcome to my Portfolio website!
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            My Name is Joash Hosein. I am a Software Engineer and computer diagnostician.
          </p>
        </div>

        {/* About Card */}
        <div className="bg-white/20 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-white/30">
          <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8">
            <div className="flex-shrink-0">
              <Image
                src="/me.jpg"
                alt="Self Pic"
                width={300}
                height={300}
                className="rounded-xl shadow-lg"
              />
            </div>
            <div className="flex-1 space-y-4">
              <h2 className="text-3xl font-semibold text-slate-800 dark:text-slate-100 text-center" >
                About me
              </h2>
              <p className="text-lg text-slate-700 dark:text-slate-200 leading-relaxe text-justify">
                I am a Software Engineer from Trinidad and Tobago. I have multiple skills in web and app development.
                Click the "About" section to find out more!
              </p>
              <div className="text-center">
                <Link
                  href="/about"
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg"
                >
                  Learn More About Me
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
