import { createAction, props } from '@ngrx/store';
import { User } from '../../modules/account/models/user.model';

export const loadCurrentUser = createAction(
  '[USER] Load Current User',
  props<{ id: string }>(),
);

export const loadCurrentUserSuccess = createAction(
  '[USER] Load Current User Success',
  props<{ user: User }>(),
);

export const loadCurrentUserFail = createAction(
  '[USER] Load Current User Fail',
  props<{ error: string }>(),
);
