import NewCarousel from "./_component/NewCarousel";
import { DemoCarouselImages, DemoCarouselPosters } from "./_constants";

// Using Shadcn UI
// ref : https://ui.shadcn.com/

// 기존에 사용하신 스와이퍼 라이브리는 지금 프로젝트에서 쓰기엔 두 가지 단점이 있습니다.
// 첫째, 온전히 훅을 사용하는 리액트 방식으로 컴포넌트 스타일을 만듭니다. 현재 next 프로젝트는 tailwindcss 기반이므로 어울리지 않습니다.
// 둘, 훅을 사용해서 스타일을 넣는 방식이 인라인 스타일을 만들거나 swiper 모듈에 사전 정의된 스타일을 기반으로 합니다. 이를 수정하려면 모듈 자체를 수정하거나
// 커스텀 훅을 따로 오버라이딩 해야 하는데 굳이? 하는 작업입니다.
// 직접 구현 하시는건 따로 흔적이 안보여서 라이브러리 가져다 쓰신거 같습니다. 저도 흔히 쓰는 UI 라이브러리를 사용했습니다.
// tailwindcss 기반이며 원하는 동작을 말끔히 해내는 shadcn ui를 사용한 데모입니다. 자세한 내용은 위 링크 참고해 주세요.(ctrl + 좌클릭 ref)
// next + tailwindcss 프로젝트에서 UI 라이브러리를 쓰신다면 무조건 shadcn ui를 사용하는 것을 추천 드립니다.
const CarouselDemoPage = () => {
    return (
        <div className="w-full flex flex-col justify-center items-center py-20 gap-10">
            <NewCarousel images={DemoCarouselImages} isAutoPlay />
            <NewCarousel images={DemoCarouselPosters} />
        </div>
    );
};

export default CarouselDemoPage;
