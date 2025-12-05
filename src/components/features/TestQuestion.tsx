import { ChevronRight } from 'lucide-react';

interface QuestionImageProps {
  image?: string;
  objectFit?: 'contain' | 'cover';
  aspectRatio?: '16:9' | '4:3' | '1:1';
  category: string;
}

export const QuestionImage: React.FC<QuestionImageProps> = ({ 
  image, 
  objectFit, 
  aspectRatio, 
  category 
}) => {
  if (!image) return null;

  if (objectFit === 'contain') {
    return (
      <div className="w-full mb-6 rounded-2xl overflow-hidden border border-gray-200">
        <img
          src={image}
          alt={category}
          className="w-full h-auto"
        />
      </div>
    );
  }

  return (
    <div className={`w-full overflow-hidden rounded-2xl mb-6 shadow-sm ${
      aspectRatio === '4:3' ? 'aspect-[4/3]' :
      aspectRatio === '1:1' ? 'aspect-square' :
      'aspect-video'
    }`}>
      <img
        src={image}
        alt={category}
        className="w-full h-full object-cover"
      />
    </div>
  );
};

interface AnswerOptionProps {
  text: string;
  isSelected: boolean;
  onClick: () => void;
}

export const AnswerOption: React.FC<AnswerOptionProps> = ({ text, isSelected, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`w-full p-6 rounded-2xl transition-all duration-200 hover:shadow-lg active:scale-98 group ${
        isSelected
          ? 'bg-gray-50 border-2 border-primary'
          : 'bg-gray-50 border-2 border-transparent hover:bg-gradient-to-r hover:from-primary/10 hover:to-accent/10 hover:border-primary/20'
      }`}
    >
      <div className="flex items-center gap-4">
        <p className={`flex-1 text-left text-lg font-medium ${
          isSelected ? 'text-primary' : 'text-gray-700 group-hover:text-gray-900'
        }`}>
          {text}
        </p>
        <ChevronRight
          size={20}
          className={`transition-colors ${
            isSelected ? 'text-primary' : 'text-gray-400 group-hover:text-primary'
          }`}
        />
      </div>
    </button>
  );
};
