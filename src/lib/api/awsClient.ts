export const AWS_API_BASE = process.env.NEXT_PUBLIC_AWS_API_BASE_URL!;

/**
 * Calls your AWS API Gateway endpoint
 * Example: POST https://xxxx.execute-api.us-west-2.amazonaws.com/analyze
 */
export async function callAWS<T>(
  path: string,
  method: "GET" | "POST" = "GET",
  body?: any,
): Promise<T> {
  const url = `${AWS_API_BASE}${path}`;

  const res = await fetch(url, {
    method,
    headers: {
      "Content-Type": "application/json",
    },
    body: body ? JSON.stringify(body) : undefined,
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`AWS API Error ${res.status}: ${text}`);
  }

  return res.json();
}
