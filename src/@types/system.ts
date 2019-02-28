export interface ValidatorState {
  validateStatus: 'success' | 'warning' | 'error' | 'validating' | undefined,
  help: string | undefined,
  value: string | undefined
}
