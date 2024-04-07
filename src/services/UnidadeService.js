import http from '../axios-api';

const UnidadeService = {
    async getAll(){
        try {
            const response = await http.get('/unidade');
            return response.data;
          } catch (error) {
            console.error('Erro ao obter unidades:', error);
            throw error;
          } 
    },
    
}

export default UnidadeService;