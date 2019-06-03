import { combineReducers } from 'redux';
import { authReducer } from './src/auth';
import { userReducer } from './src/user';
import { repositoryReducer } from './src/repository';
import { organizationReducer } from './src/organization';
import { issueReducer } from './src/issue';
import { notificationsReducer } from './src/notifications';
import { entities, pagination } from './src/api/reducers';

export const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  repository: repositoryReducer,
  organization: organizationReducer,
  issue: issueReducer,
  notifications: notificationsReducer,
  entities,
  pagination,
});
