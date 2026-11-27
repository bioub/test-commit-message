// update user handler v1
export function updateUser1(req, res) {
  if (!req.body || Object.keys(req.body).length === 0) {
    return res.status(400).json({ error: 'Empty payload' });
  }
  return res.json(save(req.params.id, req.body));
}

