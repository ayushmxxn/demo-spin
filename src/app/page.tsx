"use client";
import React, { useState, useRef, useEffect } from "react";

interface SpinItem {
  id: number;
  name: string;
  value: string;
  image: string;
}

interface SpinAnimationProps {
  isSpinning: boolean;
  extendedItems: SpinItem[];
  SpinCard: React.ComponentType<{ item: SpinItem; index: number }>;
  spinItems: SpinItem[];
  animationKey: number;
}

const Spin: React.FC = () => {
  const [isSpinning, setIsSpinning] = useState(false);
  const [selectedItem, setSelectedItem] = useState<SpinItem | null>(null);
  const [animationKey, setAnimationKey] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const spinItems: SpinItem[] = [
    {
      id: 1,
      name: "presid...",
      value: "0.2",
      image:
        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Crect width='32' height='32' rx='6' fill='%238B5CF6'/%3E%3Ctext x='16' y='20' text-anchor='middle' fill='white' font-size='16' font-weight='bold'%3EP%3C/text%3E%3C/svg%3E",
    },
    {
      id: 2,
      name: "999BW",
      value: "0.069",
      image:
        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Crect width='32' height='32' rx='6' fill='%23374151'/%3E%3Ctext x='16' y='12' text-anchor='middle' fill='white' font-size='8'%3E999%3C/text%3E%3Ctext x='16' y='22' text-anchor='middle' fill='white' font-size='8'%3EBW%3C/text%3E%3C/svg%3E",
    },
    {
      id: 3,
      name: "Pidzi...",
      value: "0.1",
      image:
        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Crect width='32' height='32' rx='6' fill='%23C084FC'/%3E%3Ctext x='16' y='20' text-anchor='middle' fill='white' font-size='14'%3E😊%3C/text%3E%3C/svg%3E",
    },
    {
      id: 4,
      name: "DOGE",
      value: "0.15",
      image:
        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Crect width='32' height='32' rx='6' fill='%236366F1'/%3E%3Ctext x='16' y='20' text-anchor='middle' fill='white' font-size='16' font-weight='bold'%3ED%3C/text%3E%3C/svg%3E",
    },
    {
      id: 5,
      name: "PEPE",
      value: "0.08",
      image:
        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Crect width='32' height='32' rx='6' fill='%237C3AED'/%3E%3Ctext x='16' y='20' text-anchor='middle' fill='white' font-size='14'%3E🐸%3C/text%3E%3C/svg%3E",
    },
  ];

  // Create extended array for seamless looping (multiple copies)
  const extendedItems = [
    ...spinItems,
    ...spinItems,
    ...spinItems,
    ...spinItems,
    ...spinItems,
  ];

  const handleSpin = () => {
    if (isSpinning) return;

    setIsSpinning(true);
    setSelectedItem(null);
    setAnimationKey((prev) => prev + 1);

    // Randomly select a winner after spin completes
    const randomWinner =
      spinItems[Math.floor(Math.random() * spinItems.length)];

    setTimeout(() => {
      setIsSpinning(false);
      setSelectedItem(randomWinner);
    }, 4000);
  };

  // Real Solana Icon Component
  const SolanaIcon = ({ size = 12 }: { size?: number }) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 397.7 311.7"
      className="flex-shrink-0"
    >
      <defs>
        <linearGradient id="solanaGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00FFA3" />
          <stop offset="100%" stopColor="#DC1FFF" />
        </linearGradient>
      </defs>
      <g>
        <path
          fill="url(#solanaGradient)"
          d="M64.6,237.9c2.4-2.4,5.7-3.8,9.2-3.8h317.4c5.8,0,8.7,7,4.6,11.1l-62.7,62.7c-2.4,2.4-5.7,3.8-9.2,3.8H6.5c-5.8,0-8.7-7-4.6-11.1L64.6,237.9z"
        />
        <path
          fill="url(#solanaGradient)"
          d="M64.6,3.8C67.1,1.4,70.4,0,73.8,0h317.4c5.8,0,8.7,7,4.6,11.1l-62.7,62.7c-2.4,2.4-5.7,3.8-9.2,3.8H6.5c-5.8,0-8.7-7-4.6-11.1L64.6,3.8z"
        />
        <path
          fill="url(#solanaGradient)"
          d="M333.1,120.1c-2.4-2.4-5.7-3.8-9.2-3.8H6.5c-5.8,0-8.7,7-4.6,11.1l62.7,62.7c2.4,2.4,5.7,3.8,9.2,3.8h317.4c5.8,0,8.7-7,4.6-11.1L333.1,120.1z"
        />
      </g>
    </svg>
  );

  const SpinCard = ({ item, index }: { item: SpinItem; index: number }) => (
    <div className="flex-shrink-0 rounded-2xl p-1 min-w-[120px] bg-[#141414] backdrop-blur-sm border border-purple-500/20">
      <div className="bg-[#1B1B1B] rounded-xl p-4 flex flex-col items-center justify-center h-[160px] border border-gray-700/40 relative overflow-hidden">
        {/* Subtle inner glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-gray-600/5 rounded-xl"></div>

        {/* Token image container with premium gradient border */}
        <div className="relative mb-4 z-10">
          <div className="p-[2px] rounded-xl bg-gradient-to-br from-purple-400 via-purple-600 to-indigo-600">
            <div className="bg-gradient-to-br from-gray-800 to-black rounded-[10px] p-2">
              <img
                src={item.image}
                alt={item.name}
                className="w-7 h-7 rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* Token name with premium typography */}
        <div className="text-center font-semibold text-sm mb-2 text-gray-100 z-10 tracking-wide">
          {item.name}
        </div>

        {/* Token value with enhanced SOL indicator */}
        <div className="flex items-center space-x-2 z-10">
          <div className="flex items-center space-x-1 rounded-full px-2 py-1">
            <SolanaIcon size={12} />
          </div>
          <span className="font-mono text-sm font-semibold text-gray-100 px-2 py-1 rounded-md">
            {item.value}
          </span>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#0D0D0D] flex flex-col items-center justify-center p-8 relative overflow-hidden">
      {/* Main container with cards */}
      <div className="relative z-10">
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-20">
          <div className="relative">
            <div className="w-0 h-0 border-l-[18px] border-r-[18px] border-t-[24px] border-l-transparent border-r-transparent border-t-purple-500 drop-shadow-2xl"></div>
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[15px] border-r-[15px] border-t-[20px] border-l-transparent border-r-transparent border-t-purple-400"></div>
          </div>
        </div>

        {/* Cards container with premium glass effect */}
        <div className="bg-[#0D0D0D] backdrop-blur-xl rounded-3xl p-8 border border-neutral-800 overflow-hidden shadow-2xl relative">
          {/* Inner glow effect */}
          <div className="absolute inset-0 bg-[#0D0D0D] rounded-3xl"></div>

          {/* Spinning wheel container */}
          <div
            ref={containerRef}
            className="relative w-[640px] h-[200px] overflow-hidden z-10"
          >
            <SpinAnimation
              animationKey={animationKey}
              isSpinning={isSpinning}
              extendedItems={extendedItems}
              SpinCard={SpinCard}
              spinItems={spinItems}
            />
          </div>
        </div>
      </div>

      {/* Premium spin button */}
      <button
        onClick={handleSpin}
        disabled={isSpinning}
        className={`
          group mt-16 px-8 py-4 rounded-2xl font-semibold text-base transition-all duration-300 relative overflow-hidden shadow-lg
          ${
            isSpinning
              ? "bg-[#1A1A1A] text-gray-400 cursor-not-allowed border border-gray-700/30 shadow-inner"
              : "bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 text-white shadow-purple-500/20 hover:shadow-purple-500/40 hover:shadow-xl border border-purple-400/20 hover:border-purple-400/40 hover:-translate-y-0.5"
          }
        `}
      >
        {!isSpinning && (
          <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>
        )}

        {isSpinning ? (
          <div className="flex items-center justify-center space-x-3">
            <div className="w-4 h-4 border-2 border-gray-400/60 border-t-gray-300 rounded-full animate-spin"></div>
            <span className="text-sm font-medium">Spinning...</span>
          </div>
        ) : (
          <span className="relative z-10 font-semibold">Spin to Win</span>
        )}
      </button>

      {/* Premium result display */}
      {!isSpinning && selectedItem && (
        <div className="mt-8 px-8 py-6 bg-[#141414] backdrop-blur-sm text-white rounded-2xl shadow-2xl border border-purple-500/20 relative overflow-hidden opacity-100 transform scale-100 transition-all duration-500">
          {/* Subtle background pattern */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-gray-600/5 rounded-2xl"></div>
          <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-radial from-purple-500/10 to-transparent rounded-full -translate-y-12 translate-x-12"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-radial from-purple-400/5 to-transparent rounded-full translate-y-16 -translate-x-16"></div>

          <div className="text-center relative z-10">
            <div className="flex items-center justify-center mb-5">
              <div className="flex items-center space-x-2 text-purple-400">
                <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium tracking-wide">
                  WINNER
                </span>
                <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
              </div>
            </div>

            <div className="flex items-center justify-center space-x-4">
              <div className="flex items-center space-x-3  rounded-xl px-5 py-3 backdrop-blur-sm border border-gray-700/40">
                <div className="p-[2px] rounded-xl 0">
                  <div className=" rounded-[10px] p-1">
                    <img
                      src={selectedItem.image}
                      alt={selectedItem.name}
                      className="w-8 h-8 rounded-lg"
                    />
                  </div>
                </div>
                <span className="font-semibold text-xl text-gray-100">
                  {selectedItem.name}
                </span>
              </div>

              <div className="w-px h-12 bg-gradient-to-b from-transparent via-purple-500/30 to-transparent"></div>

              <div className="flex items-center space-x-3 bg-[#1B1B1B] rounded-xl px-5 py-3 backdrop-blur-sm border border-gray-700/40">
                <div className="flex items-center space-x-1 rounded-full px-2 py-1">
                  <SolanaIcon size={16} />
                </div>
                <span className="font-mono text-xl font-medium text-gray-100">
                  {selectedItem.value}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Separate component to handle the complex spin animation
const SpinAnimation: React.FC<SpinAnimationProps> = ({
  isSpinning,
  extendedItems,
  SpinCard,
  spinItems,
  animationKey,
}) => {
  const [finalX, setFinalX] = useState(0);

  useEffect(() => {
    if (isSpinning) {
      // Calculate precise stopping position
      const cardWidth = 136;
      const containerWidth = 640;
      const arrowPosition = containerWidth / 2;

      // Generate random target card
      const targetCardIndex = Math.floor(Math.random() * spinItems.length);

      // Calculate minimum spins (3-6 full rotations)
      const minSpins = 3 + Math.random() * 3;
      const fullRotationDistance = spinItems.length * cardWidth;
      const baseDistance = minSpins * fullRotationDistance;

      // Calculate exact position where target card should stop under arrow
      const targetCardCenter = targetCardIndex * cardWidth + cardWidth / 2;
      const finalDistance = baseDistance + targetCardCenter - arrowPosition;

      setFinalX(-finalDistance);
    }
  }, [isSpinning, spinItems.length]);

  return (
    <div
      className={`flex space-x-4 absolute transition-transform duration-[4000ms] ease-out ${
        isSpinning ? "transform" : ""
      }`}
      style={{
        width: `${extendedItems.length * 136}px`,
        transform: isSpinning ? `translateX(${finalX}px)` : "translateX(0px)",
      }}
    >
      {extendedItems.map((item, index) => (
        <SpinCard
          key={`${item.id}-${Math.floor(index / spinItems.length)}`}
          item={item}
          index={index}
        />
      ))}
    </div>
  );
};

export default Spin;
