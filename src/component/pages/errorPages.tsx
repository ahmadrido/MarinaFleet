import FuzzyText from "../layout/errorP";

const ErrorPages = () => {
    return (
        <div className="h-screen flex w-screen flex-col gap-5 items-center justify-center bg-black text-white">
        <FuzzyText 
        baseIntensity={0.2} 
        hoverIntensity={0.5} 
        enableHover={true}
        fontFamily="monospace"
        fontSize={"clamp(5rem, 10vw, 10rem)"}
        >
        404
      </FuzzyText>
        <FuzzyText 
        baseIntensity={0.2} 
        hoverIntensity={0.5} 
        enableHover={true}
        fontSize={"clamp(3rem, 3vw, 3rem)"}
        >
        Page Not Found
      </FuzzyText>
      <h1 className="text-white font-mono">Back to Home <a href="/" className="text-blue-500 hover:text-blue-100">Click Here!</a> </h1>
        </div>
    )
};

export default ErrorPages