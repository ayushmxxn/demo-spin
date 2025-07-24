"use client"

import type React from "react"
import { useState, useEffect } from "react"

interface SpinItem {
  id: number
  name: string
  value: string
  image: string
}

const Spin: React.FC = () => {
  const [isSpinning, setIsSpinning] = useState(false)
  const [selectedItem, setSelectedItem] = useState<SpinItem | null>(null)
  const [rotation, setRotation] = useState(0)
  const [mounted, setMounted] = useState(false)

  // Fix hydration issue
  useEffect(() => {
    setMounted(true)
  }, [])

  const spinItems: SpinItem[] = [
    {
      id: 1,
      name: "PyroPete",
      value: "0.08",
      image:
        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Crect width='32' height='32' rx='8' fill='%23FF6B35'/%3E%3Ctext x='16' y='20' textAnchor='middle' fill='white' fontSize='12' fontWeight='bold'%3EP%3C/text%3E%3C/svg%3E",
    },
    {
      id: 2,
      name: "xxsmaX",
      value: "100.0",
      image:
        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Crect width='32' height='32' rx='8' fill='%237C3AED'/%3E%3Ctext x='16' y='20' textAnchor='middle' fill='white' fontSize='12' fontWeight='bold'%3EX%3C/text%3E%3C/svg%3E",
    },
    {
      id: 3,
      name: "Sandwich9000",
      value: "0.12",
      image:
        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Crect width='32' height='32' rx='8' fill='%23F59E0B'/%3E%3Ctext x='16' y='20' textAnchor='middle' fill='white' fontSize='12' fontWeight='bold'%3ES%3C/text%3E%3C/svg%3E",
    },
    {
      id: 4,
      name: "01234",
      value: "0.02",
      image:
        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Crect width='32' height='32' rx='8' fill='%236366F1'/%3E%3Ctext x='16' y='20' textAnchor='middle' fill='white' fontSize='10' fontWeight='bold'%3E01%3C/text%3E%3C/svg%3E",
    },
    {
      id: 5,
      name: "CryptoKing",
      value: "0.25",
      image:
        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Crect width='32' height='32' rx='8' fill='%238B5CF6'/%3E%3Ctext x='16' y='20' textAnchor='middle' fill='white' fontSize='12' fontWeight='bold'%3EK%3C/text%3E%3C/svg%3E",
    },
  ]

  // FIXED ROTATION - ALWAYS ONE DIRECTION, NO GLITCHES
  const handleSpin = async () => {
    if (isSpinning || !mounted) return

    setIsSpinning(true)
    setSelectedItem(null)

    // Pick random winner
    const randomIndex = Math.floor(Math.random() * spinItems.length)
    const winner = spinItems[randomIndex]

    // FIXED CALCULATION - ALWAYS MOVE FORWARD IN SAME DIRECTION
    const cardWidth = 200 // Width per card position
    const fullCycleWidth = cardWidth * spinItems.length // Complete cycle width

    // Always add positive rotation (same direction)
    const minSpins = 8 + Math.random() * 4 // 8-12 full cycles
    const baseRotation = minSpins * fullCycleWidth
    const targetOffset = randomIndex * cardWidth

    // ALWAYS INCREMENT - NO REVERSE DIRECTION
    const newRotation = rotation + baseRotation + targetOffset

    console.log("Fixed rotation calculation:", {
      winner,
      randomIndex,
      currentRotation: rotation,
      baseRotation,
      targetOffset,
      newRotation,
      direction: "ALWAYS FORWARD",
    })

    // Start the animation - ALWAYS FORWARD
    setRotation(newRotation)

    // Wait for animation to complete
    setTimeout(() => {
      console.log("Rotation completed - showing winner")
      setIsSpinning(false)
      setSelectedItem(winner)
    }, 6000) // 6 seconds
  }

  // Real Solana Icon Component
  const SolanaIcon = ({ size = 12 }: { size?: number }) => (
    <svg width={size} height={size} viewBox="0 0 397.7 311.7" className="flex-shrink-0">
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
  )

  // Show loading state during hydration
  if (!mounted) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] flex flex-col items-center justify-center p-8">
        <div className="relative z-10 w-full max-w-6xl">
          <div className="flex justify-center mb-4">
            <div className="relative">
              <div className="w-0 h-0 border-l-[20px] border-r-[20px] border-t-[28px] border-l-transparent border-r-transparent border-t-purple-500 filter drop-shadow-lg"></div>
              <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[16px] border-r-[16px] border-t-[22px] border-l-transparent border-r-transparent border-t-purple-400"></div>
            </div>
          </div>
          <div className="relative bg-[#0f0f0f] rounded-3xl p-6 border border-gray-800/50 shadow-2xl">
            <div className="w-full h-[320px] bg-gray-800/50 rounded-2xl animate-pulse flex items-center justify-center">
              <div className="text-gray-400 text-lg">Loading 3D Cylindrical Wheel...</div>
            </div>
          </div>
          <div className="flex justify-center mt-8">
            <div className="px-8 py-4 rounded-2xl bg-gray-800 text-gray-400 border border-gray-700">Loading...</div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] flex flex-col items-center justify-center p-8 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-blue-900/5 to-black"></div>

      {/* Main container */}
      <div className="relative z-10 w-full max-w-7xl">
        {/* Arrow pointer */}
        <div className="flex justify-center mb-4">
          <div className="relative">
            <div className="w-0 h-0 border-l-[20px] border-r-[20px] border-t-[28px] border-l-transparent border-r-transparent border-t-purple-500 filter drop-shadow-lg"></div>
            <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[16px] border-r-[16px] border-t-[22px] border-l-transparent border-r-transparent border-t-purple-400"></div>
          </div>
        </div>

        {/* 3D Cylindrical Spin wheel container */}
        <div
          className="relative bg-[#0f0f0f] rounded-3xl p-6 border border-gray-800/50 shadow-2xl overflow-hidden"
          style={{
            perspective: "1200px", // Add 3D perspective
            perspectiveOrigin: "center center",
          }}
        >
          {/* Background glow effects */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-blue-500/5 to-purple-500/5 rounded-3xl"></div>

          {/* 3D Cylindrical Cards container */}
          <div className="relative w-full h-[280px] overflow-hidden">
            <HorizontalWheel rotation={rotation} spinItems={spinItems} isSpinning={isSpinning} />
          </div>
        </div>

        {/* Spin button */}
        <div className="flex justify-center mt-8">
          <button
            onClick={handleSpin}
            disabled={isSpinning}
            className={`
              relative px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 overflow-hidden
              ${
                isSpinning
                  ? "bg-gray-800 text-gray-400 cursor-not-allowed border border-gray-700"
                  : "bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white border border-purple-400/30 hover:border-purple-400/60 shadow-lg hover:shadow-purple-500/25 hover:scale-105 hover:-translate-y-1"
              }
            `}
          >
            {!isSpinning && (
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            )}

            {isSpinning ? (
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 border-2 border-gray-400 border-t-white rounded-full animate-spin"></div>
                <span>Spinning...</span>
              </div>
            ) : (
              <span className="relative z-10">Spin to Win</span>
            )}
          </button>
        </div>

        {/* Winner display */}
        {!isSpinning && selectedItem && (
          <div className="mt-8 mx-auto max-w-md opacity-100 transform scale-100 transition-all duration-500">
            <div className="bg-[#1a1a2e] rounded-2xl p-6 border border-purple-500/30 relative overflow-hidden">
              {/* Background effects */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-blue-500/5 to-transparent rounded-2xl"></div>

              {/* Winner badge */}
              <div className="text-center mb-4">
                <div className="inline-flex items-center space-x-2 text-purple-400 text-sm font-medium">
                  <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                  <span>WINNER</span>
                  <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                </div>
              </div>

              {/* Winner details */}
              <div className="flex items-center justify-center space-x-4">
                <div className="flex items-center space-x-3 bg-black/30 rounded-xl px-4 py-3 border border-gray-700/50">
                  <img
                    src={selectedItem.image || "/placeholder.svg"}
                    alt={selectedItem.name}
                    className="w-8 h-8 rounded-lg"
                  />
                  <span className="text-white font-semibold text-lg">{selectedItem.name}</span>
                </div>

                <div className="w-px h-12 bg-gradient-to-b from-transparent via-purple-500/50 to-transparent"></div>

                <div className="flex items-center space-x-2 bg-black/30 rounded-xl px-4 py-3 border border-gray-700/50">
                  <SolanaIcon size={16} />
                  <span className="text-white font-mono text-lg font-medium">{selectedItem.value}</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

// 3D CYLINDRICAL WHEEL - FIXED ROTATION, NO GLITCHES
interface HorizontalWheelProps {
  rotation: number
  spinItems: SpinItem[]
  isSpinning: boolean
}

const HorizontalWheel: React.FC<HorizontalWheelProps> = ({ rotation, spinItems, isSpinning }) => {
  const cardWidth = 180 // Width of each card
  const cardGap = 20 // Gap between cards
  const totalCardWidth = cardWidth + cardGap
  const containerWidth = 5 * totalCardWidth - cardGap // Width for exactly 5 cards
  const fullCycleWidth = totalCardWidth * spinItems.length // Complete cycle width

  const renderCards = () => {
    const cards = []
    const totalSets = 15 // More sets for seamless loop

    for (let set = 0; set < totalSets; set++) {
      for (let i = 0; i < spinItems.length; i++) {
        const item = spinItems[i]
        const cardIndex = set * spinItems.length + i

        // FIXED POSITION CALCULATION - NO GLITCHES
        const baseX = cardIndex * totalCardWidth

        // Use modulo to create seamless loop - ALWAYS SAME DIRECTION
        const normalizedRotation = rotation % fullCycleWidth
        const offsetX = -normalizedRotation
        const finalX = baseX + offsetX

        // Calculate position relative to container center for 3D effects
        const containerCenter = containerWidth / 2
        const cardCenter = finalX + cardWidth / 2
        const distanceFromCenter = cardCenter - containerCenter
        const normalizedDistance = distanceFromCenter / (containerWidth / 2) // -1 to 1

        // Determine if this card is in the center (winner position)
        const isCenterCard = Math.abs(distanceFromCenter) < totalCardWidth / 2
        const isNearCenter = Math.abs(distanceFromCenter) < totalCardWidth * 1.5

        // 3D CYLINDRICAL CALCULATIONS - SAME AS BEFORE
        let rotateY = 0
        let translateZ = 0
        let opacity = 1
        let scale = 1
        let brightness = 1
        let zIndex = 5

        if (isCenterCard) {
          // CENTER CARD - FACES STRAIGHT (NO ROTATION)
          rotateY = 0
          translateZ = 30
          opacity = 1
          scale = 1.1
          brightness = 1.2
          zIndex = 20
        } else if (isNearCenter) {
          // ADJACENT CARDS - SLIGHT CYLINDRICAL CURVE
          const curveIntensity = Math.abs(normalizedDistance) * 25 // 0-25 degrees
          rotateY = normalizedDistance > 0 ? curveIntensity : -curveIntensity
          translateZ = 10 - Math.abs(normalizedDistance) * 20
          opacity = 0.95
          scale = 1
          brightness = 1
          zIndex = 15
        } else {
          // SIDE CARDS - STRONG CYLINDRICAL CURVE
          const curveIntensity = 35 + Math.abs(normalizedDistance) * 20 // 35-55 degrees
          rotateY = normalizedDistance > 0 ? Math.min(curveIntensity, 60) : -Math.min(curveIntensity, 60)
          translateZ = -10 - Math.abs(normalizedDistance) * 30
          opacity = 0.9 - Math.abs(normalizedDistance) * 0.1
          scale = 0.95 - Math.abs(normalizedDistance) * 0.05
          brightness = 0.95 - Math.abs(normalizedDistance) * 0.15
          zIndex = 10
        }

        // Only render cards that are visible in the container
        if (finalX > -cardWidth * 2 && finalX < containerWidth + cardWidth * 2) {
          cards.push(
            <div
              key={`cylindrical-card-${set}-${item.id}`}
              className="absolute"
              style={{
                left: `${finalX}px`,
                top: "50%",
                transform: `translateY(-50%) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`,
                transformStyle: "preserve-3d",
                opacity: opacity,
                filter: `brightness(${brightness})`,
                zIndex: zIndex,
                width: `${cardWidth}px`,
                // SMOOTH TRANSITION - NO GLITCHES
                transition: isSpinning
                  ? "all 6s cubic-bezier(0.25, 0.46, 0.45, 0.94)"
                  : "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
              }}
            >
              <div className="w-full h-[260px] rounded-2xl overflow-hidden">
                {/* Card background with 3D cylindrical effects */}
                <div
                  className={`absolute inset-0 rounded-2xl p-[1px] ${
                    isCenterCard
                      ? "bg-gradient-to-br from-blue-400/80 via-purple-500/80 to-indigo-500/80"
                      : isNearCenter
                        ? "bg-gradient-to-br from-blue-500/60 via-purple-500/60 to-indigo-500/60"
                        : "bg-gradient-to-br from-blue-500/40 via-purple-500/40 to-indigo-500/40"
                  }`}
                >
                  <div className="w-full h-full bg-[#1a1a2e] rounded-2xl relative overflow-hidden">
                    {/* 3D Dynamic lighting based on cylindrical rotation */}
                    <div
                      className="absolute inset-0 rounded-2xl"
                      style={{
                        background: `linear-gradient(${(135 + rotateY).toFixed(0)}deg, 
                          rgba(59, 130, 246, ${isCenterCard ? 0.3 : isNearCenter ? 0.2 : 0.15}) 0%, 
                          transparent 50%, 
                          rgba(147, 51, 234, ${isCenterCard ? 0.2 : isNearCenter ? 0.15 : 0.1}) 100%)`,
                      }}
                    />

                    {/* Cylindrical depth shadows */}
                    <div
                      className="absolute inset-0 rounded-2xl"
                      style={{
                        background: `radial-gradient(ellipse at ${50 + rotateY * 0.3}% 50%, 
                          transparent 40%, 
                          rgba(0, 0, 0, ${Math.abs(rotateY) * 0.008}) 100%)`,
                      }}
                    />

                    {/* Card content */}
                    <div className="relative z-10 flex flex-col items-center justify-center h-full p-4">
                      {/* Token image */}
                      <div className="mb-4">
                        <div className="relative">
                          <div
                            className={`rounded-xl overflow-hidden border border-gray-600/50 bg-gradient-to-br from-gray-700 to-gray-800 ${
                              isCenterCard ? "w-20 h-20" : isNearCenter ? "w-18 h-18" : "w-16 h-16"
                            }`}
                          >
                            <img
                              src={item.image || "/placeholder.svg"}
                              alt={item.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          {/* 3D Glow effect with cylindrical lighting */}
                          <div
                            className={`absolute inset-0 rounded-xl blur-md -z-10 ${
                              isCenterCard
                                ? "bg-gradient-to-br from-blue-400/80 to-purple-400/80"
                                : isNearCenter
                                  ? "bg-gradient-to-br from-blue-400/50 to-purple-400/50"
                                  : "bg-gradient-to-br from-blue-400/25 to-purple-400/25"
                            }`}
                          ></div>
                        </div>
                      </div>

                      {/* Token name */}
                      <div className="text-center mb-3">
                        <h3
                          className={`text-white font-medium tracking-wide ${
                            isCenterCard ? "text-xl" : isNearCenter ? "text-lg" : "text-base"
                          }`}
                        >
                          {item.name}
                        </h3>
                      </div>

                      {/* Token value */}
                      <div
                        className={`flex items-center space-x-2 bg-black/30 rounded-lg px-4 py-2 border border-gray-700/50 ${
                          isCenterCard
                            ? "bg-black/70 border-purple-500/60"
                            : isNearCenter
                              ? "bg-black/50 border-purple-500/40"
                              : "bg-black/30 border-gray-700/50"
                        }`}
                      >
                        <SolanaIcon size={isCenterCard ? 20 : isNearCenter ? 18 : 16} />
                        <span
                          className={`text-white font-mono font-medium ${
                            isCenterCard ? "text-lg" : isNearCenter ? "text-base" : "text-sm"
                          }`}
                        >
                          {item.value}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>,
          )
        }
      }
    }

    return cards
  }

  // Solana Icon Component
  const SolanaIcon = ({ size = 12 }: { size?: number }) => (
    <svg width={size} height={size} viewBox="0 0 397.7 311.7" className="flex-shrink-0">
      <defs>
        <linearGradient id={`solanaGradientCylindrical-${size}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00FFA3" />
          <stop offset="100%" stopColor="#DC1FFF" />
        </linearGradient>
      </defs>
      <g>
        <path
          fill={`url(#solanaGradientCylindrical-${size})`}
          d="M64.6,237.9c2.4-2.4,5.7-3.8,9.2-3.8h317.4c5.8,0,8.7,7,4.6,11.1l-62.7,62.7c-2.4,2.4-5.7,3.8-9.2,3.8H6.5c-5.8,0-8.7-7-4.6-11.1L64.6,237.9z"
        />
        <path
          fill={`url(#solanaGradientCylindrical-${size})`}
          d="M64.6,3.8C67.1,1.4,70.4,0,73.8,0h317.4c5.8,0,8.7,7,4.6,11.1l-62.7,62.7c-2.4,2.4-5.7,3.8-9.2,3.8H6.5c-5.8,0-8.7-7-4.6-11.1L64.6,3.8z"
        />
        <path
          fill={`url(#solanaGradientCylindrical-${size})`}
          d="M333.1,120.1c-2.4-2.4-5.7-3.8-9.2-3.8H6.5c-5.8,0-8.7,7-4.6,11.1l62.7,62.7c2.4,2.4,5.7,3.8,9.2,3.8h317.4c5.8,0,8.7-7,4.6-11.1L333.1,120.1z"
        />
      </g>
    </svg>
  )

  return (
    <div
      className="absolute inset-0 flex items-center justify-center overflow-hidden"
      style={{
        transformStyle: "preserve-3d",
      }}
    >
      <div
        className="relative overflow-hidden"
        style={{
          width: `${containerWidth}px`,
          height: "100%",
          transformStyle: "preserve-3d",
        }}
      >
        {renderCards()}
      </div>
    </div>
  )
}

export default Spin
