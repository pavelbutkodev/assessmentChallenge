export interface IState {
  aVar: boolean,
  bVar: boolean,
  cVar: boolean,
  dVar: number,
  eVar: number,
  fVar: number,
}

export type Key = 'aVar' | 'bVar' | 'cVar' | 'dVar' | 'eVar' | 'fVar'

export interface IStateSetter {
  key: Key,
  item: number | boolean,
}

export interface IMockInt {
  name: Key,
  value: number,
  id: number,
}

export interface IMockBoolean {
  name: Key,
  value: boolean,
  id: number,
}
