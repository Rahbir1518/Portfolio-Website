import React from 'react';
import SpotlightCard from './SpotlightCard';

const TechStack = () => {
  return (
    <div className="div4 p-4">
      {/* Outer wrapper: 80% width and centered */}
      <div className="w-[98%] mx-auto">
        {/* Flex container with horizontal spacing */}
        <div className="flex space-x-4">
          <SpotlightCard className="flex-1 text-secondary font-secondary bg-primary/60 hover:bg-primary transition-colors duration-450" spotlightColor="rgba(185, 140, 115, 1)">
          What is Lorem Ipsum?
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </SpotlightCard>
          <SpotlightCard className="flex-1 text-secondary font-secondary bg-primary/60 hover:bg-primary transition-colors duration-450" spotlightColor="rgba(185, 140, 115, 1)">
            {/* Content for Card 2 */}
          </SpotlightCard>
          <SpotlightCard className="flex-1 text-secondary font-secondary bg-primary/60 hover:bg-primary transition-colors duration-450" spotlightColor="rgba(185, 140, 115, 1)">
            {/* Content for Card 3 */}
          </SpotlightCard>
        </div>
      </div>
    </div>
  );
};

export default TechStack;
