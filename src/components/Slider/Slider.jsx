import { useState } from "react";
import 'swiper/css';
import { Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { API_URL } from "../../const.js";
import s from "./Slider.module.scss";


export const Slider = ({ data }) => {
	const [mainSwiper, setMainSwiper] = useState(null);
	const [thumbsSwiper, setThumbsSwiper] = useState(null);
	return (
		<div className={s.picture}>
			<div className={s.sliderMain}>
				{data?.images.length ? (
					<>
						<Swiper modules={[Thumbs]} thumbs={{ swiper: thumbsSwiper }}
							onSwiper={setMainSwiper}
							spaceBetween={10}>
							{images.map((item, i) => (
								<SwiperSlide key={i} className={s.slide}>
									<img src={`${API_URL}${item}`} alt={data.name} className={s.image} />
								</SwiperSlide>
							))}
						</Swiper>
						<button onClick={() => mainSwiper.slideNext()}>next</button>
						<button onClick={() => mainSwiper.slidePrev()} >prev</button>
					</>
				) : <>Loading...</>}
			</div>

			<div className={s.sliderThumbnails}>
				{data?.images.length ? (
					<Swiper onSwiper={setThumbsSwiper}
						modules={[Thumbs]}
						watchSlidesProgress
						spaceBetween={14}
						slidesPerView={4}
					>
						{images.map((item, i) => (
							<SwiperSlide key={i} className={s.slideThumbnail}>
								<img src={`${API_URL}${item}`} alt={data.name} className={s.image} />
							</SwiperSlide>
						))}
					</Swiper>
				) : (<>Loading...</>)}
			</div>
		</div>
	)
};