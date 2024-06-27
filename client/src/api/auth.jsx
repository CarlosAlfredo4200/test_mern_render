import { ENV } from '../utils';

export class Auth {
    baseApi = ENV.BASE_API;

    async register(data) {
       
            const url = `${this.baseApi}/${ENV.API_ROUTES.REGISTER}`;
            const params = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email: data.email,
                    password: data.password,
                }),
            };

            const response = await fetch(url, params);
            const result = await response.json();

            if (!response.ok) throw result;

            return result;
        
    }
}