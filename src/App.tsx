import Navbar from "./component/layout/NavBar"
import TextPressure from "./component/ui/TextPressure"
import bg1 from "./assets/video/bg-1.mp4"
import shipSound from "./assets/sound/shipSound.mp3"
import Feature from "./component/layout/Feature"
import CircularGallery from "./component/ui/CircularGallery"
import Stats from "./component/layout/Stats"
import Testimoni from "./component/layout/TestiMoni"
import Faq from "./component/layout/Faq"
import Footer from "./component/layout/Footer"
import { useState, useEffect} from 'react';
import SplitText from "./component/ui/SplitText"

function App() {
    const [progress, setProgress] = useState(0);
    const [currentUrl, setCurrentUrl] = useState('HTTPS://KPRVERSE.COM/KPCO/AREA-SCAN/A/SE_23K34L');
    const [showBrand, setShowBrand] = useState(true);
    const [showContent, setShowContent] = useState(true);
    
    // URLs untuk ditampilkan selama loading
    const urls = [
      'HTTPS://KPRVERSE.COM/KPCO/AREA-SCAN/A/SE_23K34L',
      'HTTPS://MARIAFLEET.COM/RESOURCES/LOAD/MAIN.JS',
      'HTTPS://MARIAFLEET.COM/API/VESSELS/GET_ALL',
      'HTTPS://MARIAFLEET.COM/STATIC/CSS/MAIN.CSS',
      'HTTPS://MARIAFLEET.COM/ASSETS/IMAGES/LOADER.SVG',
      'HTTPS://MARIAFLEET.COM/API/AUTH/VERIFY_SESSION',
      'HTTPS://MARIAFLEET.COM/API/CONFIG/GET_ROUTES'
    ];
    
    // Efek untuk mengupdate progress dan URL
    useEffect(() => {
      if (progress < 100) {
        const timer = setTimeout(() => {
          setProgress(prev => prev + 1);
          
          // Ganti URL setiap 15% kemajuan
          if (progress % 15 === 0) {
            const urlIndex = Math.floor(progress / 15) % urls.length;
            setCurrentUrl(urls[urlIndex]);
          }
        }, 50);
        
        return () => clearTimeout(timer);
      } else {
        // Setelah loading 100%, tampilkan brand
        const brandTimer = setTimeout(() => {
          setShowBrand(true);
          
          // Setelah brand muncul, tampilkan konten utama
          const contentTimer = setTimeout(() => {
            setShowContent(true);
          }, 2000);
          
          return () => clearTimeout(contentTimer);
        }, 500);
        
        return () => clearTimeout(brandTimer);
      }
    }, [progress]);

  return (
    <>
    {/* if loading display hidden */}
        <Navbar className={!showContent ? 'hidden' : ''} />
    {!showBrand ? (
        // Loading screen
        <div  className='w-full h-screen bg-white flex flex-col items-center justify-center text-white font-mono'>
        <div className="w-full max-w-3xl px-4">
          <div className="flex items-center mb-2">
            <div className="mr-2 text-blue-500 text-sm">▶</div>
            <div className="text-blue-400 text-sm">LOADING - {progress}%</div>
          </div>
          
          <div className="w-full h-1 bg-white mb-2">
            <div 
              className="h-full bg-blue-500 transition-all duration-100"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          
          <div className="text-gray-400 text-sm text-right overflow-hidden whitespace-nowrap">
            {currentUrl}
          </div>
        </div>
        </div>
      ) : !showContent ? (
        // Brand screen with fade-in animation
        <div className='w-full h-screen white flex items-center justify-center text-white font-mono'>
        <div className={`transition-opacity duration-1000 ${showBrand ? 'opacity-100' : 'opacity-0'}`}>
          <SplitText text="Maria Fleet" className='text-5xl md:text-9xl font-extrabold text-center text-blue-800'/>
        </div>
        </div>
      ) : (
    
    <div className="fade-out">
      <div className="main-content h-screen w-full relative">
        <video src={bg1} muted loop autoPlay playsInline className="absolute object-cover h-screen w-full" style={{zIndex: "-1"}}></video>

        <section className="container mx-auto w-full h-screen p-5 md:px-20 flex justify-center items-center leading-8">
        <audio src={shipSound} autoPlay />
            <div className="welcome md:flex-1 text-center md:text-left">
                <h1 className="text-5xl font-bold text-white drop-shadow-xl">Explore the Ocean in Ultimate Comfort!</h1>
                <p className="text-white/50 drop-shadow-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic ducimus porro nobis nisi. Minima, cupiditate numquam. Fugit a unde, maiores adipisci eius fugiat libero tempore laudantium perspiciatis voluptatem architecto nemo.</p>
                <a href="/ourFleet" className="mt-2 bg-blue-800 hover:bg-blue-900 text-white inline-flex items-center px-10 py-1.5 rounded-md"><i className="fa-solid fa-ship me-2"></i> Our Fleet</a>
            </div>
            <div className="flex-1 flex-col justify-end items-end hidden md:flex text-white">
              <div className="w-1 h-30 bg-white mr-4"></div>
               <i className="fa-solid fa-anchor text-3xl animate-bounce"></i>
            </div>
        </section>
      </div>

      <div className="md:h-screen">
        <Feature />
      </div>

      <div className="h-screen relative text-center">
          <TextPressure
        text="Where We Go"
        flex={true}
        alpha={false}
        stroke={false}
        width={true}
        weight={true}
        italic={true}
        textColor="#193CB8"
        strokeColor="#ff0000"
        minFontSize={36}
      />
            <p className="mt-3">
            Explore the World's Hidden Paradises with Us
            </p>
            <CircularGallery bend={3} textColor="#000000" font="bold 30px DM Sans" borderRadius={0.05} />
      </div>

      <div className="md:h-50 mt-20">
      </div>

      <Stats />
      <Testimoni />

      <Faq />

      <Footer />
      </div>
      )}
    </>
  )
}

export default App
