import z from 'zod';

export const registerDataSchema = z.object({
  cardNumber: z.string().min(16, { message: 'Ingresa los 16 digitos de tu tarjeta' }),
  expirationDate: z.string().min(4, { message: 'Ingresa la fecha de expedición' }),
  cvv: z.string().min(3, { message: 'Ingresa el CVV de tu tarjeta' }),
  cardHolder: z.string().min(1, { message: 'Ingresa el nombre del titular' }),
  name: z.string().min(1, { message: 'Ingresa el nombre' }),
  adress: z.string().min(1, { message: 'Ingresa la dirección' }),
  phone: z.string().min(1, { message: 'Ingresa el telefono' }),
  city: z.string().min(1, { message: 'Ingresa la ciudad' }),
});

export type RegisterData = z.infer<typeof registerDataSchema>;
