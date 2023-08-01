import React from 'react';

const Jon = () => {
  const imageUrl = 'https://static.boredpanda.com/blog/wp-content/uploads/2016/10/rabbit-wears-sunglasses-photoshop-battle-original-edit.jpg';

  return (
    <div className="jon">
      <img src={imageUrl} alt="Cute Rad Bunny" />
    </div>
  );
};

export default Jon;