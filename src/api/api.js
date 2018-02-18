export const fetchList = () => {
    return fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json());
} 