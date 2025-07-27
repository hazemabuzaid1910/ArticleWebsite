import { create } from 'zustand';

const useUSerList = create((set) => {
    const data = localStorage.getItem('data');
        const userdata = localStorage.getItem('userdata');


    return {
        data: data || null,
        userdata:userdata || null,
        error: null,
        loading: false,

        getUsers: async() => {
            const pass = localStorage.getItem('pass');
            const Username = localStorage.getItem('username');
            console.log("password :", pass, "username :", Username)
            const credentials = btoa(`${Username}:${pass}`); // Basic Auth

            try {
                set({ loading: true });

                const response = await fetch('https://tamkeen-dev.com/api/users-list?_format=json&name=&field_name=&mail&field_gender=10&status=1&field_surname=', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Basic ${credentials}`,
                    }
                });

                if (!response.ok) {
                    const errData = await response.json();
                    throw new Error(errData.message || 'Request failed');
                }

                const jsonData = await response.json();
                console.log(data)
                localStorage.setItem('data', JSON.stringify(jsonData));
                set({
                    data: jsonData,
                    loading: false,
                    error: null,
                });

            } catch (error) {
                set({
                    error: error.message || 'Something went wrong',
                    loading: false,
                });
            }
        },
        getUser:async(id)=>{
            const pass = localStorage.getItem('pass');
            const Username = localStorage.getItem('username');
            console.log("password :", pass, "username :", Username)
            const credentials = btoa(`${Username}:${pass}`); 
            try{
            set({loading:true});
            const response=await fetch(`https://tamkeen-dev.com/api/user/${id}?_format=json`,{
            method:'GET',
            headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Basic ${credentials}`,
                    }
            })
            
                if (!response.ok) {
                    const errData = await response.json();
                    throw new Error(errData.message || 'Request failed');
                }

                const jsonData = await response.json();
                console.log(data)
                localStorage.setItem('userdata', JSON.stringify(jsonData));
                set({
                    userdata: jsonData,
                    loading: false,
                    error: null,
                });
            }
            catch(error){
             set({
                    error: error.message || 'Something went wrong',
                    loading: false,
                });
            }
        }
    };
});

export default useUSerList;