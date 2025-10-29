import GooglePlayIcon from '@mui/icons-material/Home';
import { AppleIcon } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faApple, faGooglePlay } from '@fortawesome/free-brands-svg-icons'; // Specific Brand icon
import { faDownload } from '@fortawesome/free-solid-svg-icons'; // Specific Solid icon

interface HeroSectionProps {
  title: string
  subtitle: string
  backgroundImage?: string
  primaryButtonText?: string
  secondaryButtonText?: string
  onPrimaryClick?: () => void
  onSecondaryClick?: () => void
}

export default function HeroSection({
  title,
  subtitle,
  backgroundImage,
  primaryButtonText = "Download on Google Play",
  secondaryButtonText = "Download on Apple Store",
  onPrimaryClick,
  onSecondaryClick,
}: HeroSectionProps){
  return (
    <section
      className=" relative w-full h-[600px] md:h-screen flex items-center justify-center text-center text-white overflow-hidden"
      style={{
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Content */}
      <div className="flex items-center justify-center flex-col relative z-10 mt-20 max-w-5xl">
        <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 text-balance w-[600px]">{title}</h1>

        <p className="w-[480px] md:w-full flex items-center justify-center text-sm sm:text-lg md:text-xl mb-8 md:mb-10 text-gray-100 text-balance">{subtitle}</p>

        {/* Buttons */}
        <div className="w-auto flex flex-col sm:flex-row gap-6 justify-center">
          
          <button
            onClick={onPrimaryClick}
            className="flex flex-row items-center self-center space-x-2 px-2 md:px-4 py-3 md:py-4 bg-[#9900E8] hover:bg-purple-700 text-white font-light rounded-lg transition-colors"
          >
            <FontAwesomeIcon icon={faGooglePlay} size="lg" className='mx-2' />
            {primaryButtonText}
          </button>
          <button
            onClick={onSecondaryClick}
            className="flex flex-row items-center self-center space-x-2 px-4 md:px-4 py-3 md:py-4 bg-[#9900E8] hover:bg-purple-700 text-white font-light rounded-lg transition-colors"
          >
            <FontAwesomeIcon icon={faApple} size="lg" className='mx-2' />              
            {secondaryButtonText}
          </button>
        </div>
      </div>
    </section>
  )
}
