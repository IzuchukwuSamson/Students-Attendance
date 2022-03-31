import Api from '../services/Api'

export default {
    getAllStudents() {
        return Api().get('students')
    }
    
}



    // createStudent() {
    //     return Api().post('student')
    // },
    // getStudent() {
    //     return Api().get('student')
    // },
    // getStudent() {
    //     return Api().patch('student')
    // },
    // deleteStudent() {
    //     return Api().delete('student')
    // }