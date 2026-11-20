import { ImageResponse } from 'next/og'

export const alt = 'Codexa Scanner — Cross-Platform Network & Web Security Scanner'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background:
            'radial-gradient(circle at 75% 20%, rgba(16,185,129,0.18), transparent 55%), linear-gradient(135deg, #070b12 0%, #0a0f17 60%, #0d141f 100%)',
          padding: '72px',
          fontFamily: 'sans-serif',
          color: '#e5e7eb',
          position: 'relative',
        }}
      >
        {/* grid overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)',
            backgroundSize: '56px 56px',
            display: 'flex',
          }}
        />

        {/* top row */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            zIndex: 1,
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '56px',
              height: '56px',
              borderRadius: '14px',
              border: '1px solid rgba(16,185,129,0.4)',
              background: 'rgba(16,185,129,0.12)',
            }}
          >
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
              <circle
                cx="12"
                cy="12"
                r="10"
                stroke="#10b981"
                strokeWidth="2"
              />
              <circle cx="12" cy="12" r="5" stroke="#10b981" strokeWidth="2" />
              <circle cx="12" cy="12" r="1.5" fill="#10b981" />
              <line x1="12" y1="12" x2="20" y2="6" stroke="#10b981" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              fontSize: '22px',
              color: '#94a3b8',
            }}
          >
            <span style={{ fontWeight: 600, color: '#e5e7eb' }}>
              Codexa Scanner
            </span>
            <span style={{ color: 'rgba(255,255,255,0.3)' }}>·</span>
            <span
              style={{
                display: 'flex',
                padding: '4px 12px',
                borderRadius: '999px',
                border: '1px solid rgba(16,185,129,0.4)',
                background: 'rgba(16,185,129,0.12)',
                color: '#10b981',
                fontSize: '18px',
                fontWeight: 600,
              }}
            >
              v1.1.5
            </span>
          </div>
        </div>

        {/* center title */}
        <div style={{ display: 'flex', flexDirection: 'column', zIndex: 1 }}>
          <div
            style={{
              fontSize: '104px',
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: '-0.02em',
              color: '#f8fafc',
              display: 'flex',
            }}
          >
            <span style={{ color: '#10b981' }}>Codexa</span>
            <span style={{ marginLeft: '20px' }}>Scanner</span>
          </div>
          <div
            style={{
              marginTop: '24px',
              fontSize: '32px',
              color: '#94a3b8',
              maxWidth: '900px',
              display: 'flex',
            }}
          >
            Cross-platform network reconnaissance &amp; HTTP security-header
            inspection
          </div>
        </div>

        {/* bottom row */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            zIndex: 1,
          }}
        >
          <div
            style={{
              display: 'flex',
              gap: '14px',
              fontSize: '22px',
              color: '#cbd5e1',
              fontWeight: 600,
            }}
          >
            <span>Linux</span>
            <span style={{ color: 'rgba(255,255,255,0.25)' }}>·</span>
            <span>Windows</span>
            <span style={{ color: 'rgba(255,255,255,0.25)' }}>·</span>
            <span>macOS</span>
          </div>
          <div
            style={{
              display: 'flex',
              gap: '12px',
              fontSize: '20px',
              color: '#64748b',
            }}
          >
            <span>Go</span>
            <span>·</span>
            <span>Wails v2</span>
            <span>·</span>
            <span>React</span>
            <span>·</span>
            <span>TypeScript</span>
          </div>
        </div>
      </div>
    ),
    size
  )
}
