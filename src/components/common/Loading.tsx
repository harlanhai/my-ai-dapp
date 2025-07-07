export const Loading = () => {
  return (
    <div className="flex items-center justify-center p-8">
      <div className="w-8 h-8 border-2 border-gray-300 border-t-blue-600 rounded-full animate-spin"></div>
      <span className="ml-3 text-gray-700">加载中...</span>
    </div>
  );
};