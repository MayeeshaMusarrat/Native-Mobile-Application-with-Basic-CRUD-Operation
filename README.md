React-native project with MongoDB Atlas Cloud Database

File hierarchy explained: 

**1. Backend** <br>
     <kbd>&nbsp;&nbsp;&nbsp;&nbsp;</kbd> 1.1 middleware <br>
          * jwt token verification and extract payload <br>
     1.2 models <br>
          * contains mongoose schema <br>
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