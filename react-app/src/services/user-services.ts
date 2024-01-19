import apiClient from "./api-client";

export interface User {
    id: number;
    name: string;
  }

class UserService {
    getAllUsers() {
        const controller = new AbortController();
        const request =  apiClient // in the past was here axious
        .get<User[]>("/users", { // and the link was the full link
          signal: controller.signal,
        })
        return {request, cancel: () => controller.abort()}
    }
}

export default new UserService();