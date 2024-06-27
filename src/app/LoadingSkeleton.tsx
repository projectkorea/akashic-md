const LoadingSkeleton: React.FC = () => {
  return (
    <div className="space-y-4 animate-pulse">
      <div className="bg-gray-300 h-6 rounded"></div>
      <div className="space-y-2">
        <div className="bg-gray-300 h-4 rounded"></div>
        <div className="bg-gray-300 h-4 rounded"></div>
        <div className="bg-gray-300 h-4 rounded"></div>
      </div>
    </div>
  );
};

export default LoadingSkeleton;
