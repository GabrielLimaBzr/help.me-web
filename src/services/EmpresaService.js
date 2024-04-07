import http from '../axios-api';

const endpoint = '/empresa';

const EmpresaService = {
  async getAll(params = {}) {
    try {
      const response = await http.get(endpoint, { params });
      return response.data;
    } catch (error) {
      console.error('Erro ao obter empresas:', error);
      throw error;
    }
  },

  async getById(id) {
    try {
      const response = await http.get(`${endpoint}/${id}`,);
      return response.data;
    } catch (error) {
      console.error('Erro ao obter empresa:', error);
      throw error;
    }

  },

    async create(entity) {
    try {
      await http.post(endpoint, entity);
    } catch (error) {
      console.error('Erro ao criar empresa:', error);
      throw error;
    }
  },

  async put(entity, id) {
    try {
      await http.put(`${endpoint}/${id}`, entity);
    } catch (error) {
      console.error('Erro ao atualizar empresa:', error);
      throw error;
    }
  }

}

export default EmpresaService;