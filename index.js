function getName(node) {
  return node.name
}

function headNode(linkedList, collection) {
  return collection[linkedList]
}

function next (node, collection) {
  var nextKey = node.next
  return collection[nextKey]
}

function nodeAt(index, linkedList, collection){
  let currentNode = headNode(linkedList, collection);
  for(let i = 0; i < index; i++){
     currentNode = next(currentNode, collection);
  }
  return currentNode;
}


function addressAt(index, linkedList, collection){
  if(index == 0){
    return linkedList
  } else {
    let node = nodeAt(index-1, linkedList, collection)
    return node.next
  }
}

function indexAt(node, collection, linkedList){
  let currentNode = headNode(linkedList, collection);
  let currentIdx = 0
  while(currentNode != node){
    currentIdx++
    currentNode = next(currentNode, collection)
  }
  return currentIdx
}

function insertNodeAt(index, key, head, collection) {
  let nodeBefore = nodeAt(index - 1, head, collection)
  let newPointer = nodeBefore.next
  nodeBefore.next = key
  collection[key].next = newPointer
}

function deleteNodeAt(index, headKey, collection) {
  let address = addressAt(index, headKey, collection)
  let currentNode = collection[address]
  let nodeBefore = nodeAt(index-1, headKey, collection)
  let currentKey = currentNode.next
  nodeBefore.next = currentKey
  delete collection[address]
}
