/**
 * Checks if the given email address is valid
 * 
 * @param {string} email - email address to check
 * @returns bool - result of validation
 */
export function isValidEmail(email) {
    // Regular expression for email validation
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
}

/**
 * Checks if the given phone number is valid
 * 
 * @param {string} phone - phone number to check
 * @returns bool - result of validation
 */
export function isValidPhone(phone) {
    //Checks if the phone number consists of 10 digits numbers
    return /^[1-9][0-9]{9}$/.test(phone);
}
  
/**
 * Checks if the given password's strength
 * 
 * @param {*} password - password to check
 * @returns bool - result of validation
 */
export function isStrongPassword(password) {
  // At least 6 characters
  const lengthCheck = password.length >= 6;

  // Contains both alphabets and numbers
  const alphaNumericCheck = /[a-zA-Z]/.test(password) && /[0-9]/.test(password);

  // Contains at least one capital letter
  const capitalLetterCheck = /[A-Z]/.test(password);

  // Contains at least one lowercase letter
  const lowerLetterCheck = /[a-z]/.test(password);

  return lengthCheck && alphaNumericCheck && capitalLetterCheck && lowerLetterCheck;
}

/**
 * Checks if the given password and the passwordConfirm value are equal
 * 
 * @param {*} password - password input
 * @param {*} passwordConfirm - password confirmation input
 * @returns bool - result of validation
 */
export function isPasswordConsistent(password, passwordConfirm) {
    return password === passwordConfirm;
}

/**
 * Checks if the given birthday is valid
 * 
 * @param {Date} inputDate - user's Date input
 * @returns bool - result of validation
 */
export function isValidBirthday(inputDate) {
    const currentDate = new Date();
    //Make sure it only compares the date, not the time
    currentDate.setHours(0, 0, 0, 0); 
    inputDate.setHours(0, 0, 0, 0);
    return inputDate.getTime() <= currentDate.getTime();
}