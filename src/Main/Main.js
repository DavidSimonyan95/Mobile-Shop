import { useEffect, useRef, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Link } from "react-router-dom";
import fakeData from "../FakeData/FakeData";
import s from "../Main/Main.module.scss";
import { useTranslation } from "../context/languageContext";
import { setSearchValue } from "../redux/slices/searchSlice";
import { FaSearch,FaCartPlus } from "react-icons/fa";
import { setCart } from "../redux/slices/cartSlice";

function Main() {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const searchValue = useSelector((state) => state.searchValue.value);
  const category = useSelector((state) => state.searchValue.category);
  const cart = useSelector((state) => state.cart);
  const [filteredData, setFilteredData] = useState(fakeData);
  const inputRef = useRef();

  useEffect(() => {
    if (category === "all") {
      setFilteredData(fakeData);
      if (category === "all" && searchValue) {
        setFilteredData(
          fakeData.filter((item) =>
            item.name.toLowerCase().includes(searchValue.toLowerCase())
          )
        );
      }
    } else {
      if (category && !searchValue) {
        setFilteredData(
          fakeData.filter(
            (item) => item.category.toLowerCase() === category.toLowerCase()
          )
        );
      } else if (searchValue && category) {
        setFilteredData(
          fakeData.filter(
            (item) =>
              item.category.toLowerCase() === category.toLowerCase() &&
              item.name.toLowerCase().includes(searchValue.toLowerCase())
          )
        );
      } else if (!category && searchValue) {
        setFilteredData(
          fakeData.filter((item) =>
            item.name.toLowerCase().includes(searchValue.toLowerCase())
          )
        );
      }
    }
  }, [searchValue, category]);

 
  return (
    <>
      <div className={s.searchFilter}>
        <Swiper
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            550: {
              slidesPerView: 2,
            },
            653: {
              slidesPerView: 3,
            },

            800: {
              slidesPerView: 4,
            },

            900: {
              slidesPerView: 5,
            },
          }}
          className={s.mySwiper}
        >
          <SwiperSlide>
            <div
              onClick={() =>
                dispatch(
                  setSearchValue({
                    category: "all",
                  })
                )
              }
            >
              {t("all")}
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              onClick={() =>
                dispatch(
                  setSearchValue({
                    category: "mobile",
                  })
                )
              }
            >
              {t("phones")}
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              onClick={() =>
                dispatch(
                  setSearchValue({
                    category: "accessories",
                  })
                )
              }
            >
              {t("accessories")}
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              onClick={() =>
                dispatch(
                  setSearchValue({
                    category: "tablets",
                  })
                )
              }
            >
              {t("tablets")}
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              onClick={() =>
                dispatch(
                  setSearchValue({
                    category: "watches",
                  })
                )
              }
            >
              {t("watches")}
            </div>
          </SwiperSlide>
        </Swiper>

        <div className={s.search}>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              inputRef.current.value = "";
            }}
          >
            <input type="text" ref={inputRef} placeholder={t("search")} />
            <button
              onClick={() =>
                dispatch(
                  setSearchValue({
                    value: inputRef.current.value,
                    category,
                  })
                )
              }
            >
              <FaSearch />
            </button>
          </form>
        </div>
      </div>
      <div className={s.products}>
        {filteredData.length > 0 ? (
          filteredData.map((product, index) => {
            return (
              <Link to={`/${product.id}`} key={product.id}>
                <div key={product.id} className={s.product}>
                  <img src={product.image} alt={index}></img>
                  <p>{product.name}</p>
                  <div
                    onClick={() => {
                      dispatch(setCart(product));
                    }}
                    
                  >
                   < FaCartPlus className={s.cardPlus}/>
                  </div>
                </div>
              </Link>
            );
          })
        ) : (
          <div className={s.empty}>Ese Epmty</div>
        )}
      </div>
    </>
  );
}
export default Main;
