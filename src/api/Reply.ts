import axios from 'axios';
import api from './ApiService';
import { Reply } from '../components/context/types';

export const fetchAllReplyNoFilter = async (): Promise<Reply[]> => {
    try {
        const res = await api.get<Reply[]>(`replies/`);
        return res.data;
    } catch (error) {
        if (axios.isAxiosError(error) && error.response?.status === 404) {
            return [];
        } else {
            console.error('Unexpected error:', error);
            throw new Error('An unexpected error occured')
        }
    }
}

export const fetchAllReplyFromTopicTitle = async (title: string): Promise<Reply[]> => {
    try {
        const res = await api.get<Reply[]>(`replies/topictitle/${title}`);
        return res.data;
    } catch (error) {
        if (axios.isAxiosError(error) && error.response?.status === 404) {
            return [];
        } else {
            console.error('Unexpected error:', error);
            throw new Error('An unexpected error occured')
        }
    }
}

export const fetchAllReplyFromUserId = async (createdBy: number): Promise<Reply[]> => {
    try {
        const res = await api.get<Reply[]>(`replies/user/${createdBy}`);
        return res.data;
    } catch (error) {
        if (axios.isAxiosError(error) && error.response?.status === 404) {
            return [];
        } else {
            console.error('Unexpected error:', error);
            throw new Error('An unexpected error occured')
        }
    }
}

export const fetchAllReplyFromTopicId = async (topicId: number): Promise<Reply[]> => {
    try {
        const res = await api.get<Reply[]>(`replies/topic/${topicId}`);
        return res.data;
    } catch (error) {
        if (axios.isAxiosError(error) && error.response?.status === 404) {
            return [];
        } else {
            console.error('Unexpected error:', error);
            throw new Error('An unexpected error occured')
        }
    }
}

export const createReplyWithTopicID = async (topicId:number, createReplyData:Reply): Promise<Reply[]> => {
    try {
        const res = await api.post<Reply[]>(`replies/${topicId}/create`);
        return res.data;
    } catch (error) {
        if (axios.isAxiosError(error) && error.response?.status === 404) {
            return [];
        } else {
            console.error('Unexpected error:', error);
            throw new Error('An unexpected error occured')
        }
    }
}

export const updateReplyWithId = async (id:number): Promise<Reply[]> => {
    try {
        const res = await api.patch<Reply[]>(`replies/${id}/update`);
        return res.data;
    } catch (error) {
        if (axios.isAxiosError(error) && error.response?.status === 404) {
            return [];
        } else {
            console.error('Unexpected error:', error);
            throw new Error('An unexpected error occured')
        }
    }
}

export const switchActiveWithId = async (id:number): Promise<Reply[]> => {
    try {
        const res = await api.patch<Reply[]>(`replies/${id}/switch`);
        return res.data;
    } catch (error) {
        if (axios.isAxiosError(error) && error.response?.status === 404) {
            return [];
        } else {
            console.error('Unexpected error:', error);
            throw new Error('An unexpected error occured')
        }
    }
}

// export const replyCountWithTopicId = async (id:number): Promise<Reply[]> => {
//     try {
//         const res = await api.get<Reply[]>(`replies/countReply/${id}`);
//         return res.data;        
//     } catch (error) {
//         if (axios.isAxiosError(error) && error.response?.status === 404) {
//             return [];
//         } else {
//             console.error('Unexpected error:', error);
//             throw new Error('An unexpected error occured')
//         }
//     }
// }