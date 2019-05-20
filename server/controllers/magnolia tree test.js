/* eslint-disable no-multiple-empty-lines */

// Example of slightly-complicated tree structure retrieved from db
const nodeTableRows2 = [
  {
    id: 7,
    project_id: 12,
    parent_id: null,
    name: 'App',
    stateful: false,
    state: null,
    props: null,
    count: '1',
  },
  {
    id: 8,
    project_id: 12,
    parent_id: 7,
    name: 'Row',
    stateful: true,
    state: null,
    props: null,
    count: '3',
  },
  {
    id: 9,
    project_id: 12,
    parent_id: 8,
    name: 'Box',
    stateful: false,
    state: null,
    props: null,
    count: '3',
  },
  {
    id: 10,
    project_id: 12,
    parent_id: 8,
    name: 'Thing',
    stateful: false,
    state: null,
    props: null,
    count: '1',
  },
  {
    id: 11,
    project_id: 12,
    parent_id: 7,
    name: 'Button',
    stateful: false,
    state: null,
    props: null,
    count: '1',
  },
];
const nodeTableRowsx = [
  {
    id: 7,
    project_id: 12,
    parent_id: null,
    name: 'App',
    stateful: false,
    state: null,
    props: null,
    count: '1',
  },
  {
    id: 8,
    project_id: 12,
    parent_id: 7,
    name: 'Row',
    stateful: true,
    state: null,
    props: null,
    count: '3',
  },
  {
    id: 9,
    project_id: 12,
    parent_id: 8,
    name: 'Box',
    stateful: false,
    state: null,
    props: null,
    count: '3',
  },
];

// Constructor function for new nodes
function TreeNode(node) {
  this.id = node.id;
  this.project_id = node.project_id;
  this.parent_id = node.parent_id;
  this.name = node.name;
  this.stateful = node.stateful;
  this.props = node.props;
  this.count = node.count;

  this.children = [];
}

// Method to insert a new node in the proper place in the tree structure, recursively if necessary
TreeNode.prototype.add = function add(node) {
  if (node.parent_id === this.id) {
    return this.children.push(node);
  }
  return this.children.forEach(child => child.add(node));
};


// Define tree's root as the first db row (because this will always be the root) and remove from nodeTableRows
const root = new TreeNode(nodeTableRows2.shift());

// Iterate through nodeTableRows, turning them into TreeNodes and inserting them through the root
nodeTableRows2.forEach((nodeRow) => {
  const nodeToInsert = new TreeNode(nodeRow);
  root.add(nodeToInsert);
});

// Root now points to a fully-populated tree
console.log(JSON.stringify(root, null, 2));