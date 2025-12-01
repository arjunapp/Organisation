export function convertToHierarchical(flatArray) {
  const tree = [];
  const childrenOf = {};
  flatArray?.forEach(item => {
    item.children = []; 
    if (item.manager > 0) {
      if (!childrenOf[item.manager]) {
        childrenOf[item.manager] = [];
      }
      childrenOf[item.manager].push(item);
    } else {
      tree.push(item); 
    }
  });

  function attachChildren(node) {
    if (childrenOf[node.id]) {
      node.children = childrenOf[node.id];
      node.children.forEach(child => attachChildren(child));
    }
  }

  tree.forEach(rootNode => attachChildren(rootNode));

  return tree;
}
