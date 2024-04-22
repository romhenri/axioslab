const statusColorMap = {
  "error": "bg-red-500",
  "loading": "bg-yellow-500",
  "canceled": "bg-orange-500",
  "success": "bg-green-500",
};

const sizeMap = {
  1: "w-2 h-2",
  2: "w-4 h-4",
  3: "w-6 h-6",
  4: "w-8 h-8",
  5: "w-10 h-10",
  6: "w-12 h-12",
  7: "w-14 h-14",
  8: "w-16 h-16",
  9: "w-20 h-20",
  10: "w-24 h-24",
  11: "w-28 h-28",
  12: "w-32 h-32",
  13: "w-36 h-36",
  14: "w-40 h-40",
  15: "w-44 h-44",
  16: "w-48 h-48",
};

const StatusLight = (
  {
    status,
    statusCode,
    size,
  }
) => {
  const colorClass = statusColorMap[status] || "bg-gray-300";
  const sizeClass = sizeMap[size] || "w-12 h-12";

  return (
    <div
      className={`
      flex justify-center items-center
      ${sizeClass} rounded-full ${colorClass}
      `}
      >
        {
          statusCode && (
            <span className="text-white">
              {statusCode}
            </span>
          )
        }
    </div>
  )
};

export default StatusLight;