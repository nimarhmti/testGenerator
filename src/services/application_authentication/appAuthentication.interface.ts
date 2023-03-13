export interface authUserDataModel {
  name: string;
  email?: string;
  password: string;
  confirmPassword?: string;
}

export interface MODEL {
  user: authUserDataModel;
}
