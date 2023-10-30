const order = {customer: "Marco",};

// if (order && order.customer && order.customer.address && !order.customer.address.city) {
//     console.log('City is required');
// }
// questo non funziona!


if (order.hasOwnProperty("city")){
    console.log("Control ok");
} else {
    console.log("City is required");
}