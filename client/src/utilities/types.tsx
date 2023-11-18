
export interface UserData {
  username: string, 
  password: string, 
  image: string,
  _id: string,
};

export interface ApiResponse {
  success: boolean,
  user: UserData,
  accessToken: string,
  msg: string,
  error: string,
};
