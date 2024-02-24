import axios from 'axios';
import api from './ApiService';
import { Reply } from '../components/context/types';

export const fetchAllReplyNoFilter = async (): Promise<Reply[]> => {
    try {
        const res = await api.get<Reply[]>(`replies/`);
        return res.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error('Error fetching AllReplyNoFilter:', error.message);

            throw new Error('An error occured while fetching AllReplyNoFilter');
        } else {
            console.error('Unexpected error:', error);
            throw new Error('An unexpected error occured')
        }
    }
}

export const fetchAllReplyFromTopicTitle = async (title: String): Promise<Reply[]> => {
    try {
        const res = await api.get<Reply[]>(`replies/topictitle/${title}`);
        return res.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error('Error fetching AllReplyFromTopicTitle:', error.message);

            throw new Error('An error occured while fetching AllReplyFromTopicTitle');
        } else {
            console.error('Unexpected error:', error);
            throw new Error('An unexpected error occured')
        }
    }
}

export const fetchAllReplyFromUserId = async (createdBy: Number): Promise<Reply[]> => {
    try {
        const res = await api.get<Reply[]>(`replies/user/${createdBy}`);
        return res.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error('Error fetching AllReplyFromUserId:', error.message);

            throw new Error('An error occured while fetching AllReplyFromUserId');
        } else {
            console.error('Unexpected error:', error);
            throw new Error('An unexpected error occured')
        }
    }
}

export const fetchAllReplyFromTopicId = async (topicId: Number): Promise<Reply[]> => {
    try {
        const res = await api.get<Reply[]>(`replies/topic/${topicId}`);
        return res.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error('Error fetching AllReplyFromTopicId:', error.message);

            throw new Error('An error occured while fetching AllReplyFromTopicId');
        } else {
            console.error('Unexpected error:', error);
            throw new Error('An unexpected error occured')
        }
    }
}

export const createReplyWithTopicID = async (topicId:Number, createReplyData:Reply): Promise<Reply[]> => {
    try {
        const res = await api.post<Reply[]>(`replies/${topicId}/create`);
        return res.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error('Error createReplyWithTopicID:', error.message);

            throw new Error('An error occured while createReplyWithTopicID');
        } else {
            console.error('Unexpected error:', error);
            throw new Error('An unexpected error occured')
        }
    }
}

export const updateReplyWithId = async (id:Number): Promise<Reply[]> => {
    try {
        const res = await api.patch<Reply[]>(`replies/${id}/update`);
        return res.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error('Error updateReplyWithId:', error.message);

            throw new Error('An error occured while updateReplyWithId');
        } else {
            console.error('Unexpected error:', error);
            throw new Error('An unexpected error occured')
        }
    }
}

export const switchActiveWithId = async (id:Number): Promise<Reply[]> => {
    try {
        const res = await api.patch<Reply[]>(`replies/${id}/switch`);
        return res.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error('Error switchActiveWithId:', error.message);

            throw new Error('An error occured while switchActiveWithId');
        } else {
            console.error('Unexpected error:', error);
            throw new Error('An unexpected error occured')
        }
    }
}