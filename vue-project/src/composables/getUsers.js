import { ref } from 'vue';

const getUsers = () => {
    const users = ref([])
    const error = ref(null);
    const loadUsers = async () => {
        try {
            let usersData = await fetch('https://jsonplaceholder.typicode.com/users')
            if (!usersData.ok) {
                throw Error('Data not loaded');
            }
            users.value = await usersData.json();
            console.log('Home page users:', users.value)
        } catch (err) {
            error.value = err.mesage;
            console.log('Error:', err)
        }
    }

    return { users, error, loadUsers };
}

export default getUsers;