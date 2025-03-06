/**
 * Validates if the input string follows the YYYY-YY format.
 * @param input - The string to validate.
 * @returns {boolean} - True if the input is valid, false otherwise.
 */
export function validateYearRange(input: string): boolean {
	const yearRangeRegex = /^\d{4}-\d{2}$/;
	return yearRangeRegex.test(input);
}

/**
 * Validates if the input string is a valid email address.
 * @param input - The string to validate.
 * @returns {boolean} - True if the input is a valid email, false otherwise.
 */
export function validateEmail(input: string): boolean {
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	return emailRegex.test(input);
}

// Helper function to check if there are any errors
export function hasErrors(errors: Record<string, string>): boolean {
	return Object.values(errors).some((error) => error !== '');
}

export const errorMsgs = {
	sessionYear: 'Please enter a valid year range in the format YYYY-YY (e.g., 2019-20).',
	email: 'Please enter a valid mail. e.g. user@domain.com'
};
