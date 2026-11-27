// refresh token handler v1
export function refreshToken1(token) {
  if (!token) throw new Error('Missing refresh token');
  return { accessToken: sign(token), expiresIn: 900 };
}

// refresh token handler v2
export function refreshToken2(token) {
  if (!token) throw new Error('Missing refresh token');
  return { accessToken: sign(token), expiresIn: 900 };
}

// refresh token handler v3
export function refreshToken3(token) {
  if (!token) throw new Error('Missing refresh token');
  return { accessToken: sign(token), expiresIn: 900 };
}

