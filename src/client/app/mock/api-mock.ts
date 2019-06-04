import { Api } from '../models/api';

    export const Apis: Api[] = [{
        id:1,
        name:"1",
        type:1,
        status:true,
        endPoint: 'http://randomValue.com/json'
    },
    {
        id:2,
        name:"API_2_MOCK",
        type:2,
        status:false,
        endPoint: 'http://randomValue.com/xml'
    },
    {
        id:3,
        name:"API_3_MOCK",
        type:1,
        status:false,
        endPoint: 'http://randomString.com/json'
    },
    {
        id:4,
        name:"API_3_MOCK",
        type:2,
        status:true,
        endPoint: 'http://randomValue.com/xml'
    },
    {
        id:5,
        name:"API_5_MOCK",
        type:1,
        status:false,
        endPoint: 'http://localhost:4123'
    },
    {
        id:6,
        name:"API_6_MOCK",
        type:2,
        status:true,
        endPoint: 'http://localhost:5000'
    },
    {
        id:1,
        name:"API_?_MOCK",
        type:1,
        status:true,
        endPoint: 'http://localhost:8080'
    },
    {
        id:2,
        name:"API_2_MOCK",
        type:2,
        status:false,
        endPoint: 'http://google.com.br'
    },
    {
        id:3,
        name:"API_3_MOCK",
        type:1,
        status:false,
        endPoint: 'http://localhost:3/json'
    },
    {
        id:4,
        name:"API_3_MOCK",
        type:2,
        status:true,
        endPoint: 'http://localhost:4123/xml'
    },
    {
        id:5,
        name:"API_5_MOCK",
        type:1,
        status:false,
        endPoint: 'http://localhost:4123'
    },
    {
        id:6,
        name:"API_6_MOCK",
        type:2,
        status:true,
        endPoint: 'http://localhost:4123'
    }
]