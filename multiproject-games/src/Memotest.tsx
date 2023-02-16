import { useState, useEffect } from "react";

const IMAGES = [
  "src/assets/images/chicha-1.jpg",
  "src/assets/images/chicha-2.jpg",
  "src/assets/images/pichu-1.jpg",
  "src/assets/images/pichu-2.jpg",
  "src/assets/images/luz-1.jpg",
  "src/assets/images/luz-2.jpg",
  "src/assets/images/greta-1.jpg",
  "src/assets/images/greta-2.jpg",
  "src/assets/images/yeni-1.jpeg",
  "src/assets/images/yeni-2.jpg",
]
  .flatMap((image) => [`a|${image}`, `b|${image}`])
  .sort(() => Math.random() - 0.5);

export default function MemoTest() {
  const [guessed, setGuessed] = useState<string[]>([]);
  const [selected, setSelected] = useState<string[]>([]);

  useEffect(() => {
    if (selected.length === 2) {
      if (selected[0].split("|")[1] === selected[1].split("|")[1]) {
        setGuessed((guessed) => guessed.concat(selected));
      }
      setTimeout(() => setSelected([]), 1000);
    }
  }, [selected]);

  useEffect(() => {
    if (guessed.length === IMAGES.length) {
      alert("GANASTE!!!");
    }
  }, [guessed]);

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          margin: 50,
        }}
      >
        <h1>MEMOTEST</h1>
        <p>Este memotest es un pequeño homenaje a las mascotas que amo</p>
      </div>
      <ul
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minMax(128px, 1fr))",
          gap: 24,
        }}
      >
        {IMAGES.map((image) => {
          const [, url] = image.split("|");
          return (
            <li
              key={image}
              style={{
                display: "flex",
                justifyContent: "center",
                cursor: "pointer",
                padding: 4,
                border: "1px solid #666",
                borderRadius: 12,
              }}
              onClick={() =>
                selected.length < 2 &&
                setSelected((selected) => selected.concat(image))
              }
            >
              {selected.includes(image) || guessed.includes(image) ? (
                <img src={url} alt="pet-card" />
              ) : (
                <img src="src/assets/images/misterio.jpg" alt="memotest-card" />
              )}
            </li>
          );
        })}
        ;
      </ul>
    </>
  );
}
