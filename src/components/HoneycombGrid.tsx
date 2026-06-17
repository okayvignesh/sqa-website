import React, { useState } from 'react';

type HexagonCellProps = {
  icon: string;
  label: string;
  size?: number;
  animationDelay?: number;
  pulseType?: 'big' | 'small';
  isMobile?: boolean;
};

const HexagonCell: React.FC<HexagonCellProps> = ({
  icon,
  label,
  size = 130,
  animationDelay = 0,
  pulseType = 'big',
  isMobile = false
}) => {
  const [isHovered, setIsHovered] = useState(false);

  // For a pointy-top hexagon: width = size, height = size * 2 / sqrt(3) ≈ size * 1.1547
  const width = size;
  const height = size * 1.1547;

  const animationName = pulseType === 'big' ? 'hexPulseBig' : 'hexPulseSmall';

  return (
    <div
      className="hexagon-cell-animated"
      style={{
        width: `${width}px`,
        height: `${height}px`,
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        filter: isHovered ? 'drop-shadow(0 0 20px rgba(100, 160, 220, 0.5))' : 'none',
        zIndex: isHovered ? 10 : 1,
        animation: isHovered ? 'none' : `${animationName} 3s ease-in-out infinite`,
        animationDelay: `${animationDelay}s`,
        transform: isHovered ? 'scale(1.1)' : undefined,
        transition: 'filter 0.3s ease',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Hexagon SVG background - pointy top */}
      <svg
        width={width}
        height={height}
        viewBox="0 0 100 115.47"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
        }}
      >
        <defs>
          <linearGradient id={`hexGrad-${label.replace(/\s/g, '')}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={isHovered ? '#1e3a5f' : '#101c2c'} />
            <stop offset="100%" stopColor={isHovered ? '#243f5f' : '#152538'} />
          </linearGradient>
        </defs>
        <polygon
          points="50,0 100,28.87 100,86.60 50,115.47 0,86.60 0,28.87"
          fill={`url(#hexGrad-${label.replace(/\s/g, '')})`}
          stroke={isHovered ? '#4080b0' : '#283848'}
          strokeWidth="2"
          style={{ transition: 'all 0.3s ease' }}
        />
      </svg>

      {/* Content */}
      <div
        style={{
          position: 'relative',
          zIndex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <img
          src={icon}
          alt={label}
          style={{
            width: isMobile ? '24px' : '36px',
            height: isMobile ? '24px' : '36px',
            objectFit: 'contain',
            marginBottom: isMobile ? '6px' : '10px',
          }}
        />
        <span
          style={{
            color: isHovered ? '#b0d0f0' : '#708090',
            fontSize: isMobile ? '7px' : '10px',
            fontWeight: 700,
            textAlign: 'center',
            textTransform: 'uppercase',
            letterSpacing: isMobile ? '0.5px' : '1.5px',
            transition: 'color 0.3s ease',
          }}
        >
          {label}
        </span>
      </div>
    </div>
  );
};

const HoneycombGrid: React.FC<{ className?: string }> = ({ className = '' }) => {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const hexSize = isMobile ? 80 : 130;
  const hexWidth = hexSize;
  const hexHeight = hexSize * 1.1547;

  // Add spacing between hexagons
  const horizontalSpacing = isMobile ? 5 : 10;

  // For honeycomb with spacing
  const colStep = hexWidth + horizontalSpacing;
  const rowStep = hexHeight * 0.87;

  // Define items
  const allItems = [
    { icon: '/assets/fav_tool/Azure devops.svg', label: 'Azure' },
    { icon: '/assets/fav_tool/Jira.svg', label: 'Jira' },
    { icon: '/assets/fav_tool/MS teams.svg', label: 'Teams' },
    { icon: '/assets/fav_tool/Browser stack.svg', label: 'Browser Stack' },
    { icon: '/assets/fav_tool/sauce_lab.svg', label: 'Sauce Labs' },
    { icon: '/assets/fav_tool/AWS.svg', label: 'AWS' },
    { icon: '/assets/fav_tool/gitlab.svg', label: 'GitLab' },
    { icon: '/assets/fav_tool/concourse.svg', label: 'Concourse' },
    { icon: '/assets/fav_tool/bamboo.svg', label: 'Bamboo' },
    { icon: '/assets/fav_tool/Jenkins_logo 1.svg', label: 'Jenkins' },
    { icon: '/assets/fav_tool/Slack.svg', label: 'Slack' },
  ];

  // Desktop: 2 rows (6 + 5)
  // Mobile: 3 rows (4 + 3 + 4) - honeycomb pattern
  const items = isMobile
    ? [
        // Row 0: 4 hexagons
        { row: 0, col: 0, ...allItems[0] },
        { row: 0, col: 1, ...allItems[1] },
        { row: 0, col: 2, ...allItems[2] },
        { row: 0, col: 3, ...allItems[3] },
        // Row 1: 3 hexagons (offset by 0.5)
        { row: 1, col: 0.5, ...allItems[4] },
        { row: 1, col: 1.5, ...allItems[5] },
        { row: 1, col: 2.5, ...allItems[6] },
        // Row 2: 4 hexagons
        { row: 2, col: 0, ...allItems[7] },
        { row: 2, col: 1, ...allItems[8] },
        { row: 2, col: 2, ...allItems[9] },
        { row: 2, col: 3, ...allItems[10] },
      ]
    : [
        // Row 0: 6 hexagons
        { row: 0, col: 0, ...allItems[0] },
        { row: 0, col: 1, ...allItems[1] },
        { row: 0, col: 2, ...allItems[2] },
        { row: 0, col: 3, ...allItems[3] },
        { row: 0, col: 4, ...allItems[4] },
        { row: 0, col: 5, ...allItems[5] },
        // Row 1: 5 hexagons (offset)
        { row: 1, col: 0.5, ...allItems[6] },
        { row: 1, col: 1.5, ...allItems[7] },
        { row: 1, col: 2.5, ...allItems[8] },
        { row: 1, col: 3.5, ...allItems[9] },
        { row: 1, col: 4.5, ...allItems[10] },
      ];

  // Calculate container dimensions
  const maxRow = isMobile ? 2 : 1;
  // For desktop: 6 hexagons (cols 0-5), last hex at col 5 * colStep, width = 5 * colStep + hexWidth
  // For mobile: 4 hexagons (cols 0-3), last hex at col 3 * colStep, width = 3 * colStep + hexWidth
  const containerWidth = isMobile
    ? (3 * colStep) + hexWidth
    : (5 * colStep) + hexWidth;
  const containerHeight = (maxRow + 1) * rowStep + hexHeight * 0.5;

  return (
    <section
      className={`pt-20 overflow-hidden ${className}`}
    >
      <style>
        {`
          @keyframes hexPulseBig {
            0%, 100% {
              transform: scale(1);
            }
            50% {
              transform: scale(1.08);
            }
          }

          @keyframes hexPulseSmall {
            0%, 100% {
              transform: scale(1.08);
            }
            50% {
              transform: scale(1);
            }
          }
        `}
      </style>
      <div className="w-full mx-auto px-2 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
            Connect. Orchestrate. Deliver.
          </h2>
          <p
            className="text-base md:text-lg lg:text-xl text-blue-100/80 max-w-3xl mx-auto"
            style={{ fontWeight: 400, letterSpacing: '0.3px' }}
          >
            Bridge the gap between fragmented tools. Turn your disconnected CI/CD, management, and testing tools into a single, unified delivery engine for integration
          </p>
        </div>

        <div className="flex justify-center items-center w-full">
          <div
            style={{
              position: 'relative',
              width: containerWidth,
              height: containerHeight,
              margin: '0 auto',
            }}
          >
            {items.map((item, index) => {
              const x = item.col * colStep;
              const y = item.row * rowStep;
              // Alternate between big and small pulse animation
              const pulseType = index % 2 === 0 ? 'big' : 'small';
              // Stagger animation delays
              const delay = index * 0.15;

              return (
                <div
                  key={index}
                  style={{
                    position: 'absolute',
                    left: x,
                    top: y,
                  }}
                >
                  <HexagonCell
                    icon={item.icon}
                    label={item.label}
                    size={hexSize}
                    animationDelay={delay}
                    pulseType={pulseType}
                    isMobile={isMobile}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HoneycombGrid;
