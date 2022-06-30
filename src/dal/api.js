import * as axios from 'axios';

const instance = axios.create({
    baseURL: 'https://frontend-test-assignment-api.abz.agency/api/v1/',
})

export const usersAPI = {
    getUsers(page, count) {
        return instance.get(`users?page=${page}&count=${count}`);
    },
}

export const signupAPI = {
    getToken() {
        return instance.get('token');
    },
    getPositions() {
        return instance.get(`positions`);
    },
    signUp(name, email, phone, position_id, photo) {
        const formData = new FormData();
        formData.append('photo', photo);
        formData.append('name', name);
        formData.append('email', email);
        formData.append('phone', phone);
        formData.append('position_id', position_id);

        return instance.post('users', formData,
            {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Token': `eyJpdiI6Ik82NGRiNXFoXC92WHN1NlJDVUxNNFhBPT0iLCJ2YWx1ZSI6IlZSSjBzSVVSV2xHcDR6b21WbU54cDdXUVBIUGJpXC9GQ1ViR01xYWRUTXcyWjYwRm1Sc1hMbHZTbEl3OHVnTDZ5eXlxXC95aXV0bjFFM2l2RVBXVVBzZmc9PSIsIm1hYyI6ImNlZGVlMDUwOTgyMzZiZGRlM2JjNWI1OWRhZjEyM2VjZDMzYjE1MDBlNTEzODU0MmM5NDhkZTQzNTAxN2ZlYmUifQ==`
                }
            })
    },
}