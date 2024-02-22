import axios from 'axios';
import api from './ApiService';
import { Topic } from '../components/context/types';

export const fetchAllTopics = async (): Promise<Topic[]> => {
    try {
        const res = await api.get<Topic[]>('topics/');
        return res.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error('Error fetching allTopics:', error.message);

            throw new Error('An error occured while fetching alltopics');
        } else {
            console.error('Unexpected error:', error);
            throw new Error('An unexpected error occured')
        }
    }
}

