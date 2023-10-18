import { BIRTHDAY_INVALID_ERROR, COMMUNITY_UNSELECTED_ERROR, GENDER_UNSELECTED_ERROR, EMAIL_INVALID_ERROR, NAME_EMPTY_ERROR, PASSWORD_INCONSISTENT_ERROR, PASSWORD_WEAK_ERROR, PHONE_INVALID_ERROR, VALIDATION_ERRORS } from '../constants/SignupConst';
import Header from './Components/Header';
import Footer from './Components/Footer';
import React, { useState, useEffect } from 'react';
import { View, ScrollView, Text, TextInput, TouchableOpacity, StyleSheet, Button} from 'react-native';
import BlackButton from "./Components/BlackButton";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { SimpleLineIcons } from '@expo/vector-icons';
import { getInterestTypes } from '../API/Interest';
import { getCommunities } from '../API/Community';
import { SelectList, MultipleSelectList } from 'react-native-dropdown-select-list';
import { isValidEmail, isValidPhone, isStrongPassword, isPasswordConsistent, isValidBirthday } from '../Utilities/AccountUtils';
import { getAccount } from '../API/Account';


const EditProfileScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [birthday, setBirthday] = useState(new Date());
  const [communitySelected, setCommunitySelected] = useState(null);
  const [interestTypesSelected, setInterestTypesSelected] = useState([]);
  const [genderSelected, setGenderSelected] = useState('');
  const [validationErrors, setValidationErrors] = useState(VALIDATION_ERRORS);

  // Some states that will be updated when the page is loaded.
  const [communityAvailable, setCommunityAvailable] = useState([]);
  const [interestTypesAvailable, setInterestTypesAvailable] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const token = '5x6fqCxku0jhINhQYpAyuxEIDitf9Xf6s2BJQ2js';
      const id = 2;
      const accountInfo = await getAccount(token, id);
      console.log(`Account Info from server: ${JSON.stringify(accountInfo)}`);
      const communitiesJson = await getCommunities();
      const interestTypesJson = await getInterestTypes();

      const parsedCommunities = parseCommunityData(communitiesJson);
      const parsedInterestTypes = parseInterestsData(interestTypesJson);

      setCommunityAvailable(parsedCommunities);
      setInterestTypesAvailable(parsedInterestTypes);

      setCurrentAccountInfo(accountInfo, parsedCommunities, parsedInterestTypes);
    }

    fetchData();
  }, []); 

  /**
   * Set the current state of the account data
   * 
   * @param {string} accountInfo The account info in JSON format:
   * {        
   * "community": account.community.communityName,
   * "name": account.accountName,
   * "birthday": account.birthday,
   * "gender": account.gender,
   * "phoneNumber": account.phoneNumber,
   * "email": account.email,
   * "interests": interests ([{"interest": interest.interestType.interestType (interest type's name)}...])
   * }
   * @param {Array<JSON>} communities
   * @param {Array<JSON>} interestTypes
   */
  function setCurrentAccountInfo(accountInfo, communities, interestTypes) {
    if (typeof(accountInfo) !== "object") {
      throw TypeError(`Account info is in a wrong type: ${typeof(accountInfo)}`);
    }

    setName(accountInfo.name);
    setBirthday(new Date.parse(accountInfo.birthday));
    setNumber(accountInfo.phoneNumber);
    setEmail(accountInfo.email);
    const communityCurrent = communities.find(community => community.value === accountInfo.community);
    if (!communityCurrent) {
      throw Error(`Cannot find community with the value ${accountInfo.community}`);
    }
    
    setCommunitySelected(communityCurrent.key);
    
    const usersInterests = accountInfo.interests.map(interest => interest.interest);
    var interestsKeysCurrent = [];
    interestTypes.foreach((interest) => {
      if (interest.value in usersInterests) interestsKeysCurrent.append(interest.key);
    });

    setInterestTypesSelected(interestsKeysCurrent);
  }

  /**
   * Parses the json response containing community info from the server to be displayed in the select list form
   * 
   * @param {*} json - Json response from the server
   * @returns Parsed list of community information
   */
  function parseCommunityData(json) {
    const communities = json.communities;
    return communities.map(community => ({key: community.community_id, value: community.community_name}));
  }

  /**
   * Parses the json response containing interest types info from the server to be displayed in the select list form
   * 
   * @param {*} json - Json response from the server
   * @returns Parsed list of interest types information
   */
  function parseInterestsData(json) {
    const interestTypes = json.interests;
    return interestTypes.map(interest => ({key: interest.interest_id, value: interest.interest}));
  }

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    setBirthday(date);
    hideDatePicker();
  };

  /**
   * Validates user's inputs for signup process
   * 
   * @returns bool - if the inputs meet all criteria or not
   */
  const validateInputs = () => {
    const nameErrorText = (name.length > 0) ? '' : NAME_EMPTY_ERROR;
    const birthdayErrorText = isValidBirthday(birthday) ? '' : BIRTHDAY_INVALID_ERROR;
    const communityErrorText = communitySelected ? '' : COMMUNITY_UNSELECTED_ERROR;
    const genderErrorText = genderSelected ? '' : GENDER_UNSELECTED_ERROR;
    const phoneErrorText = isValidPhone(number) ? '' : PHONE_INVALID_ERROR;
    const emailErrorText = isValidEmail(email) ? '' : EMAIL_INVALID_ERROR;
    const passwordErrorText = isStrongPassword(password) ? '' : PASSWORD_WEAK_ERROR;
    const passwordConfirmErrorText = isPasswordConsistent(password, passwordConfirm) ? '' : PASSWORD_INCONSISTENT_ERROR;


    const validationErrorsUpdated = {
      nameError: nameErrorText,
      birthDayError: birthdayErrorText,
      communityError: communityErrorText,  
      genderError: genderErrorText,  
      phoneError: phoneErrorText, 
      emailError: emailErrorText,
      passwordError: passwordErrorText,
      passwordConfirmError: passwordConfirmErrorText
    }

    setValidationErrors(validationErrorsUpdated);

    const allCriteriaMet = Object.values(validationErrorsUpdated).every(errorText => errorText === '');
    return allCriteriaMet;
  };

  /**
   * handles signup process. 
   * It sends the request to the server to create a new account when the user inputs match the criteria.
   * When the account creation is successful, it navigates to the homepage.
   */
  async function handleSignup() {
    if (validateInputs()) {
      const response = await createAccount(communitySelected,
      name, 
      interestTypesSelected, 
      birthday, 
      genderSelected, 
      number, 
      email, 
      password); 

      console.log(JSON.stringify(response));
  
      if (response.success) {
        navigation.navigate('Homepage');
      }
    } 
};

  return (
    
  <View style={styles.showContainer}>

    <View>
        <View style={styles.row}>
          <Header text="Edit Profile" />
        </View>    
    </View>
    
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>

        <TextInput
          style={styles.input}
          placeholder="Name"
          onChangeText={text => setName(text)}
          value={name}
        />
        <Text style={styles.errorText}>{validationErrors.nameError}</Text>

        <View style={styles.dateInputContainer}>
          <TextInput
            style={[styles.input, styles.dateInput]}
            value={birthday.toLocaleDateString()}
            editable={false} // makes the text input non-editable
          />
          <SimpleLineIcons 
            name="event" 
            size={24} 
            color="black" 
            onPress={showDatePicker} 
            style={styles.dateIcon}
          />
        </View>

        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
          textColor="#000"
          maximumDate={new Date()} //Input is no later than the current date
        />
        <Text style={styles.errorText}>{validationErrors.birthDayError}</Text>
        
        <View style={{width:'90%'}}>
          <Text>Community:</Text>
          <SelectList 
            setSelected={(val) => setCommunitySelected(val)} 
            data={communityAvailable} 
            save="key"
          />
        </View>
        <Text style={styles.errorText}>{validationErrors.communityError}</Text>

        <View style={{width:'90%'}}>
          <Text>Interests:</Text>
          <MultipleSelectList 
            setSelected={(val) => setInterestTypesSelected(val)} 
            data={interestTypesAvailable} 
            save="key"
            label="Your Interest" 
          />  
        </View>

        <View style={{width:'90%'}}>
          <Text>Gender:</Text>
          <SelectList 
            setSelected={(val) => setGenderSelected(val)} 
            data={
              [
                {key: 1, value: 'Male'},
                {key: 2, value: 'Female'},
                {key: 3, value: 'Other'},
                {key:4, value: 'Prefer not to say'}
              ]
            } 
            save="value"
            label="Your gender" 
          />  
        </View>
        <Text style={styles.errorText}>{validationErrors.genderError}</Text>

        <TextInput
          style={styles.input}
          placeholder="Phone Number"
          onChangeText={text => setNumber(text)}
          keyboardType="numeric"
          value={number}
          maxLength={10}
        />
        <Text style={styles.errorText}>{validationErrors.phoneError}</Text>

        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={text => setEmail(text)}
          value={email}
        />
        <Text style={styles.errorText}>{validationErrors.emailError}</Text>

        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          onChangeText={text => setPassword(text)}
          value={password}
        />
        <Text style={styles.errorText}>{validationErrors.passwordError}</Text>

        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          secureTextEntry
          onChangeText={text => setPasswordConfirm(text)}
          value={passwordConfirm}
        />
        <Text style={styles.errorText}>{validationErrors.passwordConfirmError}</Text>

      </ScrollView>

      <View style={styles.bottomContainer}>
        <View style={styles.buttonContainer}>
          <BlackButton onPress={handleSignup} text="Create" borderRadius={2} />
        </View>
      </View>

    </View>

    <View style={styles.row}>
      <Footer />
    </View>

  </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  topContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dateInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'gray',
    width: 300,
    height: 40,
    marginBottom: 20,
  },
  dateInput: {
    flex: 1,
    padding: 10,
  },
  dateIcon: {
    padding: 10,
    borderLeftWidth: 1,
    borderColor: 'gray',
  },  bottom: {
      flex: 1, // Ensure it takes up the remaining space
      justifyContent: 'flex-end', // Push content to the bottom
  },

  row: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent:'center',
  },
  showContainer: {
      flex: 1
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    marginTop: 20,
  },
  separator: {
    height: 1,
    marginBottom: 20,
  },
  input: {
    width: 300,
    height: 40,
    padding: 10,
    borderWidth: 1,
    borderColor: 'gray',
    marginBottom: 20,
  },
  button: {
    padding: 10,
    width: 300,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
  inputLikes: {
    width: 300,
    height: 100,
    padding: 10,
    borderWidth: 1,
    borderColor: 'gray',
    marginBottom: 20,
  },
  dateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomContainer: {
    justifyContent: 'flex-end',
  },
  buttonContainer: {
    marginBottom: 40,
  },
  bottomTextContainer: {
    flexDirection: 'row',
    bottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomText: {
    fontSize: 12,
    color: 'gray',
    marginHorizontal: 40,
  },
  hyperlinkText: {
    fontSize: 12,
    color: 'blue',
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
});

export default EditProfileScreen;
