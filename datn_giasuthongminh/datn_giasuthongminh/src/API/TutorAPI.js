import MyService from '../utils/Service';

const TutorApi = {
    getAll: async () => {
        var tutors = null;
        await MyService.getRequestData("/tutor")
            .then(result => {
                tutors = result;

            })
            .catch(err => console.log(err));
        return tutors;
    }
}
export default TutorApi;