import * as axios from 'axios';

// , {headers: {'Authorization': `Bearer eyJpdiI6Im9mV1NTMlFZQTlJeWlLQ3liVks1MGc9PSIsInZhbHVlIjoiRTJBbUR4dHp1dWJ3ekQ4bG85WVZya3ZpRGlMQ0g5ZHk4M05UNUY4Rmd3eFM3czc2UDRBR0E4SDR5WXlVTG5DUDdSRTJTMU1KQ2lUQmVZYXZZOHJJUVE9PSIsIm1hYyI6ImE5YmNiODljZjMzMTdmMDc4NjEwN2RjZTVkNzBmMWI0ZDQyN2YzODI5YjQxMzE4MWY0MmY0ZTQ1OGY4NTkyNWQifQ==`}}

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
                    'Token': `eyJpdiI6ImQ3VDZra1hkUmQwWlA3VllmUmVuNnc9PSIsInZhbHVlIjoiQUs5SU83WmVCOHdpdmh0UWNaOU5pM1preVErS2NoNTRSVzJKUnJZZFlUbmh0SlVucFV1ZDFTKzVpUTl1TW9GNUJlNTlcL0VpUWRuQ2F5a0Q0VlcyRkpRPT0iLCJtYWMiOiJiNjgxYmI3ZDhhOTFkNTc4OWYwMTllNWU5MTU2NTFjNWFjY2YyOWNmOGNhZGZmY2ViMzhkOGMyMGM3ZTBkN2Q0In0=`
                }
            })
    },
}