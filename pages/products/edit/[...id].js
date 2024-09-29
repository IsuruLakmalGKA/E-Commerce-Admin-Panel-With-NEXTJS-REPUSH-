import Layout from "@/components/Layout";
import ProductForm from "@/components/ProductForm";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function EditProductPage() {
    const [productInfo,setpProductInfo] = useState();
    const router = useRouter();
    const { id } = router.query;

    useEffect(() => {
        if(!id){
            return;
        }
        axios.get('/api/products?id=' + id).then(responce =>{
            setpProductInfo(responce.data);
            //console.log(responce.data);
        });
    }, [id]);
    return (
        <Layout>
            <h1>Edit Product</h1>
            {productInfo && (
                <ProductForm {...productInfo} />
            )}
            
        </Layout>
    );
}