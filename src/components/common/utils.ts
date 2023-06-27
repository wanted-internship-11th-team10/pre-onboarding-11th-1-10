type RegType = 'email' | 'password';

const regs = {
  email: /.@./,
  password: /.[8,]/,
};

export function isValid(type: RegType, value: string) {
  return regs[type].test(value);
}
