import React from 'react'

const page = () => {
  return (
    <main className="min-h-screen px-4 py-8">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header Card */}
        <div className="bg-white/20 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-white/30 text-center">
          <h1 className="text-4xl font-bold text-slate-800 dark:text-slate-100 mb-4">Resources</h1>
          <p className="text-lg text-slate-700 dark:text-slate-200">Here are all my respective resources</p>
        </div>

        {/* Resume Card */}
        <div className="bg-white/20 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-white/30">
          <h2 className="text-2xl font-semibold text-slate-800 dark:text-slate-100 mb-4">Resume</h2>
          <div className="w-full h-96 border rounded-lg overflow-hidden">
            <iframe
              src="/files/resume.pdf"
              className="w-full h-full"
              title="Resume"
            ></iframe>
          </div>
        </div>

        {/* Projects Card */}
        <div className="bg-white/20 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-white/30">
          <h2 className="text-2xl font-semibold text-slate-800 dark:text-slate-100 mb-6">Projects</h2>
          <h3 className="text-xl font-medium text-slate-800 dark:text-slate-100 mb-4">Final Project - BASC</h3>

          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-medium text-slate-700 dark:text-slate-200 mb-2">Project Proposal and Research Document</h4>
              <div className="w-full h-96 border rounded-lg overflow-hidden">
                <iframe
                  src="/files/FinalProjectJoashHosein87736.pdf"
                  className="w-full h-full"
                  title="Project Proposal and Research Document"
                ></iframe>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-medium text-slate-700 dark:text-slate-200 mb-2">Project Implementation Document</h4>
              <div className="w-full h-96 border rounded-lg overflow-hidden">
                <iframe
                  src="/files/JoashHosein87736FinalProject.pdf"
                  className="w-full h-full"
                  title="Project Implementation Document"
                ></iframe>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-medium text-slate-700 dark:text-slate-200 mb-2">Demonstration Video</h4>
              <div className="aspect-video w-full max-w-2xl mx-auto border rounded-lg overflow-hidden">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/FK_Z_KIQjtw"
                  title="Project Demonstration"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default page
