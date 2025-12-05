interface ProgressBarProps {
  current: number;
  total: number;
  progress: number;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ current, total, progress }) => {
  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-medium text-gray-600">
          {current} / {total}
        </span>
        <span className="text-sm font-medium text-primary">
          {Math.round(progress)}%
        </span>
      </div>
      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
        <div
          className="h-full gradient-primary transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};
