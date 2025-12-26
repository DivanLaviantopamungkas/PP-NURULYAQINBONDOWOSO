import React from 'react'

const Test = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">
          <span className="text-primary-500">Tailwind</span> CSS Test
        </h1>
        
        {/* Color Test */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Color Palette Test</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-4 bg-primary-500 text-white rounded-lg shadow">
              <div className="font-bold">Primary</div>
              <div className="text-sm opacity-90">#0c5c4a</div>
            </div>
            <div className="p-4 bg-primary-400 text-white rounded-lg shadow">
              <div className="font-bold">Primary Light</div>
              <div className="text-sm opacity-90">#1d7a63</div>
            </div>
            <div className="p-4 bg-secondary-500 text-white rounded-lg shadow">
              <div className="font-bold">Secondary</div>
              <div className="text-sm opacity-90">#1a365d</div>
            </div>
            <div className="p-4 bg-accent-400 text-white rounded-lg shadow">
              <div className="font-bold">Accent</div>
              <div className="text-sm opacity-90">#d4af37</div>
            </div>
          </div>
        </div>
        
        {/* Button Test */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Button Components Test</h2>
          <div className="flex flex-wrap gap-4">
            <button className="btn-primary">
              Primary Button
            </button>
            <button className="btn-secondary">
              Secondary Button
            </button>
            <button className="px-6 py-3 bg-accent-400 text-white rounded-lg font-semibold hover:bg-accent-500 transition-colors">
              Accent Button
            </button>
          </div>
        </div>
        
        {/* Card Test */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Card Component Test</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card">
              <h3 className="text-xl font-bold text-primary-500 mb-3">Card Title</h3>
              <p className="text-gray-600 mb-4">Ini adalah test card dengan custom styling.</p>
              <button className="text-primary-500 font-semibold hover:text-primary-600">
                Learn more →
              </button>
            </div>
            <div className="card">
              <h3 className="text-xl font-bold text-secondary-500 mb-3">Card Title</h3>
              <p className="text-gray-600 mb-4">Card dengan hover effect dan shadow.</p>
              <button className="text-secondary-500 font-semibold hover:text-secondary-600">
                Learn more →
              </button>
            </div>
            <div className="card">
              <h3 className="text-xl font-bold text-accent-500 mb-3">Card Title</h3>
              <p className="text-gray-600 mb-4">Semua card harus memiliki styling yang sama.</p>
              <button className="text-accent-500 font-semibold hover:text-accent-600">
                Learn more →
              </button>
            </div>
          </div>
        </div>
        
        {/* Typography Test */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Typography Test</h2>
          <div className="space-y-4">
            <h1 className="text-5xl font-bold text-primary-500">Heading 1</h1>
            <h2 className="text-4xl font-semibold text-secondary-500">Heading 2</h2>
            <h3 className="text-3xl font-medium text-gray-700">Heading 3</h3>
            <h4 className="text-2xl font-medium text-gray-600">Heading 4</h4>
            <p className="text-lg text-gray-600">
              Ini adalah paragraf dengan font Poppins. Jika font ini terlihat berbeda dari default font browser, berarti Tailwind bekerja.
            </p>
            <p className="text-gray-500">
              Font arabic test: <span className="font-arabic text-xl">السلام عليكم</span>
            </p>
          </div>
        </div>
        
        {/* Animation Test */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Animation Test</h2>
          <div className="flex flex-wrap gap-6">
            <div className="w-32 h-32 bg-primary-500 rounded-lg flex items-center justify-center text-white animate-fade-in-up">
              Fade In Up
            </div>
            <div className="w-32 h-32 bg-secondary-500 rounded-lg flex items-center justify-center text-white animate-slide-up animation-delay-200">
              Slide Up
            </div>
            <div className="w-32 h-32 bg-accent-500 rounded-lg flex items-center justify-center text-white animate-bounce-slow">
              Bounce
            </div>
            <div className="w-32 h-32 bg-primary-400 rounded-lg flex items-center justify-center text-white animate-float">
              Float
            </div>
          </div>
        </div>
        
        {/* Section Title Test */}
        <div>
          <div className="section-title">
            <h2>Section Title Component</h2>
            <p className="text-gray-600 mt-4">Ini adalah test untuk component section title dengan garis bawah gradient.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Test