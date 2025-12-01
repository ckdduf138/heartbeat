import { useNavigate } from 'react-router-dom';
import { Header } from '@/components/layout/Header';
import { BottomNav } from '@/components/layout/BottomNav';
import { ltiData } from '@/data/ltiData';

const AllLtiTypes: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 animate-fade-in relative">
      <Header title="모든 LTI 유형" />
      <div className="pt-14 pb-20 px-4">
        <div className="max-w-4xl mx-auto py-6 animate-slide-up">
          {/* 설명 */}
          <div className="card mb-6 bg-gradient-to-br from-primary to-primary-dark text-white border-0">
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-2">16가지 연애 유형</h2>
              <p className="text-white/90 text-sm leading-relaxed">
                {ltiData.lti_system_name}
              </p>
            </div>
          </div>

          {/* 유형 그리드 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {ltiData.lti_types.map((type) => (
              <div
                key={type.code}
                className="card cursor-pointer hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                onClick={() => navigate(`/idealTypeResult?result=${type.code}`)}
              >
                <div className="flex items-start gap-4">
                  {/* 이미지 */}
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary/10 to-primary-dark/10 flex items-center justify-center flex-shrink-0 overflow-hidden">
                    {type.icon && (
                      <img
                        src={`/assets/lti/${type.icon}`}
                        alt={type.name_ko}
                        className="w-full h-full object-contain"
                      />
                    )}
                  </div>

                  {/* 정보 */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-lg font-bold text-primary">
                        {type.code}
                      </span>
                    </div>
                    <h3 className="font-bold text-base mb-2 text-gray-900 leading-snug">
                      {type.name_ko}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed line-clamp-2">
                      {type.description_ko}
                    </p>
                  </div>
                </div>

                {/* 특징 태그들 */}
                <div className="flex flex-wrap gap-2 mt-3">
                  {type.traits.slice(0, 3).map((trait, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full"
                    >
                      {trait}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <BottomNav />
    </div>
  );
};

export default AllLtiTypes;
