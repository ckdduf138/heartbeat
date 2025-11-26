import { useLocalAnswers } from '@/hooks/useLocalAnswers';
import { questions } from '@/data/questions';

export function useCopyLtiResult() {
  const { getLtiInfo } = useLocalAnswers();

  const copyLtiResult = async () => {
    // 항상 최신 결과만 복사: 클립보드 초기화 후 복사
    try {
      await navigator.clipboard.writeText('');
    } catch {}
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
    await navigator.clipboard.writeText(result.trim());
  };
  return { copyLtiResult };
}
