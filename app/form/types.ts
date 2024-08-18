type TypeOf<T, K> = K extends keyof T ? T[K] : never

export type OnUpdate<T extends object> = <
  K extends keyof T,
  U extends TypeOf<T, K>
>(
  key: K,
  value: U
) => void
