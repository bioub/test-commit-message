// update user handler v1
export function updateUser1(req, res) {
  if (!req.body || Object.keys(req.body).length === 0) {
    return res.status(400).json({ error: 'Empty payload' });
  }
  return res.json(save(req.params.id, req.body));
}

// update user handler v2
export function updateUser2(req, res) {
  if (!req.body || Object.keys(req.body).length === 0) {
    return res.status(400).json({ error: 'Empty payload' });
  }
  return res.json(save(req.params.id, req.body));
}

// update user handler v3
export function updateUser3(req, res) {
  if (!req.body || Object.keys(req.body).length === 0) {
    return res.status(400).json({ error: 'Empty payload' });
  }
  return res.json(save(req.params.id, req.body));
}

// update user handler v4
export function updateUser4(req, res) {
  if (!req.body || Object.keys(req.body).length === 0) {
    return res.status(400).json({ error: 'Empty payload' });
  }
  return res.json(save(req.params.id, req.body));
}

