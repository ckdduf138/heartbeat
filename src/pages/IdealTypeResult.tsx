import { useLocation, useNavigate } from 'react-router-dom';
import { Header } from '@/components/layout/Header';
import { BottomNav } from '@/components/layout/BottomNav';
import { Button } from '@/components/common/Button';
import { ltiData } from '@/data/ltiData';

const IdealTypeResult: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();


  // Get result code from query string
  const searchParams = new URLSearchParams(location.search);
  const resultCode = searchParams.get('result');
  const resultData = resultCode
    ? ltiData.lti_types.find(item => item.code === resultCode)
    : null;

  return (
    <div className="min-h-screen bg-gray-50 animate-fade-in relative">
      <Header title="테스트 결과" />
      <div className="pt-14 pb-20 px-4">
        <div className="max-w-md mx-auto pt-6 animate-slide-up">
          {/* 결과 카드 */}
          <div className="card mb-6 bg-gradient-to-br from-primary to-primary-dark text-white border-0">
            <div className="text-center py-8">
              <div className="text-7xl mb-4">{resultData?.emoji ?? '💖'}</div>
              <div className="text-3xl font-bold mb-2">{resultData?.code}</div>
              <h2 className="text-2xl font-bold mb-4">{resultData?.name_ko?.replace(/^[^\w가-힣]+\s*/, '')}</h2>
              <p className="text-white/90 text-base leading-relaxed">
                {resultData?.description_ko}
              </p>
            </div>
          </div>

          {/* 특징 */}
          <div className="card mb-6">
            <h3 className="font-bold text-lg mb-4 text-gray-900">
              당신이 원하는 이상형의 특징
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {Array.isArray(resultData?.traits) && resultData.traits.map((trait: string, index: number) => (
                <div
                  key={index}
                  className="px-4 py-3 bg-gray-50 rounded-xl text-center font-medium text-gray-700"
                >
                  {trait}
                </div>
              ))}
            </div>
          </div>

          {/* 버튼들 */}
          <div className="space-y-3">
            <Button
              variant="primary"
              fullWidth
              onClick={() => navigate('/match ')}
            >
              이상형 찾으러 가기
            </Button>
          </div>
        </div>
      </div>
      <BottomNav />
    </div>
  );
};

export default IdealTypeResult;
