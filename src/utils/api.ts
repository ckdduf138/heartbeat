// API 호출 유틸리티
export const apiClient = {
  async get<T>(url: string): Promise<T> {
    const response = await fetch(url);
    if (!response.ok) throw new Error('API 요청 실패');
    return response.json();
  },

  async post<T>(url: string, data: unknown): Promise<T> {
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    if (!response.ok) throw new Error('API 요청 실패');
    return response.json();
  },

  async put<T>(url: string, data: unknown): Promise<T> {
    const response = await fetch(url, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    if (!response.ok) throw new Error('API 요청 실패');
    return response.json();
  },

  async delete<T>(url: string): Promise<T> {
    const response = await fetch(url, { method: 'DELETE' });
    if (!response.ok) throw new Error('API 요청 실패');
    return response.json();
  },
};
