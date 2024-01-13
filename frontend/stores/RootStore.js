import { types } from 'mobx-state-tree';
import SignupStore from './SignupStore';

const RootStore = types.model('RootStore', {
  signupStore: SignupStore,
});

const rootStore = RootStore.create({
  signupStore: {},
});

export default rootStore;
