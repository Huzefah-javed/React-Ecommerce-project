
   const singleProductApi = async({ params }) => {
    console.log(params);


    try {
        const response = await fetch(`https://fakestoreapi.com/products/${params.singleProduct}`);
        const data = await response.json();
        return data;

    } catch (error) {
        console.log(error);

    }
    return data;
}
export default singleProductApi;
