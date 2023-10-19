# MobileApplication
React-Native mobile application

# Technologies
React native using expo as the build tool

# Dependencies and starting guide
Need to have node.js installed: https://nodejs.org/en/download<br><br>
Install the Expo Go app on your smart device (Mobile phone) or device emulator<br>
After installed node.js open the cloned Team-Me-Derrito/MobileApplication repository and navigate to communityApp subfolder. Run the following commands in a terminal:<br>
```npm install -g expo-cli```<br>
```npm install```<br>
```npx expo start``` <br>
This has now started a development server. Ensure that your device running the development server and device running the Expo Go app are on the same network (Preferably the same local network at home). Open the device running Expo Go and open scan QR code option and scan the QR code in the terminal of the development server. Now the Expo Go is running an instance of the App. Now please refer to the MEDOPY readme for instructions for starting the back-end. Once those steps are complete open the MobileApplication/communityApp/constants/Database.js file and change the server IP and port address. Now the mobile should be able to communicate with the back-end server. The server and the device running Expo Go and device running Expo development server should be on the same network of the back-end should have an accessible IP. 

