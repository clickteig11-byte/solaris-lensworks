import React, { useState } from 'react';

export default function App() {
  const [metricValue, setMetricValue] = useState(75);
  const [activeTab, setActiveTab] = useState('RESOLUTION');

  return (
    <div>
      {/* ARCHITECTURAL EDGE HEADER */}
      <header className="site-edge-header">
        <div className="edge-brand-lockup">
          <a href="#top" className="edge-brand">
            Solaris Lensworks
          </a>
          <span className="edge-coords">WETZLAR · GERMANY // 8K RESOLUTION</span>
        </div>

        <nav className="edge-nav-links" aria-label="Primary Navigation">
          <a href="#details" onClick={() => setActiveTab('RESOLUTION')}>RESOLUTION</a>
          <a href="#details" onClick={() => setActiveTab('IRIS')}>IRIS</a>
          <a href="#details" onClick={() => setActiveTab('ANAMORPHIC')}>ANAMORPHIC</a>
        </nav>

        <a href="#inquire" className="edge-action-btn">
          RESERVE PRODUCTION SET
        </a>
      </header>

      {/* FULL-BLEED ARCHITECTURAL HERO (ZERO ITALIC SLOP, ZERO PILL BARS) */}
      <header id="top" className="hero-fullbleed">
        <img
          src="/references/sites/site-7-solaris.jpg"
          alt="SOLARIS // WETZLAR CINEMA OPTICS"
          className="hero-bg-photo"
        />
        <div className="hero-scrim" />

        <div className="hero-body">
          <div className="hero-copy-stack">
            <span className="hero-small-label">APOCHROMATIC PRIME · T1.3</span>
            <h1 className="hero-title">
              APO 50MM T1.3 CINEMA OPTICS
              <span className="hero-subline">ZERO CHROMATIC ABERRATION.</span>
            </h1>
            <p className="hero-lead">Full-frame cinema primes hand-ground from fluorite crystal with circular 16-blade aperture iris and anamorphic flare suppression.</p>
            <a href="#details" className="editorial-cta-btn">
              Explore Specification
            </a>
          </div>

          <div className="hero-quiet-caption" aria-label="Engineering Readouts">
            <span>T1.3 FAST IRIS</span>
            <span>·</span>
            <span>16 CURVED BLADES</span>
            <span>·</span>
            <span>FLUORITE CRYSTAL</span>
          </div>
        </div>
      </header>

      {/* INTERACTIVE WORKBENCH */}
      <section id="details" className="lab-section">
        <div className="lab-grid">
          <div>
            <span className="hero-small-label">ENGINEERING BENCH // ACTIVE MODE</span>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', textTransform: 'uppercase', marginBottom: '1rem' }}>
              Precision Telemetry & Output
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.75)', lineHeight: 1.6, marginBottom: '2rem' }}>
              Apochromatic optical formula with consistent focus rotation, diamond-turned in aircraft-grade aluminum barrels.
            </p>

            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ display: 'flex', justifyContent: 'space-between', fontFamily: 'var(--font-mono)', fontSize: '0.75rem', marginBottom: '0.5rem' }}>
                <span>CALIBRATION ENVELOPE</span>
                <span style={{ color: 'var(--accent-color)' }}>{metricValue}% NOMINAL</span>
              </label>
              <input
                type="range"
                min="10"
                max="100"
                value={metricValue}
                onChange={(e) => setMetricValue(Number(e.target.value))}
                style={{ width: '100%', accentColor: 'var(--accent-color)', cursor: 'pointer' }}
              />
            </div>

            <table className="spec-table">
              <tbody>
                <tr>
                  <td className="spec-label">ACTIVE SUB-SYSTEM</td>
                  <td className="spec-value">{activeTab}</td>
                </tr>
                <tr>
                  <td className="spec-label">EFFICIENCY FACTOR</td>
                  <td className="spec-value">{(0.91 + (metricValue / 1000)).toFixed(3)} η</td>
                </tr>
                <tr>
                  <td className="spec-label">THERMAL DISSIPATION</td>
                  <td className="spec-value">{(24 + (metricValue * 0.4)).toFixed(1)} °C</td>
                </tr>
                <tr>
                  <td className="spec-label">STATUS PROTOCOL</td>
                  <td className="spec-value" style={{ color: 'var(--accent-color)' }}>VERIFIED · ZERO TOLERANCE</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="lab-display-card">
            <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--border-soft)', paddingBottom: '0.75rem', marginBottom: '1.5rem' }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--accent-color)' }}>DIAGNOSTIC VISUALIZER</span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem' }}>STAGE: {metricValue} / 100</span>
            </div>

            <div style={{ height: '240px', display: 'flex', alignItems: 'flex-end', gap: '8px', background: 'rgba(0,0,0,0.5)', padding: '1rem', border: '1px solid var(--border-soft)' }}>
              {[30, 45, 60, 40, 75, 90, 85, 95, 70, 80, 65, 88].map((base, idx) => {
                const height = Math.min(100, Math.round((base * metricValue) / 75));
                return (
                  <div
                    key={idx}
                    style={{
                      flex: 1,
                      height: `${height}%`,
                      background: idx % 2 === 0 ? 'var(--accent-color)' : 'rgba(255,255,255,0.4)',
                      transition: 'height 0.2s ease'
                    }}
                  />
                );
              })}
            </div>

            <div style={{ marginTop: '1.5rem', display: 'flex', justifyContent: 'space-between', fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'rgba(255,255,255,0.6)' }}>
              <span>HARMONIC HARVEST</span>
              <span style={{ color: 'var(--accent-color)' }}>DELTA-V PASSING</span>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="inquire" style={{ borderTop: '1px solid var(--border-soft)', padding: '3.5rem', textAlign: 'center', background: 'var(--surface-color)' }}>
        <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', textTransform: 'uppercase', marginBottom: '1rem' }}>
          Solaris Lensworks
        </p>
        <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'rgba(255,255,255,0.5)', letterSpacing: '0.1em' }}>
          WETZLAR · GERMANY // 8K RESOLUTION · COMMISSIONS &amp; SPECIFICATIONS OPEN FOR 2026
        </p>
      </footer>
    </div>
  );
}
