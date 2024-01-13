import { setLivelinessChecking, types } from 'mobx-state-tree';
import SignupModel from '../models/SignupModel';
import SignupActions from '../Actions/SignupActions';

//Stores combine the models and actions
const SignupStore = types.compose(SignupModel, SignupActions )

export default SignupStore;