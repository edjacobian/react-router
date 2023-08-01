import React from 'react';

const Chimi = () => {
  const imageUrl = 'https://www.cookingclassy.com/wp-content/uploads/2013/10/chicken-chimichangas-6-768x1152.jpg';

  return (
    <div className="chimi">
      <img src={imageUrl} alt="Chimichanga Image" />
    </div>
  );
};

export default Chimi;