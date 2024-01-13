import { flow, setLivelinessChecking } from 'mobx-state-tree';

const SignupActions = (self) => ({

    /*  Here are some functions for variable changes, and a toggle function to show loading screen */
    setUsername(username) 
    {
      self.username = username;
    },
    setEmail(email) 
    {
      self.email = email;
    },
    setPassword(password) 
    {
      self.password = password;
    },
    toggleLoadingScreen() 
    {
      self.loadingScreenAfterSignup = !self.loadingScreenAfterSignup;
    },

/*  Here is the actual API call  */
    signup: flow(function* () {
      try 
      {
        self.toggleLoadingScreen(); 
  
        const response = yield fetch('http://192.168.0.106:5000/signup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            username: self.username,
            email: self.email,
            password: self.password,
          }),
        });
  
        const signupData = yield response.json();
        console.log('Signup response inside mobx: ', signupData);
        yield new Promise((resolve) => setTimeout(resolve, 2000));

        //TODO: Create a navigation utility class for navigating to Thank-You screen

      } 
      catch (error) 
      {
        console.error('Error during Sign-up: ', error);
      } 
      finally 
      {
        self.toggleLoadingScreen(); 
      }
    }),
  });

export default SignupActions;