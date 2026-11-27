// step 1: baseline
export function countPositions1(entries) {
  return entries.reduce((acc, e) => acc + (e.positions?.length ?? 0), 0);
}

