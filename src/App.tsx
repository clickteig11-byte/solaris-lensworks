import React, { useState } from 'react';

export default function App() {
  const [metricValue, setMetricValue] = useState(82);
  const [activeTab, setActiveTab] = useState<'OPTICAL MTF' | '16-BLADE IRIS' | 'FOCUS MECHANICS'>('OPTICAL MTF');

  const dynamicMtf = (78 + (metricValue / 100) * 8.5).toFixed(1);

  return (
    <div>
      {/* ARCHITECTURAL EDGE HEADER */}
      <header className="site-edge-header">
        <div className="edge-brand-lockup">
          <a href="#top" className="edge-brand">
            Solaris Lensworks
          </a>
          <span className="edge-coords">WETZLAR · GERMANY // 46.5 MM LARGE FORMAT</span>
        </div>

        <nav className="edge-nav-links" aria-label="Primary Navigation">
          <a href="#details" onClick={() => setActiveTab('OPTICAL MTF')}>OPTICAL MTF</a>
          <a href="#details" onClick={() => setActiveTab('16-BLADE IRIS')}>APERTURE IRIS</a>
          <a href="#details" onClick={() => setActiveTab('FOCUS MECHANICS')}>FOCUS CAM</a>
        </nav>

        <a href="#inquire" className="edge-action-btn">
          RESERVE PRODUCTION SET
        </a>
      </header>

      {/* FULL-BLEED ARCHITECTURAL HERO */}
      <header id="top" className="hero-fullbleed">
        <img
          src="/references/sites/site-7-solaris.jpg"
          alt="SOLARIS // WETZLAR CINEMA OPTICS"
          className="hero-bg-photo"
        />
        <div className="hero-scrim" />

        <div className="hero-body">
          <div className="hero-copy-stack">
            <span className="hero-small-label">APOCHROMATIC PRIME · T1.3 CINEMA OPTICS</span>
            <h1 className="hero-title">
              APO 50MM T1.3 CINEMA OPTICS
              <span className="hero-subline">ZERO CHROMATIC ABERRATION.</span>
            </h1>
            <p className="hero-lead">
              Apochromatic cinema primes hand-ground from fluorite crystal with circular 16-blade aperture iris, 300° mechanical focus throw, and 46.5 mm large-format sensor coverage.
            </p>
            <a href="#details" className="editorial-cta-btn">
              Explore Specification
            </a>
          </div>

          <div className="hero-quiet-caption" aria-label="Optical Cinema Metrics">
            <span>T1.3 FULL APERTURE</span>
            <span>·</span>
            <span>&gt; 82% MTF @ 40 LP/MM</span>
            <span>·</span>
            <span>46.5 MM IMAGE CIRCLE</span>
          </div>
        </div>
      </header>

      {/* INTERACTIVE WORKBENCH */}
      <section id="details" className="lab-section">
        <div className="lab-grid">
          <div>
            <span className="hero-small-label">OPTICAL BENCH // WETZLAR COLLIMATION</span>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', textTransform: 'uppercase', marginBottom: '1rem', color: 'var(--ink-primary)' }}>
              Precision Cinema Telemetry
            </h2>
            <p style={{ color: 'var(--ink-muted)', lineHeight: 1.6, marginBottom: '2rem' }}>
              Hand-assembled double-Gauss optical group with anomalous dispersion glass elements, measured on laser interferometers for edge-to-edge optical resolution.
            </p>

            <div style={{ marginBottom: '1.5rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: 'var(--font-mono)', fontSize: '0.75rem', marginBottom: '0.5rem' }}>
                <span style={{ color: 'var(--ink-muted)' }}>MTF FREQUENCY CALIBRATION ENVELOPE</span>
                <span style={{ color: 'var(--accent-color)', fontWeight: 600 }}>{metricValue}% NOMINAL RESOLUTION</span>
              </div>
              <input
                type="range"
                min="10"
                max="100"
                value={metricValue}
                onChange={(e) => setMetricValue(Number(e.target.value))}
                style={{ width: '100%', accentColor: 'var(--accent-color)', cursor: 'pointer' }}
                aria-label="MTF Frequency Calibration"
              />
            </div>

            <table className="spec-table">
              <tbody>
                <tr>
                  <td className="spec-label">ACTIVE SUB-SYSTEM</td>
                  <td className="spec-value">{activeTab}</td>
                </tr>
                <tr>
                  <td className="spec-label">TRANSMISSION / PHOTOMETRIC SPEED</td>
                  <td className="spec-value">T1.3 Full Aperture (96.8% transmission)</td>
                </tr>
                <tr>
                  <td className="spec-label">OPTICAL RESOLUTION / MTF</td>
                  <td className="spec-value">&gt; 82% contrast @ 40 lp/mm edge-to-edge <span style={{ fontSize: '0.75rem', color: 'var(--ink-muted)' }}>({dynamicMtf}% measured)</span></td>
                </tr>
                <tr>
                  <td className="spec-label">FOCUS THROW</td>
                  <td className="spec-value">300° mechanical rotation with zero backlash</td>
                </tr>
                <tr>
                  <td className="spec-label">FORMAT COVERAGE</td>
                  <td className="spec-value" style={{ color: 'var(--accent-color)' }}>46.5 mm diagonal large-format image circle</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="lab-display-card">
            <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--border-soft)', paddingBottom: '0.75rem', marginBottom: '1.5rem' }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--accent-color)', fontWeight: 600 }}>
                MTF MODULATION TRANSFER CURVE (40 lp/mm)
              </span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--ink-muted)' }}>
                T1.3 FULL APERTURE: {dynamicMtf}%
              </span>
            </div>

            <div style={{ height: '240px', display: 'flex', alignItems: 'flex-end', gap: '8px', background: '#ffffff', padding: '1rem', border: '1px solid var(--border-soft)' }}>
              {[96, 94, 91, 88, 86, 85, 84, 83, 82, 81, 79, 78].map((base, idx) => {
                const height = Math.min(100, Math.round((base * metricValue) / 82));
                return (
                  <div
                    key={idx}
                    style={{
                      flex: 1,
                      height: `${height}%`,
                      background: idx % 2 === 0 ? 'var(--accent-color)' : 'rgba(18, 19, 20, 0.25)',
                      transition: 'height 0.2s ease'
                    }}
                  />
                );
              })}
            </div>

            <div style={{ marginTop: '1.5rem', display: 'flex', justifyContent: 'space-between', fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--ink-muted)' }}>
              <span>FIELD RADIUS: 0mm (CENTER) → 23.25mm (CORNER)</span>
              <span style={{ color: 'var(--accent-color)', fontWeight: 600 }}>APOCHROMATIC COLLIMATED</span>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="inquire" style={{ borderTop: '1px solid var(--border-soft)', padding: '3.5rem', textAlign: 'center', background: 'var(--surface-color)' }}>
        <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', textTransform: 'uppercase', marginBottom: '1rem', color: 'var(--ink-primary)' }}>
          Solaris Lensworks
        </p>
        <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--ink-muted)', letterSpacing: '0.1em' }}>
          WETZLAR · GERMANY // 46.5 MM LARGE FORMAT CINEMA OPTICS · PRODUCTION COMMISSIONS OPEN FOR 2026
        </p>
      </footer>
    </div>
  );
}
