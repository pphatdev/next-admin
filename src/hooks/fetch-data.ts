import axios from 'axios';
import { FilterData } from '@/types/global';
import { defaultFilterData } from '@/libs/defualt';
import { APIError } from '@/helpers/error';

export const fetchData = async ({
    api,
    params = defaultFilterData,
}: {
    api: string;
    params?: FilterData;
}) => {
    try {
        const response = await axios.get(`/api/v1/${api}`, {
            params: params,
        });
        return response.data;
    }
    catch (error: any) {
        throw new APIError(error.message, 500, error);
    }
};
