export function validateEmail(email) {
    // Regular expression for email validation
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
}

export function validatePhone(phone) {
    //Checks if the phone number consists of 10 digits numbers
    return /^[1-9][0-9]{9}$/.test(phone);
}
  
export function validatePassword(password, passwordConfirm) {
    return ((password.length !== 0) && (password === passwordConfirm));
}
