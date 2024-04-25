export const BlockRenderer = ({ blocks }) => {
  return blocks.map((block, index) => {
    switch (block.name) {
      case "core/cover": {
        return <div key={block.id}>core cover</div>;
      }
      default:
        return null;
    }
  });
};
