import axios from 'axios';

const PROFESSOR_API_BASE_URL = "http://localhost:8081/professors";

class ProfessorService{

    getProfessors(){
        return axios.get(PROFESSOR_API_BASE_URL)
    }

    createProfessor(professor){
        return axios.post(PROFESSOR_API_BASE_URL,professor)
    }

    getProfessorById(professorId){
        return axios.get(PROFESSOR_API_BASE_URL +'/' +professorId)
    }

    updateProfessor(professor, professorId){
        return axios.put(PROFESSOR_API_BASE_URL + '/' +professorId, professor)
    }

    deleteProfessor(professorId){
        return axios.delete(PROFESSOR_API_BASE_URL +'/' +professorId);
    }

}

export default new ProfessorService();