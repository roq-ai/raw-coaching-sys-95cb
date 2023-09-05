import axios from 'axios';
import queryString from 'query-string';
import { RenamedclassInterface, RenamedclassGetQueryInterface } from 'interfaces/renamedclass';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getRenamedclasses = async (
  query?: RenamedclassGetQueryInterface,
): Promise<PaginatedInterface<RenamedclassInterface>> => {
  const response = await axios.get('/api/renamedclasses', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createRenamedclass = async (renamedclass: RenamedclassInterface) => {
  const response = await axios.post('/api/renamedclasses', renamedclass);
  return response.data;
};

export const updateRenamedclassById = async (id: string, renamedclass: RenamedclassInterface) => {
  const response = await axios.put(`/api/renamedclasses/${id}`, renamedclass);
  return response.data;
};

export const getRenamedclassById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/renamedclasses/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteRenamedclassById = async (id: string) => {
  const response = await axios.delete(`/api/renamedclasses/${id}`);
  return response.data;
};
