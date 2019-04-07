import MyService from '../utils/Service';

const ClassInfoApi = {
    getAll: async () => {
        var classes = null;
        await MyService.getRequestData("/class")
            .then(result => {
                classes = result;

            })
            .catch(err => console.log(err));
        return classes;
    }
}
export default ClassInfoApi;