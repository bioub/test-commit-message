// refresh token handler v1
export function refreshToken1(token) {
  if (!token) throw new Error('Missing refresh token');
  return { accessToken: sign(token), expiresIn: 900 };
}

