export function convertToHierarchical(flatArray) {
  const tree = [];
  const childrenOf = {}; // Map to store children for each parentId

  // Initialize childrenOf map and add a 'children' array to each item
  flatArray?.forEach(item => {
    item.children = []; // Add a children array to hold nested items
    if (item.manager > 0) {
      if (!childrenOf[item.manager]) {
        childrenOf[item.manager] = [];
      }
      childrenOf[item.manager].push(item);
    } else {
      tree.push(item); // Root elements
    }
  });

  // Recursively attach children to their parents
  function attachChildren(node) {
    if (childrenOf[node.id]) {
      node.children = childrenOf[node.id];
      node.children.forEach(child => attachChildren(child));
    }
  }

  // Iterate through the root elements and build the hierarchy
  tree.forEach(rootNode => attachChildren(rootNode));

  return tree;
}
