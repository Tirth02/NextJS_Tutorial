/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        domains:["upload.wikimedia.org"]
    },
    redirects: async() =>{
        return [
            {
                source: '/random/nextredirection',
                destination: '/random',
                permanent: false
            },
            {
                source: '/random/nextredirection/:userId',
                destination: '/random',
                permanent: false
            },
            {
                source: '/random/nextredirection2',
                destination: '/random',
                permanent: false
            },
        ]
    }
};

export default nextConfig;
