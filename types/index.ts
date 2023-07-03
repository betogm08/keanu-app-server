export type Option = 'y' | 'g';

export type KeanuOptions = {
    width: number,
    height?: number,
    option?: Option
}

export const enum ERROR_TYPES {
    BAD_USER_INPUT = 'BAD_USER_INPUT',
    BAD_REQUEST = 'BAD_REQUEST'
}