import createCookieStore from "@solid-primitives/cookies-store";

import Auth as auth from './auth';
 
const storage = createCookieSessionStorage({
  cookie: {
    name: "session",
    secure: import.meta.env.PROD,
    secrets: [import.meta.env.VITE_SESSION_SECRET],
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 30, // 30 days
    httpOnly: true
  }
});

export async function getUser(request: Request): Promise<User | null> {
  const cookie = request.headers.get("Cookie") ?? ""
  const session = await storage.getSession(cookie);
  const userId = session.get("userId");
  if (!userId) return null;
  return await auth.getUser(userId);
}
