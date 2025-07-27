import { create } from 'zustand';


const token = localStorage.getItem('token');
const data = localStorage.getItem('data');
const useAuthStore = create((set) => ({

    user: data || null,
    token: token || null,
    loading: false,
    error: null,
    isAuthenticated: false,

    signIn: async(name, pass) => {
        set({ loading: true, error: null });

        try {
            const response = await fetch('https://tamkeen-dev.com/api/blogs-api?items_per_page=10&page=1', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, pass }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || 'Login failed');
            }

            const token = data.csrf_token;
            const logout_token = data.logout_token;
            const id = data.current_user.uid;
            console.log(data)
            localStorage.setItem('token', token);
            localStorage.setItem('username', name);
            localStorage.setItem('pass', pass);
            localStorage.setItem('logout_token', logout_token);
            localStorage.setItem('id', id);
            localStorage.setItem('data', data);
            console.log("uid", id)
            console.log(logout_token)

            set({
                user: { name },
                token,
                loading: false,
                isAuthenticated: true,
            });

        } catch (error) {
            set({
                error: error.message || 'Something went wrong',
                loading: false,
            });
        }
    },

    register: async({ name, mail, field_mobile, field_name, field_surname, field_gender, pass }) => {
        set({ loading: true, error: null });

        try {
            const response = await fetch('https://tamkeen-dev.com/api/user/register?_format=json', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: [{ value: name }],
                    mail: [{ value: mail }],
                    pass: [{ value: pass }],
                    field_mobile: [{ value: field_mobile }],
                    field_name: [{ value: field_name }],
                    field_surname: [{ value: field_surname }],
                    field_gender: [{ target_id: field_gender }],
                }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || 'Registration failed');
            }
            console.log(data);


            localStorage.setItem('username', name);
            localStorage.setItem('pass', pass);
            localStorage.setItem('data', data)

            set({
                user: { name },
                loading: false,
                isAuthenticated: true,
            });

        } catch (error) {
            set({
                error: error.message || 'Something went wrong',
                loading: false,
            });
        }
    },

    logout: async() => {
        set({ loading: true, error: null });

        try {
            const logout_token = localStorage.getItem('logout_token');

            console.log("Logout token from storage:", logout_token);

            const response = await fetch(`https://tamkeen-dev.com/api/user/logout?_format=json&token=${logout_token}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',

                },

            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || 'Logout failed');
            }

            console.log('✅ Logout success:', data);

            localStorage.clear();
            set({
                user: null,
                token: null,
                isAuthenticated: false,
                loading: false,
            });

        } catch (error) {
            console.error("Logout Error:", error.message);
            set({
                error: error.message || 'Something went wrong',
                loading: false,
            });
        }
    }
}));

export default useAuthStore;