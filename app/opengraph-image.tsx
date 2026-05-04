import { ImageResponse } from 'next/og';

export const alt = 'Antony Divine Raj — Product Manager';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '80px',
          background: '#FAFAF7',
          color: '#111111',
          fontFamily: 'serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            fontSize: 24,
            textTransform: 'uppercase',
            letterSpacing: '0.2em',
            color: '#5C5C57',
            fontFamily: 'sans-serif',
          }}
        >
          Product Manager · Chennai, India
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div
            style={{
              display: 'flex',
              fontSize: 140,
              lineHeight: 1,
              letterSpacing: '-0.03em',
            }}
          >
            Antony Divine Raj.
          </div>
          <div
            style={{
              display: 'flex',
              marginTop: 30,
              fontSize: 32,
              color: '#5C5C57',
              fontFamily: 'sans-serif',
              maxWidth: 900,
            }}
          >
            Building public-good tech at scale. 5 lakh teachers · 1.23 crore students.
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            fontSize: 22,
            color: '#5C5C57',
            fontFamily: 'sans-serif',
            justifyContent: 'space-between',
            width: '100%',
          }}
        >
          <span>divinerajifs@gmail.com</span>
          <span>TN EMIS · School Education Dept.</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
