import Cookies from "js-cookie";

export default function createCookies(key: string, value: any): void {
  const expirationTime: Date = new Date(new Date().getTime() + 120000); // 120 seconds
  Cookies.set(key, value, { expires: expirationTime });
}