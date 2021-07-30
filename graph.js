function GraphChallenge(strArr) {

    const numNodes = parseInt(strArr[0]);
    const nodes = strArr.slice(1, numNodes + 1);
    const paths = strArr.slice(numNodes + 1, strArr.length);

    const map = new Map();

    nodes.forEach(node => {
        map.set(node, new Node(node));
    });

    paths.forEach(path => {
        const [start, end] = path.split('-');
        map.get(start).addEdge(map.get(end));
        map.get(end).addEdge(map.get(start)); // bi-directional
    });

    const start = nodes[0];
    const end = nodes[nodes.length - 1];

    const shortestPath = map.get(start).pathTo(end);

    if (shortestPath.length === 0) {
        return -1;
    }

    return shortestPath.join('-');
}

function Node(key) {
    this.key = key;
    this.edges = [];
}

Node.prototype.addEdge = function(edge) {
    this.edges.push(edge);
};

Node.prototype.pathTo = function(endKey, visited = []) {
    if (visited.includes(this.key)) {
        return [];
    }

    if (this.key === endKey) {
        return [this.key];
    }

    const childrenPaths = [];
    for (let i = 0; i < this.edges.length; i++) {
        const edge = this.edges[i];
        const copy = visited.slice();
        copy.push(this.key);
        const children = edge.pathTo(endKey, copy);
        if (children.length > 0) {
            const selfAndChildren = [];
            selfAndChildren.push(this.key, ...children);
            childrenPaths.push(selfAndChildren);
        }
    }
    childrenPaths.sort((a, b) => a.length - b.length);

    return childrenPaths.length > 0 ? childrenPaths[0] : [];
};

console.log(GraphChallenge(["4","X","Y","Z","W","X-Y","Y-Z","X-W"]))