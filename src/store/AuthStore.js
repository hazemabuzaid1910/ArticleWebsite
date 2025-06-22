import { create } from 'zustand';


const useAuthStore = create((set) => {

  const token = localStorage.getItem('token');
  const email = localStorage.getItem('email'); 
  const isAuthenticated=localStorage.getItem('isAuthenticated');

  return {
    user: email ? { email } : null,
    token: token || null,
    loading: false,
    error: null,
    isAuthenticated: false,

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
       set({ isAuthenticated: true }),
       localStorage.setItem('isAuthenticated',true)
        localStorage.setItem('token', token);
        localStorage.setItem('email', email); 
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
        set({ isAuthenticated: false }),

      set({ user: null, token: null });
    },
  };
});

export default useAuthStore;
