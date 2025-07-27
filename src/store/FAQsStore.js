import { create } from 'zustand'

const useFAQs = create((set) => {
    const data=localStorage.getItem('data');
    return {
        data:data || null,
        getFAQs: async() => {
            try {
                const response = await fetch("https://tamkeen-dev.com/api/faq-list", {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },

                });
                if (!response.ok) {
                    const data = await response.json();
                    throw new Error(data.error || ' ');
                }
                  

                const data = await response.json();
                console.log(data);
                localStorage.setItem('data', data);
                set({
                    data:data || null
                })
            } catch (error) {
                set({
                    error: error.message || 'Something went wrong',
                    loading: false,
                });
            }
        },
    }
});
export default useFAQs;