export interface authUserDataModel {
  name: string;
  email?: string;
  password: string;
  password_confirmation?: string;
}

export interface MODEL {
  user: authUserDataModel;
}
