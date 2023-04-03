export interface authUserDataModel {
  name?: string;
  email: string;
  password: string;
  password_confirmation?: string;
}

export interface orders {
  type: string;
  level: string;
  max_scoure: number;
  time: number;
  lectures: string[];
}
