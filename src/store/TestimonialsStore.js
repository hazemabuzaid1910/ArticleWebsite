import { create } from 'zustand';

const useTestimonials = create((set) => {
    // قراءة البيانات من localStorage وتحويلها إلى JSON
    const storedData = localStorage.getItem('testimonials');
    const parsedData = storedData ? JSON.parse(storedData) : null;

    return {
        data: parsedData,
        loading: false,
        error: null,

        getTestimonials: async() => {
            set({ loading: true, error: null });

            try {
                const response = await fetch('https://tamkeen-dev.com/api/testimonials', {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });

                if (!response.ok) {
                    const errorData = await response.json();
                    throw new Error(errorData.error || 'Failed to fetch testimonials');
                }

                const data = await response.json();
                console.log(data);

                // تخزين البيانات في localStorage كـ JSON
                localStorage.setItem('testimonials', JSON.stringify(data));

                set({
                    data: data || null,
                    loading: false,
                });

            } catch (error) {
                set({
                    error: error.message || 'Something went wrong',
                    loading: false,
                });
            }
        },
    };
});

export default useTestimonials;