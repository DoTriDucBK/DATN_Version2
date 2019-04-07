const MyUtils = {
    currencyFormat : function(currency){
        return currency.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
    }
}
export default MyUtils;