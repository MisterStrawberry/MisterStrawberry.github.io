import { useMemo } from 'react'

import ColorBends from '@/components/react-bits/ColorBends'
import DomeGallery from '@/components/react-bits/DomeGallery'
import { useThemeColors } from '@/utils/useThemeColors'

const IMAGES = ['/vasya1.png']

const Landing = () => {
  const c = useThemeColors()
  const colors = useMemo(
    () => [c.primary, c.primaryLight, c.secondary],
    [c.primary, c.primaryLight, c.secondary]
  )

  return (
    <main className="w-screen h-screen absolute">
      <ColorBends
        colors={colors}
        rotation={90}
        speed={0.2}
        scale={1}
        frequency={1}
        warpStrength={1}
        mouseInfluence={1}
        noise={0.15}
        parallax={0.5}
        iterations={1}
        intensity={1.5}
        bandWidth={6}
        transparent
        autoRotate={0}
        className=""
      />
      <div className="w-screen h-screen absolute">
        <DomeGallery
          images={IMAGES}
          fit={0.8}
          minRadius={600}
          maxVerticalRotationDeg={0}
          segments={34}
          dragDampening={2}
          grayscale
        />
      </div>
    </main>
  )
}

export default Landing
