import React, { useState, useEffect, useMemo } from "react";
import styles from "components/Card/DetailCard/Hands2/hands2.module.css";

const Hands2 = () => {
  // 이미지 경로들을 저장할 상태
  const [randomImagePaths, setRandomImagePaths] = useState<string[]>([]);
  const [isVisible, setIsVisible] = useState(true);
  const [isPositioning, setIsPositioning] = useState(false);

  const imageUrls: string[] = [
    "https://blog.kakaocdn.net/dn/bLY3BJ/btsBb8VXuP7/W8tkLTVdr688IL5Vq4S4VK/img.png",
    "https://blog.kakaocdn.net/dn/d8tJmb/btsBfI9CyaT/QmUjMmgSm2TyPJlZbtTs1K/img.png",
    "https://blog.kakaocdn.net/dn/bF9z7k/btsA7s2mZcQ/kW7Tbv3llKfKtEX8aLKufK/img.png",
  ];

  // 컴포넌트가 마운트될 때 랜덤 이미지 경로를 선택
  useEffect(() => {
    setRandomImagePaths(getRandomImagePaths(imageUrls, 1));
  }, []); // 빈 의존성 배열을 사용하여 처음 마운트될 때만 실행

  //랜덤하게 카드를 뽑아준다.
  function getRandomImagePaths(paths: string[], count: number): string[] {
    const selectedImages = new Set<string>();
    while (selectedImages.size < count) {
      const randomIndex = Math.floor(Math.random() * paths.length);
      selectedImages.add(paths[randomIndex]);
    }
    return Array.from(selectedImages);
  }

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setRandomImagePaths(getRandomImagePaths(imageUrls, 1));
  //   }, 3000);
  //   return () => clearTimeout(timer);
  // }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setIsPositioning(true);
    }, 2300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={styles.card_space}>
      <div
        className={styles.flip}
        style={{ position: isPositioning ? "absolute" : "inherit" }}
      >
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
          <div className={styles.card_back}>
            <div className={styles.pattern}></div>
          </div>
        </div>
      </div>
      <div
        className={styles.pattern}
        style={{ display: isVisible ? "block" : "hidden" }}
      ></div>
      <div
        className={styles.pattern}
        style={{ display: isVisible ? "block" : "hidden" }}
      ></div>
      <div
        className={styles.pattern}
        style={{ display: isVisible ? "block" : "hidden" }}
      ></div>
      <div
        className={styles.pattern}
        style={{ display: isVisible ? "block" : "hidden" }}
      ></div>
    </div>
  );
};

export default Hands2;
