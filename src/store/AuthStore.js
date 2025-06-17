import { create } from 'zustand';


const useAuthStore = create((set) => {

  const token = localStorage.getItem('token');
  const email = localStorage.getItem('email'); 

  return {
    user: email ? { email } : null,
    token: token || null,
    loading: false,
    error: null,

    signIn: async (email, password) => {
      set({ loading: true, error: null });
      try {
        const response = await fetch('https://reqres.in/api/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'x-api-key': 'reqres-free-v1'

          },
          body: JSON.stringify({ email, password }),
        });

        if (!response.ok) {
          const data = await response.json();
          throw new Error(data.error || 'Login failed');
        }

        const data = await response.json();
        const token = data.token;

        set({
          user: { email },
          token,
          loading: false,
        });

        localStorage.setItem('token', token);
        localStorage.setItem('email', email); // حفظ الإيميل
      } catch (error) {
        set({
          error: error.message || 'Something went wrong',
          loading: false,
        });
      }
    },

    logout: () => {
      localStorage.removeItem('token');
      localStorage.removeItem('email');
      set({ user: null, token: null });
    },
  };
});

export default useAuthStore;
