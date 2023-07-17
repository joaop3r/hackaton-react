export const api = {
    getAllPosts: async ()=>{
        let response = await fetch('https://jsonplaceholder.typicode.com/posts');
        let json = await response.json();
        return json;
    },
    addNewPost: async (title: string, body: string, userId: number)=>{
        let response = await fetch("https://jsonplaceholder.typicode.com/posts",{
            method: 'POST',
            body: JSON.stringify({ title, body, userId }),
            headers:{'Content-Type': 'aplication/json' }
        });
        let json = await response.json();
        return json;
    }
}