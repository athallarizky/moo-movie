export const text_truncate = (input) => input?.length >= 28 ? `${input.substring(0, 28)}...` : input;
