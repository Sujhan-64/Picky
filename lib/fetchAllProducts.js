
export async function fetchAllProducts() {
    try{
        const res = await fetch('/api/productShow');
        return res.json();
    }
    catch(error){
        console.log("Error fetching all products" + error);
        throw new Error("Failed to fetch All products from DB");
    }
}