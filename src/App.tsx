import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Layout } from '@/components/layout';
import { Splash } from '@/components/common';
import { Home } from '@/pages/Home';
import { Match } from '@/pages/Match';
import { Chat } from '@/pages/Chat';
import { MyPage } from '@/pages/MyPage';
import { IdealTypeTest } from '@/pages/IdealTypeTest';
import IdealTypeResult from '@/pages/IdealTypeResult';


function InnerApp() {
  const location = useLocation();
  const [isReady, setIsReady] = useState(false);

  // splash는 / 경로에서만 보임
  const isSplashRoute = location.pathname === '/';
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

  // NOTE: 이미지 프리로드는 Splash에서만 수행하도록 변경했습니다.

  useEffect(() => {
    if (isIdealTypeRoute) {
      return;
    }
    if (isSplashRoute) {
      const timer = setTimeout(() => {
        window.history.pushState({}, '', '/home');
        window.dispatchEvent(new PopStateEvent('popstate'));
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [isIdealTypeRoute, isSplashRoute]);

  if (!isReady) {
    return null;
  }

  return (
    <Routes>
      <Route path="/" element={<Splash />} />
      {/* 레이아웃이 있는 페이지 */}
      <Route element={<Layout />}>
        <Route path="/home" element={<Home />} />
        <Route path="/match" element={<Match />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/mypage" element={<MyPage />} />
      </Route>
      {/* 레이아웃이 없는 페이지 */}
      <Route path="/ideal-type-test" element={<IdealTypeTest />} />
      <Route path="/idealtype" element={<IdealTypeTest />} />
      <Route path="/ideal-type" element={<IdealTypeTest />} />
      <Route path="/idealTypeResult" element={<IdealTypeResult />} />
    </Routes>
  );
}

function App() {
  return (
    <BrowserRouter>
      <InnerApp />
    </BrowserRouter>
  );
}

export default App;
