import { useCallback } from 'react';

const LOCAL_KEY = 'lti_answers';

export interface LocalLtiInfo {
  ltiType: string;
  answers: number[];
}

export function useLocalAnswers() {
  // 저장
  const saveLtiInfo = useCallback((info: LocalLtiInfo) => {
    try {
      localStorage.setItem(LOCAL_KEY, JSON.stringify(info));
    } catch (e) {
      // ignore
    }
  }, []);

  // 불러오기
  const getLtiInfo = useCallback((): LocalLtiInfo | null => {
    try {
      const raw = localStorage.getItem(LOCAL_KEY);
      return raw ? JSON.parse(raw) : null;
    } catch (e) {
      return null;
    }
  }, []);

  // 삭제
  const clearLtiInfo = useCallback(() => {
    try {
      localStorage.removeItem(LOCAL_KEY);
    } catch (e) {
      // ignore
    }
  }, []);

  return { saveLtiInfo, getLtiInfo, clearLtiInfo };
}
