import React from 'react'

const Buttons = ({ label }) => {
  // Map labels to Tailwind background colors
  const colorMap = {
    red: 'bg-red-500',
    blue: 'bg-blue-500',
    green: 'bg-green-500',
    yellow: 'bg-yellow-500',
    orange: 'bg-orange-500',
    purple: 'bg-purple-500',
    pink: 'bg-pink-500',
    // add more as needed
  }

  const bgColor = colorMap[label.toLowerCase()] || 'bg-gray-500'

  return (
    <div>
      <button className={`${bgColor} rounded-3xl px-4 py-2 text-white`}>
        {label}
      </button>
    </div>
  )
}

export default Buttons