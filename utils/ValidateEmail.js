import zod from 'zod';

export function ValidateEmail(email) {
    const emailFormat = zod.string().email();
    return emailFormat.safeParse(email);
}