import MyService from '../utils/Service';
import MyUtils from '../utils/MyUtils';
const PaymentApi = {
    getAll: async () => {
        var payment = null;
        await MyService.getRequestData("/payment")
            .then(result => {
                payment = result;

            })
            .catch(err => console.log(err));
        return payment;
    },
    getPaymentByIdUser: async (id) => {
        let result = await MyService.getRequestData("/payment/idUser", { "idUser": id });
        return result
    },
    createPayment: async (data) => {
        var result = null;
        await MyService.postRequestData("/payment", data)
            .then(data => result = data)
            .catch(err => console.log(err)) 
        if (result.data) {
            console.log("result: ", result.data)
        }
        return result

    },
    editPayment: async ( data) =>{
        var payment = null;
        await MyService.postRequestData("/payment/edit-payment",data)
            .then(result => {
                console.log(result);
                payment = result;
            })
            .catch(err => console.log(err));
        return payment;
    },
}
export default PaymentApi;