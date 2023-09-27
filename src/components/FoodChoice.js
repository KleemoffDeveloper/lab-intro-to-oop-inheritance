export default function FoodChoice({ m_food, setPlayer, playerIsSet }) {
  return (
    <div
      className="food-choice"
      onClick={() => {
        if (playerIsSet) {
          return;
        } else {
          setPlayer(m_food);
        }
      }}
    >
      <b>{m_food.food.name}</b>
      <img src={m_food.img} />
    </div>
  );
}
