React-native project with MongoDB Atlas Cloud Database

File hierarchy explained: 

**1. Backend** <br>
     <kbd> 1.1 middleware <br> </kbd>
         <kbd></kbd> <kbd></kbd> * jwt token verification and extract payload <br>
    <kbd> 1.2 models <br>
         <kbd></kbd> <kbd></kbd> * contains mongoose schema <br>
     1.3 routes <br>
          * contains backend APIs <br>
     1.4 utils <br>
          * contains function modules such as hash generating module, verification module etc.<br>
<br>
**2. Frontend** <br>
      1.1 reducers <br>
          * redux functions for state managemnet<br>
      1.2 components <br>
          * contains re-usable UI components<br>
      1.3 screens<br>
          * contain primary UI stacks<br>