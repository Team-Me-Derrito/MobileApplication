export const VALIDATION_ERRORS = {
    nameError: '',
    birthDayError: '',
    communityError: '',  
    genderError: '',  
    phoneError: '',
    emailError: '',
    passwordError: '',
    passwordConfirmError: ''
}

export const NAME_EMPTY_ERROR = 'Please enter your name';
export const BIRTHDAY_INVALID_ERROR = 'Please enter a valid birthday';
export const COMMUNITY_UNSELECTED_ERROR = 'Please select your community';
export const GENDER_UNSELECTED_ERROR = 'Please select your gender';
export const PHONE_INVALID_ERROR = 'Phone number must be 10 or less digits';
export const EMAIL_INVALID_ERROR = 'Please enter a valid email address';
export const PASSWORD_WEAK_ERROR = 'Password must meet the following criteria:\n' + 
                                    '- At least 6 characters long\n' + 
                                    '- Contain both alphabets and numbers\n' + 
                                    '- Include at least one capital letter\n' + 
                                    '- Include at least one lowercase letter';
export const PASSWORD_INCONSISTENT_ERROR = 'Passwords do not match - please check';
export const GENDERS_OPTIONS = [
    {key: 1, value: 'Male'},
    {key: 2, value: 'Female'},
    {key: 3, value: 'Other'},
    {key:4, value: 'Prefer not to say'}
  ];
