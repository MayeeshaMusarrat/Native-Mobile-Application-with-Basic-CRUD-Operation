import { types } from 'mobx-state-tree';

const SignupModel = types.model('SignupModel', {
    username: types.string,
    email: types.string,
    password: types.string,
    loadingScreenAfterSignup: false
});

export default SignupModel;