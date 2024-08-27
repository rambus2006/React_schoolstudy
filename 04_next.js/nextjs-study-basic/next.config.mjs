/** @type {import('next').NextConfig} */
// https 사진 불러오기가 안될 때 이코드를 넣으면 된다. 
const nextConfig = {
    images: {
        // 모든 도메인을 통해 접근하는 이미지 표시 허용
        remotePatterns: [
            {
                protocol: "https",
                hostname: "**",
            },
        ],
    },
};

export default nextConfig;
