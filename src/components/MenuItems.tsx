'use client';
import { useRouter } from "next/navigation";

const PublicSpaceMenuItem = () => {
    const router = useRouter();
 
    return <a onClick={() => {
        router.push('/public');
    }}>Public space</a>;
};

const PrivateSpaceMenuItem = () => {
    const router = useRouter();
    
    return <a onClick={() => {
        router.push('/private');
    }}>Private space</a>;
};

export { PublicSpaceMenuItem, PrivateSpaceMenuItem };
