import React from 'react'

const page = () => {
  return (
    <main className="min-h-screen px-4 py-8">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* About Me Card */}
        <div className="bg-white/20 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-white/30">
          <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-100 mb-4">About me</h2>
          <p className="text-lg text-slate-700 dark:text-slate-200 leading-relaxed">
            I am a UTT graduate with my Diploma in Software Engineering and a Bachelor's of Applied Science in Computer Engineering.
            I have interned at ICM (International Cooperating Ministries) in their Discipleship Department as a software developer.
          </p>
        </div>

        {/* Skills Card */}
        <div className="bg-white/20 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-white/30">
          <h3 className="text-2xl font-semibold text-slate-800 dark:text-slate-100 mb-4">Skills</h3>
          <p className="text-lg text-slate-700 dark:text-slate-200 mb-4">
            I have proficiency with Web development with experience with:
          </p>
          <ul className="list-disc list-inside text-slate-700 dark:text-slate-200 space-y-2 mb-4">
            <li>Laravel</li>
            <li>Django</li>
            <li>PHP</li>
            <li>React</li>
            <li>Basic HTML and CSS (Tailwind included)</li>
          </ul>
          <p className="text-lg text-slate-700 dark:text-slate-200 mb-4">
            I have experience using Python for Data science, AI development and automation.
          </p>
          <p className="text-lg text-slate-700 dark:text-slate-200">
            I have also worked with React Native for mobile app development.
          </p>
        </div>

        {/* Contact Information Card */}
        <div className="bg-white/20 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-white/30">
          <h2 className="text-2xl font-semibold text-slate-800 dark:text-slate-100 mb-4">Contact Information</h2>
          <div className="space-y-3 text-slate-700 dark:text-slate-200">
            <p><strong>Email:</strong> princejoash@hotmail.com / jhosein@icm.org</p>
            <p><strong>Phone/WhatsApp:</strong> +1(868)460-5418</p>
            <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/joash-hosein-668946310/" className="text-blue-600 dark:text-blue-400 hover:underline">https://www.linkedin.com/in/joash-hosein-668946310/</a></p>
          </div>
        </div>
      </div>
    </main>
  )
}

export default page
