export default function DetectionOverlay({ detections = [] }) {
  return (
    <svg className="absolute top-0 left-0 w-full h-full pointer-events-none">
      {detections.map((box, i) => (
        <g key={i}>
          <rect
            x={box.x} y={box.y} width={box.w} height={box.h}
            stroke="yellow" strokeWidth="3" fill="none"
          />
          <text x={box.x} y={box.y - 5} fill="yellow" fontSize="14">
            {box.label}
          </text>
        </g>
      ))}
    </svg>
  );
}