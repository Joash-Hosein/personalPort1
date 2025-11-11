import React from 'react'

const page = () => {
  return (
    <main className="min-h-screen px-4 py-8">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Services Overview Card */}
        <div className="bg-white/20 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-white/30">
          <h1 className="text-3xl font-bold text-slate-800 dark:text-slate-100 mb-4">Services</h1>
          <p className="text-lg text-slate-700 dark:text-slate-200 leading-relaxed">
            I offer a multitude of different services. I can offer consulting on computers as well as building, maintenance and diagnostic support for them.
            I also build Websites and mobile applications. Refer to the respective sections for more information.
          </p>
        </div>

        {/* Computer Services Card */}
        <div className="bg-white/20 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-white/30">
          <h2 className="text-2xl font-semibold text-slate-800 dark:text-slate-100 mb-4">Computer Services and Consulting</h2>
          <p className="text-slate-600 dark:text-slate-300 mb-4">All prices are in TTD (Trinidad and Tobago Dollar)</p>
          <ul className="list-disc list-inside text-slate-700 dark:text-slate-200 space-y-2 mb-6">
            <li>Laptop Cleaning - $125 - $150 for extra dirty machines</li>
            <li>Desktop Cleaning - $150 - $200 for extra dirty machines</li>
            <li>Thermal repasting - $75</li>
            <li>Computer Building - $150 all form factors - +$20 for AIO installation</li>
            <li>Diagnostic repairs will vary in Price depending on repair. Diagnostic Check is $50 entry fee.</li>
            <li>Consulting is FREE for short calls and emails. Meetings can be scheduled at $75 for 60 minutes.</li>
          </ul>
          <p className="text-slate-700 dark:text-slate-200">
            Please use <strong>+1(868)460-5418</strong> to contact me with inquiries.
          </p>
        </div>

        {/* Web and App Development Card */}
        <div className="bg-white/20 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-white/30">
          <h2 className="text-2xl font-semibold text-slate-800 dark:text-slate-100 mb-4">Web and App Development</h2>
          <p className="text-lg text-slate-700 dark:text-slate-200 mb-4">
            Initial meeting is FREE. In this meeting we would discuss your current system and I would offer a timeline on how a project can develop.
            This meeting typically would be 1 hr long. Any meetings after this are $50 dollars per meeting unless contracted.
          </p>
          <div className="space-y-3 text-slate-700 dark:text-slate-200">
            <p><strong>Web Development:</strong> can range between $2000 - $4000 overall.</p>
            <p><strong>App Development:</strong> can range between $3000 - $6000 overall.</p>
            <p>This fully includes a production model, fully tested and polished including styling tailored by your directive.</p>
          </div>
        </div>
      </div>
    </main>
  )
}

export default page
