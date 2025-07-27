import { create } from "zustand";

const useBlogListStore = create((set) => {
    set({ loading: true })
    const listblog = localStorage.getItem('listblog')
   const article=  localStorage.getItem('article');
    const tags=  localStorage.getItem('tags');


    return {
        listblog: listblog,
        articleDetailes:article,
        tags:tags,
        getBlogList: async() => {
            const pass = localStorage.getItem('pass');
            const Username = localStorage.getItem('username');
            console.log("password :", pass, "username :", Username)
            const credentials = btoa(`${Username}:${pass}`);
            try {
                const response = await fetch('https://tamkeen-dev.com/api/blogs-api', {
                    method: 'GET',
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
                localStorage.setItem('listblog', jsonData);
                console.log(jsonData?.rows)
                set({
                    listblog: jsonData,
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

      getArticleDetailes: async(id) => {
            const pass = localStorage.getItem('pass');
            const Username = localStorage.getItem('username');
            console.log("password :", pass, "username :", Username)
            const credentials = btoa(`${Username}:${pass}`);
            try {
                const response = await fetch(`https://tamkeen-dev.com/api/node/${id}?_format=json`, {
                    method: 'GET',
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
                localStorage.setItem('article', jsonData);
                console.log(jsonData)
                set({
                    articleDetailes: jsonData,
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
 getTags: async() => {
            const pass = localStorage.getItem('pass');
            const Username = localStorage.getItem('username');
            console.log("password :", pass, "username :", Username)
            try {
                const response = await fetch('https://tamkeen-dev.com/api/terms/tags', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        
                    }
                })
                if (!response.ok) {
                    const errData = await response.json();
                    throw new Error(errData.message || 'Request failed');
                }

                const jsonData = await response.json();
                localStorage.setItem('tags', jsonData);
                
                set({
                    tags: jsonData,
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
    }

})
export default useBlogListStore;