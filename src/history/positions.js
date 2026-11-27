// step 1: baseline
export function countPositions1(entries) {
  return entries.reduce((acc, e) => acc + (e.positions?.length ?? 0), 0);
}

// step 2: robot avant
export function countPositions2(entries) {
  return entries.reduce((acc, e) => acc + (e.positions?.length ?? 0), 0);
}

// step 3: robot apres
export function countPositions3(entries) {
  return entries.reduce((acc, e) => acc + (e.positions?.length ?? 0), 0);
}

// step 4: robot fin
export function countPositions4(entries) {
  return entries.reduce((acc, e) => acc + (e.positions?.length ?? 0), 0);
}

// step 5: type scope
export function countPositions5(entries) {
  return entries.reduce((acc, e) => acc + (e.positions?.length ?? 0), 0);
}

