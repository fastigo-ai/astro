/**
 * HomeBgDrawings
 * Fixed-position, pointer-events-none SVG decorations rendered
 * only on the Home page. All elements are 4-10% opacity so they
 * never compete with content.
 */
export default function HomeBgDrawings() {
  return (
    <div
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        pointerEvents: "none",
        zIndex: 0,
        overflow: "hidden",
      }}
    >
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
        style={{ position: "absolute", inset: 0 }}
      >
        <defs>
          <style>{`
            .hbd-navy  { fill: none; stroke: #1a3a6c; }
            .hbd-blush { fill: none; stroke: #e16b8c; }
            .hbd-gold  { fill: none; stroke: #c8922a; }
            .hbd-fill-navy  { fill: #1a3a6c; stroke: none; }
            .hbd-fill-blush { fill: #e16b8c; stroke: none; }
            .hbd-fill-gold  { fill: #c8922a; stroke: none; }

            /* slow drift animations */
            @keyframes hbd-float1 {
              0%,100% { transform: translateY(0px) rotate(0deg); }
              50%      { transform: translateY(-18px) rotate(6deg); }
            }
            @keyframes hbd-float2 {
              0%,100% { transform: translateY(0px) rotate(0deg); }
              50%      { transform: translateY(14px) rotate(-5deg); }
            }
            @keyframes hbd-float3 {
              0%,100% { transform: translateY(0px); }
              50%      { transform: translateY(-10px); }
            }
            @keyframes hbd-spin-slow {
              from { transform: rotate(0deg); }
              to   { transform: rotate(360deg); }
            }
            @keyframes hbd-pulse {
              0%,100% { opacity: 0.07; }
              50%      { opacity: 0.13; }
            }

            .hbd-f1 { animation: hbd-float1 9s ease-in-out infinite; }
            .hbd-f2 { animation: hbd-float2 12s ease-in-out infinite; }
            .hbd-f3 { animation: hbd-float3 7s ease-in-out infinite; }
            .hbd-spin { animation: hbd-spin-slow 40s linear infinite; }
            .hbd-pulse { animation: hbd-pulse 6s ease-in-out infinite; }
          `}</style>
        </defs>

        {/* ─── TOP-LEFT: Crescent Moon ─────────────────────── */}
        <g className="hbd-f1" style={{ transformOrigin: "110px 100px" }} opacity="0.10">
          <path
            className="hbd-navy"
            strokeWidth="2.5"
            d="M130,60 A55,55 0 1,1 90,155 A38,38 0 1,0 130,60 Z"
          />
          {/* small stars around moon */}
          <polygon
            className="hbd-fill-navy"
            opacity="0.8"
            points="60,55 62,62 69,62 63,67 65,74 60,69 55,74 57,67 51,62 58,62"
          />
          <polygon
            className="hbd-fill-navy"
            opacity="0.5"
            points="155,50 157,55 162,55 158,58 160,63 155,60 150,63 152,58 148,55 153,55"
          />
        </g>

        {/* ─── TOP-RIGHT: Lotus Flower ─────────────────────── */}
        <g className="hbd-f2" style={{ transformOrigin: "1320px 90px" }} opacity="0.09">
          {/* petals */}
          <ellipse
            className="hbd-blush"
            strokeWidth="1.8"
            cx="1320"
            cy="90"
            rx="12"
            ry="30"
            transform="rotate(-30,1320,90)"
          />
          <ellipse
            className="hbd-blush"
            strokeWidth="1.8"
            cx="1320"
            cy="90"
            rx="12"
            ry="30"
            transform="rotate(0,1320,90)"
          />
          <ellipse
            className="hbd-blush"
            strokeWidth="1.8"
            cx="1320"
            cy="90"
            rx="12"
            ry="30"
            transform="rotate(30,1320,90)"
          />
          <ellipse
            className="hbd-blush"
            strokeWidth="1.8"
            cx="1320"
            cy="90"
            rx="12"
            ry="30"
            transform="rotate(60,1320,90)"
          />
          <ellipse
            className="hbd-blush"
            strokeWidth="1.8"
            cx="1320"
            cy="90"
            rx="12"
            ry="30"
            transform="rotate(-60,1320,90)"
          />
          {/* center */}
          <circle className="hbd-blush" strokeWidth="1.5" cx="1320" cy="90" r="8" />
          {/* stem */}
          <line className="hbd-blush" strokeWidth="1.5" x1="1320" y1="120" x2="1320" y2="150" />
          <path className="hbd-blush" strokeWidth="1.5" d="M1320,135 Q1300,128 1298,115" />
        </g>

        {/* ─── CENTER-LEFT: OM Symbol ──────────────────────── */}
        <g className="hbd-pulse" style={{ transformOrigin: "80px 440px" }} opacity="0.07">
          <text
            x="30"
            y="490"
            style={{
              fontFamily: "serif",
              fontSize: "130px",
              fill: "#1a3a6c",
              stroke: "none",
              fontWeight: "700",
            }}
          >
            ॐ
          </text>
        </g>

        {/* ─── CENTER-RIGHT: Mandala ring ──────────────────── */}
        <g className="hbd-spin" style={{ transformOrigin: "1390px 450px" }} opacity="0.07">
          <circle
            className="hbd-navy"
            strokeWidth="1"
            cx="1390"
            cy="450"
            r="70"
            strokeDasharray="4 6"
          />
          <circle
            className="hbd-navy"
            strokeWidth="1"
            cx="1390"
            cy="450"
            r="55"
            strokeDasharray="2 8"
          />
          <circle className="hbd-navy" strokeWidth="1" cx="1390" cy="450" r="40" />
          {/* 8 petal mandala */}
          {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
            <ellipse
              key={deg}
              className="hbd-navy"
              strokeWidth="1"
              cx="1390"
              cy="450"
              rx="6"
              ry="20"
              transform={`rotate(${deg},1390,450) translate(0,-28)`}
            />
          ))}
          <circle className="hbd-fill-navy" cx="1390" cy="450" r="5" opacity="0.5" />
        </g>

        {/* ─── BOTTOM-LEFT: Baby Footprints ────────────────── */}
        <g opacity="0.10" className="hbd-f3" style={{ transformOrigin: "120px 760px" }}>
          {/* left foot */}
          <ellipse
            className="hbd-fill-blush"
            cx="90"
            cy="790"
            rx="18"
            ry="24"
            transform="rotate(-10,90,790)"
          />
          <ellipse className="hbd-fill-blush" cx="78" cy="764" rx="5" ry="6" />
          <ellipse className="hbd-fill-blush" cx="88" cy="760" rx="5" ry="6" />
          <ellipse className="hbd-fill-blush" cx="99" cy="758" rx="4.5" ry="5.5" />
          <ellipse className="hbd-fill-blush" cx="108" cy="761" rx="4" ry="5" />
          <ellipse className="hbd-fill-blush" cx="116" cy="766" rx="3.5" ry="4.5" />
          {/* right foot (offset) */}
          <ellipse
            className="hbd-fill-blush"
            cx="145"
            cy="830"
            rx="18"
            ry="24"
            transform="rotate(10,145,830)"
          />
          <ellipse className="hbd-fill-blush" cx="133" cy="804" rx="5" ry="6" />
          <ellipse className="hbd-fill-blush" cx="143" cy="800" rx="5" ry="6" />
          <ellipse className="hbd-fill-blush" cx="154" cy="798" rx="4.5" ry="5.5" />
          <ellipse className="hbd-fill-blush" cx="163" cy="801" rx="4" ry="5" />
          <ellipse className="hbd-fill-blush" cx="171" cy="806" rx="3.5" ry="4.5" />
        </g>

        {/* ─── BOTTOM-RIGHT: Leaf branch ───────────────────── */}
        <g opacity="0.09" className="hbd-f1" style={{ transformOrigin: "1310px 820px" }}>
          {/* main stem */}
          <path
            className="hbd-navy"
            strokeWidth="2"
            d="M1260,900 Q1290,860 1310,820 Q1330,780 1360,750"
          />
          {/* leaves */}
          <path
            className="hbd-navy"
            strokeWidth="1.5"
            d="M1290,870 Q1270,845 1275,825 Q1295,840 1290,870Z"
          />
          <path
            className="hbd-navy"
            strokeWidth="1.5"
            d="M1310,840 Q1330,815 1345,820 Q1335,845 1310,840Z"
          />
          <path
            className="hbd-navy"
            strokeWidth="1.5"
            d="M1325,810 Q1305,785 1310,770 Q1330,780 1325,810Z"
          />
          <path
            className="hbd-navy"
            strokeWidth="1.5"
            d="M1345,785 Q1365,760 1378,768 Q1368,792 1345,785Z"
          />
        </g>

        {/* ─── SCATTERED: 4-pointed Stars ──────────────────── */}
        {[
          { x: 300, y: 80, s: 14, c: "hbd-fill-navy", op: 0.12, cls: "hbd-f3" },
          { x: 780, y: 50, s: 10, c: "hbd-fill-blush", op: 0.1, cls: "hbd-f1" },
          { x: 1100, y: 120, s: 12, c: "hbd-fill-navy", op: 0.09, cls: "hbd-f2" },
          { x: 500, y: 820, s: 11, c: "hbd-fill-blush", op: 0.11, cls: "hbd-f3" },
          { x: 950, y: 780, s: 10, c: "hbd-fill-gold", op: 0.09, cls: "hbd-f1" },
          { x: 200, y: 350, s: 8, c: "hbd-fill-blush", op: 0.09, cls: "hbd-f2" },
          { x: 1200, y: 600, s: 9, c: "hbd-fill-navy", op: 0.08, cls: "hbd-f3" },
          { x: 680, y: 440, s: 7, c: "hbd-fill-gold", op: 0.08, cls: "hbd-f1" },
        ].map(({ x, y, s, c, op, cls }, i) => (
          <g key={i} className={cls} style={{ transformOrigin: `${x}px ${y}px` }} opacity={op}>
            <path
              className={c}
              d={`M${x},${y - s} L${x + s * 0.3},${y - s * 0.3} L${x + s},${y} L${x + s * 0.3},${y + s * 0.3} L${x},${y + s} L${x - s * 0.3},${y + s * 0.3} L${x - s},${y} L${x - s * 0.3},${y - s * 0.3}Z`}
            />
          </g>
        ))}

        {/* ─── TOP-CENTER: Arc of dots (garland motif) ─────── */}
        <g opacity="0.08">
          {Array.from({ length: 18 }).map((_, i) => {
            const angle = Math.PI + (i / 17) * Math.PI; // 180° → 360°
            const cx = 720 + Math.cos(angle) * 280;
            const cy = 20 + Math.sin(angle) * 80;
            return (
              <circle key={i} className="hbd-fill-navy" cx={cx} cy={cy} r={i % 3 === 0 ? 4 : 2.5} />
            );
          })}
        </g>

        {/* ─── MIDDLE: Subtle large circle outline ─────────── */}
        <g opacity="0.04" className="hbd-pulse" style={{ transformOrigin: "720px 450px" }}>
          <circle
            className="hbd-navy"
            strokeWidth="1.5"
            cx="720"
            cy="450"
            r="340"
            strokeDasharray="8 12"
          />
          <circle
            className="hbd-navy"
            strokeWidth="1"
            cx="720"
            cy="450"
            r="280"
            strokeDasharray="3 14"
          />
        </g>

        {/* ─── BOTTOM-CENTER: Wavy divider line ────────────── */}
        <g opacity="0.07">
          <path
            className="hbd-blush"
            strokeWidth="1.5"
            d="M200,880 Q320,860 440,875 Q560,890 680,872 Q800,854 920,869 Q1040,884 1160,868 Q1280,852 1400,865"
            fill="none"
          />
        </g>
      </svg>
    </div>
  );
}
