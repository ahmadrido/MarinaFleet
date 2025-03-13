

interface ctaProps {
    text?: string
}

export function ctaBooking ({text}: ctaProps) {
    return (
        <button className="px-6 py-3 cursor-pointer bg-blue-800 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2">
          <i className="fa-solid fa-calendar-check"></i>
          <span>{text}</span>
        </button>
       ) 
}

export function ctaQuestion ({text}: ctaProps) {
    return (
        <button className="px-6 py-3 cursor-pointer border border-blue-800 text-blue-800 font-medium rounded-lg hover:bg-blue-50 transition-colors flex items-center gap-2">
        <i className="fa-solid fa-circle-question"></i>
        <span>{text}</span>
      </button>
     ) 
} 

export default {ctaBooking, ctaQuestion}

