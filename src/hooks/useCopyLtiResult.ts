import { useLocalAnswers } from '@/hooks/useLocalAnswers';
import { questions } from '@/data/questions';

export function useCopyLtiResult() {
  const { getLtiInfo } = useLocalAnswers();

  const copyLtiResult = async () => {
    // 빌드할 결과 문자열
    const ltiInfo = getLtiInfo();
    const now = new Date();
    const pad = (n: number) => n.toString().padStart(2, '0');
    const dateStr = `${now.getFullYear()}.${pad(now.getMonth() + 1)}.${pad(now.getDate())}. ${pad(now.getHours())}시 ${pad(now.getMinutes())}분`;
    let result = `${dateStr}\nLTI: ${ltiInfo?.ltiType || ''}\n`;
    if (ltiInfo && Array.isArray(ltiInfo.answers)) {
      questions.forEach((q, idx) => {
        result += `\n${q.question}\n답: `;
        const selectedIdx = ltiInfo.answers[idx];
        const selectedOpt = q.options[selectedIdx - 1];
        const answerText = selectedOpt ? `${selectedOpt.text}` : '';
        result += answerText + '\n';
      });
    }
    // 복사: navigator.clipboard 우선, 실패 시 textarea+execCommand 폴백 사용
    const copyText = async (text: string) => {
      // 우선 modern clipboard API
      try {
        if (navigator.clipboard && typeof navigator.clipboard.writeText === 'function') {
          await navigator.clipboard.writeText(text);
          return true;
        }
      } catch (e) {
        // ignore and fallback
      }

      // 폴백: textarea + execCommand
      try {
        const textarea = document.createElement('textarea');
        // iOS에서 복사 가능하도록 textarea 스타일 설정
        textarea.value = text;
        // move element out of viewport
        textarea.style.position = 'fixed';
        textarea.style.left = '-9999px';
        textarea.style.top = '0';
        document.body.appendChild(textarea);
        textarea.focus();
        textarea.select();
        textarea.setSelectionRange(0, textarea.value.length);
        const successful = document.execCommand('copy');
        document.body.removeChild(textarea);
        return successful;
      } catch (e) {
        return false;
      }
    };

    const ok = await copyText(result.trim());
    if (!ok) {
      try { navigator.clipboard.writeText(result.trim()); } catch {};
    }
  };
  return { copyLtiResult };
}
