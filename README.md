React-native project with MongoDB Atlas Cloud Database

File hierarchy explained: 

1. Backend 
     -> middleware
          -> jwt token verification and extract payload
     -> models
          -> contains mongoose schema
     -> routes
          -> contains backend APIs
     -> utils
          -> contains function modules such as hash generating module, verification module etc.

2. Frontend
     -> reducers
          -> redux functions for state managemnet
     -> components 
          -> contains re-usable UI components
     -> screens
          -> contain primary UI stacks