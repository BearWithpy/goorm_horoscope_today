import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import styles from "components/Card/card.module.css";
import horoscopeCall from "utils/horoscope";

const Card = (): React.JSX.Element => {
  const imageUrls: string[] = [
    "https://blog.kakaocdn.net/dn/bLY3BJ/btsBb8VXuP7/W8tkLTVdr688IL5Vq4S4VK/img.png",
    "https://blog.kakaocdn.net/dn/d8tJmb/btsBfI9CyaT/QmUjMmgSm2TyPJlZbtTs1K/img.png",
    "https://blog.kakaocdn.net/dn/bF9z7k/btsA7s2mZcQ/kW7Tbv3llKfKtEX8aLKufK/img.png",
  ];

  //랜덤하게 카드를 뽑아준다.
  function getRandomImagePaths(paths: string[], count: number): string[] {
    const selectedImages = new Set<string>();
    while (selectedImages.size < count) {
      const randomIndex = Math.floor(Math.random() * paths.length);
      selectedImages.add(paths[randomIndex]);
    }
    return Array.from(selectedImages);
  }

  // 이미지 경로들을 저장할 상태
  const [randomImagePaths, setRandomImagePaths] = useState<string[]>([]);
  const [isClicked, setIsClicked] = useState(false);
  const [guidance, setGuidance] = useState("카드를 클릭하세요.");
  const [isAnimated, setIsAnimated] = useState(false);

  // 컴포넌트가 마운트될 때 랜덤 이미지 경로를 선택
  useEffect(() => {
    setRandomImagePaths(getRandomImagePaths(imageUrls, 1));
  }, []); // 빈 의존성 배열을 사용하여 처음 마운트될 때만 실행

  useEffect(() => {
    setIsAnimated(true);
    const timer = setTimeout(() => {
      setIsAnimated(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleCardClick = () => {
    setIsClicked(!isClicked);
    setGuidance("원하는 카드를 고르세요.");
  };

  return (
    <div className={styles.card_space}>
      {isClicked ? (
        <>
          <Link to="/detail/1" className={styles.pattern} />
          <Link to="/detail/2" className={styles.pattern} />
          <Link to="/detail/3" className={styles.pattern} />
          <Link to="/detail/4" className={styles.pattern} />
          <Link to="/detail/5" className={styles.pattern} />
        </>
      ) : (
        <div className={styles.flip}>
          <div className={styles.card}>
            <div className={styles.card_front}>
              {randomImagePaths.map((path, index) => (
                <img
                  className={styles.card_img}
                  key={index}
                  src={path}
                  alt={`Random Card Front ${index}`}
                />
              ))}
            </div>
            <div
              className={styles.card_back}
              onClick={() => {
                console.log("Go Detail page and check out");
                handleCardClick();
              }}
            >
              <div className={styles.pattern}></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
