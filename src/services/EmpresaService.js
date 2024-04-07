import http from '../axios-api';

const endpoint = '/empresa';

const EmpresaService = {
    async getAll(params = {}){
        try {
            const response = await http.get(endpoint, {params});
            return response.data;
          } catch (error) {
            console.error('Erro ao obter empresas:', error);
            throw error;
          } 
    },
    
}

export default EmpresaService;