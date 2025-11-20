import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from '@/components/layout';
import { Splash } from '@/components/common';
import { Home } from '@/pages/Home';
import { Match } from '@/pages/Match';
import { Chat } from '@/pages/Chat';
import { MyPage } from '@/pages/MyPage';
import { IdealTypeTest } from '@/pages/IdealTypeTest';


function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [isReady, setIsReady] = useState(false);
  const location = typeof window !== 'undefined' ? window.location : { pathname: '/' };

  // 이상형 테스트 경로에서는 splash를 건너뜀
  const isIdealTypeRoute =
    location.pathname.startsWith('/ideal-type-test') ||
    location.pathname.startsWith('/idealtype') ||
    location.pathname.startsWith('/ideal-type');

  useEffect(() => {
    const prepareApp = async () => {
      await new Promise(resolve => setTimeout(resolve, 500));
      setIsReady(true);
    };
    prepareApp();
  }, []);

  useEffect(() => {
    if (isIdealTypeRoute) {
      setShowSplash(false);
      return;
    }
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, [isIdealTypeRoute]);

  const handleSplashFinish = () => {
    if (isReady) {
      setShowSplash(false);
    }
  };

  if (showSplash && !isIdealTypeRoute) {
    return <Splash onFinish={handleSplashFinish} />;
  }

  if (!isReady) {
    return null;
  }

  return (
    <BrowserRouter>
      <Routes>
        {/* 레이아웃이 있는 페이지 */}
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/match" element={<Match />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/mypage" element={<MyPage />} />
        </Route>
        
        {/* 레이아웃이 없는 페이지 */}
        <Route path="/ideal-type-test" element={<IdealTypeTest />} />
        <Route path="/idealtype" element={<IdealTypeTest />} />
        <Route path="/ideal-type" element={<IdealTypeTest />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
