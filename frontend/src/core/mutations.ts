export const API_BASE = "http://localhost:8888";

export const withBody = (
  body: string | object | boolean | number | null,
  method = "POST"
): RequestInit => {
  return {
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
    credentials: "include",
    method,
  };
};

export const fetcher = <T>(
  url: string,
  options?: RequestInit
): Promise<T | null> => {
  return fetch(API_BASE + url, {
    ...options,
    credentials: "include",
  }).then(async (res) => {
    if (res.status !== 200) {
      throw new Error(res.status.toString());
    }
    try {
      return await res.json();
    } catch (e) {
      return null;
    }
  });
};
