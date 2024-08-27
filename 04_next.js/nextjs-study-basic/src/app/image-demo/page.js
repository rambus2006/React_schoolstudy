import Image from 'next/image'
// 절대 경로로 지정하여 루트 폴더의 public에서 이미지 불러오기
import myLocalPic from '/public/logo.png'

export default function ImageDemoPage() {
    return (
        <div>
            <Image
                src={myLocalPic}
                alt="Description for Picture..."
            />
            {/* import 하지 않고 직접 src에 경로 제공할 경우 width, height 정보를 제공해야 함 */}
            <Image
                src="/logo.png"
                width={756}
                height={154}
                alt="Description for Picture..."
            />
            {/* 부모 요소에 position 부여 및 사이즈 설정 */}
            {/* 영역안에서 속성을 relative로 주고 사이즈에 맞게 채운다. */}
            <div style={{ position: "relative", width: "1000px", height: "300px", background: "cyan" }}> 
                {/* fill 속성 제공 및 부모 크기에 적절히 맞추도록 object-fit 속성 적용 */}
                <Image
                    src="/next.svg"
                    width={756}
                    height={154}
                    alt="Description for Picture..." //시각 장애인을 위한 스피치 기능 
                    fill //영역으로 채운다. 
                    style={{ objectFit: 'contain' }}
                />
            </div>
        </div>
    )
}