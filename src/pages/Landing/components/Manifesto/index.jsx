import React from 'react'

const Manifesto = () => {
  return (
    <section className="py-32 px-6 border-t border-ink/10 relative">
      <div className="max-w-4xl mx-auto">
        <h2 data-test='manifesto-title' className="font-serif text-5xl md:text-7xl mb-12 relative inline-block">
          The Anti-Grid <br />
          <span className="italic text-rust">Manifesto.</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-12 font-mono text-sm leading-loose">
          <div>

            <p className="mb-6" data-test="manifesto-item-1">01. MOST APPS ARE ROBOTS.</p>
            <p className="text-gray-600">
              They want to save you 3 minutes. We want to show you the world's largest ball of twine. We optimize for memory-making, not efficiency.
            </p>
          </div>
          <div>
            <p className="mb-6" data-test="manifesto-item-2">02. THE PACK IS REAL.</p>
            <p className="text-gray-600">
              Travel is better together. Our collaboration tools aren't just "share buttons" - they're built for voting, gas-spitting, and playlist syncing.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Manifesto